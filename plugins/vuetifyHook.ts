import type { ModuleOptions, Nuxt } from "nuxt/schema";
import vuetify from "vite-plugin-vuetify";

export const vuetifyHook = (_options: ModuleOptions, nuxt: Nuxt) => {
  nuxt.hooks.hook("vite:extendConfig", (config) => {
    // @ts-expect-error
    config.plugins.push(vuetify({ autoImport: true }));
  });
};
