import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Edit from './views/edit'
import Create from './views/create'
import EditComplete from './views/edit/complete'
import CreateComplete from './views/create/complete'
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
      path: '/edit/:id',
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
      component: EditComplete,
      name:'EditComplete',
      props:true
    },
    {
      path: '/create/complete',
      component: CreateComplete,
      name:'CreateComplete',
      props:true
    },
    {
      path: '/article/:id',
      component: Article,
      name:'Article',
      props: true
    }


  ]
})