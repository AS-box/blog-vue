import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Edit from './views/Edit.vue'
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
      path: '/edit',
      component: Edit,
    },
    {
      path: '/formComplete',
      component: FormComplete,
      name:'FormComplete',
      props:true
    },

  ]
})