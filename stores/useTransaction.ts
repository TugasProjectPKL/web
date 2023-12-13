import { useToast } from "vue-toastification";
import { type Database } from "~/database.types";
import toast from "~/plugins/toast";

export const useTransaction = defineStore("transaction", {
  state: () => ({
    country: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    location: "",
    state: "",
    postalCode: "",
    email: "",
    phone: "",
    note: "",
  }),
  actions: {
    async createTransaction(chart: Array<Chart>) {
      const supabase = useSupabaseClient<Database>();
      const user = useSupabaseUser();
      const toast = useToast();
      const router = useRouter();

      const insert = await supabase
        .from("tb_transaction")
        .insert({
          company_name: this.company,
          first_name: this.firstName,
          last_name: this.lastName,
          address: this.address,
          location: this.location,
          state: this.state,
          postal_code: this.postalCode,
          phone: this.phone,
          note: this.note,
          email: this.email,
          country: this.country,
          id_user: user.value?.id,
        })
        .select();
      if (insert.error) {
        toast.error(insert.error.message);
        return;
      }

      const prepare_detail = chart.map((value: Chart) => {
        return {
          transaction_id: insert.data[0].id ?? 0,
          product_id: value.tb_product.id,
          quantity: value.quantity,
          price: value.tb_product.product_price * value.quantity,
        };
      });

      const insert_detail = await supabase
        .from("tb_detail_transaction")
        .insert(prepare_detail);

      if (insert_detail.error) {
        toast.error(insert_detail.error.message);
        return;
      }

      const deleteCart = await supabase
        .from("tb_cart")
        .delete()
        .eq("user_id", user.value?.id.toString() ?? "tes");

      toast.success("Berhasil menambahkan data");

      router.replace("/");
    },
  },
});
