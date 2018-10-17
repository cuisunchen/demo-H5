import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login/login'
import home from '@/pages/home/home'
import sub1 from '@/pages/sub1/sub1'
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
      path: '/sub1',
      name: 'sub1',
      component: sub1
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
