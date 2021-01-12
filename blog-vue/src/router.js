import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FormArticle from './views/FormArticle.vue'
import FormComplete from './views/FormComplete.vue'

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
      path: '/formComplete',
      component: FormComplete,
      name:'FormComplete',
      props:true
    },

  ]
})