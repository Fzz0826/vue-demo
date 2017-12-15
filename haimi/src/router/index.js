import Vue from 'vue'
import Router from 'vue-router'
import header from '@/views/header'
import search from '@/views/search'
import dialog from '@/views/dialog'
import Classified from '@/views/Classified'
import Shopcar from '@/views/shopping'
import Myuser from '@/views/my'
import Login from '@/views/login'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/header'
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/search/:searchVal',
      name: 'search',
      component: search
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: dialog
    },
    {
      path: '/Classified',
      name: 'Classified',
      component: Classified
    },
    {
      path: '/shopping',
      name: 'Shopcar',
      component: Shopcar,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/myuser',
      name: 'Myuser',
      component: Myuser,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      query: {
        callback: ''
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.isAuth) {
    if (window.localStorage.getItem('user')) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          callback: to.path
        }
      })
    }
  } else {
    next()
  }
})
export default router
