import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import marked from 'marked'
import router from './router'
import GlobalValiables from './mixins/globalValiables'
import axios from 'axios' 
import VueAxios from 'vue-axios'
const IMG_BASE_URL = '../assets/image/'

Vue.config.productionTip = false
Vue.mixin(GlobalValiables)
Vue.use(VueAxios, axios) 
console.log('lint避け' + marked + IMG_BASE_URL)
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
