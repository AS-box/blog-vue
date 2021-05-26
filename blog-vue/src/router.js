import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Edit from './views/article/edit.vue'
import Create from './views/create'
import Complete from './views/edit/complete'
import Article from './views/article'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home,
      name:'Home'
    },
    {
      path: '/article',
      component: Article,
      name:'Article',
      props: true
    },
    {
      path: '/article/edit',
      component: Edit,
      name: 'Edit',
      props:true
    },
    {
      path: '/create',
      component: Create,
      name: 'Create',
      props:true
    },
    {
      path: '/edit/complete',
      component: Complete,
      name:'Complete',
      props:true
    },
    {
      path: '/create/complete',
      component: Complete,
      name:'Complete',
      props:true
    },




  ]
})