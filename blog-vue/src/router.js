import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FormArticle from './views/FormArticle.vue'
import Confirm from './views/Confirm.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path: '/formArticle',
      component: FormArticle,
    },
    {
      path: '/confirm',
      name:'confirm',
      component: Confirm,
    },

  ]
})