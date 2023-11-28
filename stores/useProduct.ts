import { type Database } from "~/database.types";

export const useProduct = defineStore("product", {
  state: (): {
    dataProductDashboard: Array<any>;
    dataProductCart: Array<Chart>;
  } => ({
    dataProductDashboard: [],
    dataProductCart: [],
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
        //todo error
      }

      if (data.data) {
        this.dataProductCart = data.data;
      }
    },
    async getDetailCheckout() {
      const supabase = useSupabaseClient<Database>();
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
      }

      if (data.data) {
      }
    },
    async insertProductToCart() {
      const supabase = useSupabaseClient<Database>();

      const result = await supabase.from("tb_cart").insert({
        id: 0,
        created_at: "",
        update_at: "",
        product_id: 0,
        quantity: 0,
        user_id: "",
      });

      if (result.error) {
      }

      if (result.data) {
      }
    },
  },
});
