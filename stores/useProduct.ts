import { useToast } from "vue-toastification";
import { type Database } from "~/database.types";

export const useProduct = defineStore("product", {
  state: (): {
    dataProductDashboard: Array<Product>;
    dataProductCart: Array<Chart>;
    dataProductShop: Array<Product>;
  } => ({
    dataProductDashboard: [],
    dataProductCart: [],
    dataProductShop: [],
  }),
  getters: {
    getTotal: ({ dataProductCart }) => {
      if (dataProductCart.length < 1) return 0;
      return dataProductCart
        .map((value: Chart) => value.quantity * value.tb_product.product_price)
        .reduce((acc, current) => acc + current);
    },
  },
  actions: {
    async getListProductDashboard() {
      const supabase = useSupabaseClient<Database>();

      const data = await supabase.from("tb_product").select().limit(3);

      if (data.error) {
        this.dataProductDashboard = [];
      }
      if (data != null) {
        this.dataProductDashboard = data.data!;
      }
    },
    async getListProductChart() {
      const supaase = useSupabaseClient<Database>();
      const session = useSupabaseUser();
      const toast = useToast();

      console.log(session.value);

      const data = await supaase
        .from("tb_cart")
        .select(
          `
            id,
            user_id,
            quantity,
            product_id,
            created_at,
            updated_at,
            tb_product(
                id,
                product_name,
                product_price,
                product_description,
                product_image,
                created_at,
                updated_at
            )
        `
        )
        .eq("user_id", session.value?.id ?? "");

      if (data.error) {
        toast.error(data.error.message);
      }

      if (data.data) {
        this.dataProductCart = data.data;
      }
    },
    async getDetailCheckout() {
      const supabase = useSupabaseClient<Database>();
      const toast = useToast();
      const data = await supabase.from("tb_cart").select(`
        id,
        user_id,
        quantity,
        product_id,
        created_at,
        updated_at,
        tb_product(
            id,
            product_name,
            product_price,
            product_description,
            product_image,
            created_at,
            updated_at
        )
        `);

      if (data.error) {
        toast.error(data.error.message);
      }

      if (data.data) {
      }
    },
    async insertProductToCart(product_id: number) {
      const supabase = useSupabaseClient<Database>();
      const session = useSupabaseUser();
      const router = useRouter();
      const toast = useToast();
      if (session.value == null) {
        toast.error("Kamu belum login");
        router.replace("/auth/login");
        return;
      }

      const result = await supabase.from("tb_cart").insert({
        product_id: product_id,
        quantity: 1,
        user_id: session.value.id,
      });

      if (result.error) {
        toast.error(result.error.message);
        return;
      }

      toast.success("Berhasil menambah item");
    },
    async deleteProductCart(cartId: number) {
      const supabase = useSupabaseClient<Database>();
      const toast = useToast();
      const result = await supabase.from("tb_cart").delete().eq("id", cartId);

      if (result.error) {
        toast.error(result.error.message);
        return;
      }
      toast.success("Berhasil menghapus item");
    },
    async insertQuantity(cartId: number, qty: number) {
      const supabase = useSupabaseClient<Database>();
      const toast = useToast();
      const result = await supabase
        .from("tb_cart")
        .update({
          quantity: qty,
        })
        .eq("id", cartId);

      if (result.error) {
        toast.error(result.error.message);
        return;
      }

      toast.success("Berhasil merubah jumlah");
      this.getListProductChart();
    },
    async updateQuantity(cartId: number, qty: number, isIncrement: boolean) {
      const supabase = useSupabaseClient<Database>();
      const toast = useToast();

      if (!isIncrement) {
        if (qty < 2) {
          const remove = await supabase
            .from("tb_cart")
            .delete()
            .eq("id", cartId);

          if (remove.error) {
            toast.error("Maaf terjadi kesalahan");
            return;
          }

          toast.error("Berhasil menghapus produk");
          return;
        }
      }

      const newQty = () => {
        if (isIncrement) {
          return qty + 1;
        }
        return qty - 1;
      };
      const result = await supabase
        .from("tb_cart")
        .update({
          quantity: newQty(),
        })
        .eq("id", cartId);

      if (result.error) {
        toast.error(result.error.message);
        return;
      }

      toast.success("Berhasil merubah jumlah");
      this.getListProductChart();
    },
  },
});
