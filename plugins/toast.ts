import "vue-toastification/dist/index.css";
import Toast, {type PluginOptions} from "vue-toastification"

export default defineNuxtPlugin((app) => {
  
  const opt:PluginOptions = {

  }
  app.vueApp.use(Toast,opt)
})
