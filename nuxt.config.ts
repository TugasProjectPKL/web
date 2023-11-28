import  { transformAssetUrls } from "vite-plugin-vuetify";
import { vuetifyHook } from "./plugins/vuetifyHook";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: { transpile: ["vuetify"] },
  modules: ["@nuxtjs/supabase", "@pinia/nuxt",vuetifyHook],
  pinia: {
    
  },
  imports:{
    dirs:["store"]
  },
  supabase:{
    redirect:false
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});