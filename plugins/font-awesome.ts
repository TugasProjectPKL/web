/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope,faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faEnvelope)
library.add(faPaperPlane)
library.add(faTwitter)
library.add(faUserSecret)

export default defineNuxtPlugin((app) => {
  
  app.vueApp.component("font-awesome-icon",FontAwesomeIcon)
})
