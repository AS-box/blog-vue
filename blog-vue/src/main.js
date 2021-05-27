import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import marked from 'marked'
import router from './router'
import GlobalValiables from './mixins/globalValiables'
import axios from 'axios' 
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.mixin(GlobalValiables)
Vue.use(VueAxios, axios) 
console.log(marked)
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
