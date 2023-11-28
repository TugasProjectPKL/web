import { type Database } from "~/database.types";

export const useProduct = defineStore("product", {
  state: () => ({
    dataProductDashboard: Array<any>(),
  }),
  actions: {
    async getListProductDashboard() {
      const supabase = useSupabaseClient<Database>();

      const data = await supabase.from("tb_product").select().limit(2);

      if (data.error) {
        this.dataProductDashboard = [];
      }
      if (data != null) {
        this.dataProductDashboard = data.data!;
      }
    },
    async getListProductChart() {
      const supaase = useSupabaseClient<Database>();

      const data = await supaase.from("tb_cart").select(`
            id,
            tb_product(

            )
            `);
    },
  },
});
