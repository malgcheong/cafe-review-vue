import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/AppHome'
import Join from '@/view/AppJoin'

Vue.use(Router)

export const router = new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/join',
      component:Join
    } 
  ]
})
