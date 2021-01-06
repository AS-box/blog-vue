import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import marked from 'marked'
import router from './router'
import GlobalValiables from './mixins/globalValiables'

Vue.config.productionTip = false
Vue.mixin(GlobalValiables)
console.log('lint避け' + marked)
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
