import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Edit from './views/Edit.vue'
import Create from './views/Create.vue'
import FormComplete from './views/FormComplete.vue'
import Article from './views/Article.vue'

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
      path: '/create',
      component: Create,
    },
    {
      path: '/formComplete',
      component: FormComplete,
      name:'FormComplete',
      props:true
    },
    {
      path: '/article/',
      component: Article,
      name:'Article',
      props: true
    }


  ]
})