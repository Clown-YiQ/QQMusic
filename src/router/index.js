import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import Index from '@/page/index'
import Search from '@/page/search'
import songInfo from '@/page/songInfo'
import musicPlay from '@/page/musicPlay'
import blankPage from '@/layout/blank'
import Login from '@/page/login'
import Register from '@/page/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/search',
          name: 'search',
          component: Search
        },
        {
          path: '/songInfo',
          name: 'songInfo',
          component: songInfo
        },
        {
          path: '/musicPlay',
          name: 'musicPlay',
          component: musicPlay
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [{
        path: '/login',
        name: '/login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      }
      ]
    }
  ]
})
