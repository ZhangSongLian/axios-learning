import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('../components/HelloWorld.vue')
    },
   
    {
      path:'/ContactList1',
      name:'axios请方法',
      component:()=> import('../components/ContactList1.vue')
    },
    // {
    //   path:'/2-3',
    //   name:'axios并发请求',
    //   component:()=> import('./views/2-3.vue')
    // },
    
  ]
})
