import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/login'
import home from '@/pages/home/home'
import searchBoss from '@/pages/searchBoss/searchBoss'
import cpy_store from '@/pages/cpyStore/cpy_store'
import info from '@/pages/infos/info'
import news from '@/pages/news/new'
import mine from '@/pages/mine/mine'


Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/searchBoss',
      name: 'searchBoss',
      component: searchBoss
    },
    {
      path: '/cpy_store',
      name: 'cpy_store',
      component: cpy_store
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})

export default router
