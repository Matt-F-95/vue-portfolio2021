import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)
import VueFormulate from '@braid/vue-formulate'
Vue.use(VueFormulate)
import VueScrollSnap from 'vue-scroll-snap'
Vue.use(VueScrollSnap)
import {
  VueElevator
} from 'vue-elevator'
Vue.component('VueElevator', VueElevator)
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'
Vue.use(VueScrollProgressBar)
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faCoffee
} from '@fortawesome/free-solid-svg-icons'
import {
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
  faFontAwesome
} from '@fortawesome/free-brands-svg-icons'
import {
  faBuffer
} from '@fortawesome/free-brands-svg-icons'
import {
  faDev
} from '@fortawesome/free-brands-svg-icons'
import {
  faHtml5
} from '@fortawesome/free-brands-svg-icons'
import {
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import {
  faJsSquare
} from '@fortawesome/free-brands-svg-icons'
import {
  faMailchimp
} from '@fortawesome/free-brands-svg-icons'
import {
  faNode
} from '@fortawesome/free-brands-svg-icons'
import {
  faPhp
} from '@fortawesome/free-brands-svg-icons'
import {
  faShopify
} from '@fortawesome/free-brands-svg-icons'
import {
  faSass
} from '@fortawesome/free-brands-svg-icons'
import {
  faWordpress
} from '@fortawesome/free-brands-svg-icons'
import {
  faWordpressSimple
} from '@fortawesome/free-brands-svg-icons'
import {
  faGulp
} from '@fortawesome/free-brands-svg-icons'
import {
  faGitAlt
} from '@fortawesome/free-brands-svg-icons'
import {
  faElementor
} from '@fortawesome/free-brands-svg-icons'
import {
  faCodepen
} from '@fortawesome/free-brands-svg-icons'
import {
  faCss3Alt
} from '@fortawesome/free-brands-svg-icons'
import {
  faReact
} from '@fortawesome/free-brands-svg-icons'
import {
  faJs,
  faVuejs
} from '@fortawesome/free-brands-svg-icons'
import Modal from '@burhanahmeed/vue-modal-2';

library.add(faFontAwesome)
library.add(faUserSecret)
library.add(faCoffee)
library.add(faBuffer)
library.add(faDev)
library.add(faHtml5)
library.add(faInstagram)
library.add(faJsSquare)
library.add(faMailchimp)
library.add(faNode)
library.add(faPhp)
library.add(faShopify)
library.add(faSass)
library.add(faWordpress)
library.add(faWordpressSimple)
library.add(faGulp)
library.add(faGitAlt)
library.add(faElementor)
library.add(faCodepen)
library.add(faCss3Alt)
library.add(faReact)
library.add(faJs, faVuejs)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Modal);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')