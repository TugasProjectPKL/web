import { useToast } from "vue-toastification";
import { type Database } from "~/database.types";

export const useFeedback = defineStore("feedback", {
  state: () => ({
    firtName: "",
    lastName: "",
    email: "",
    phone: "",
    note: "",
    invoiceNumber: "",
  }),
  actions: {
    async insertFeedback() {
      const supabase = useSupabaseClient<Database>();
      const toast = useToast();

      const insert = await supabase.from("tb_feedback").insert({
        first_name: this.firtName,
        last_name: this.lastName,
        email: this.email,
        phone: this.phone,
        note: this.note,
        invoice_number: this.invoiceNumber,
      });

      if (insert.error) {
        toast.error(insert.error.message);
        return;
      }

      toast.success("Komplain anda sudah tersimpan");
      this.firtName = "";
      this.lastName = "";
      this.email = "";
      this.phone = "";
      this.note = "";
      this.invoiceNumber = "";
    },
  },
});
