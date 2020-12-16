import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import marked from 'marked'

Vue.config.productionTip = false
console.log('lint避け' + marked)
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
