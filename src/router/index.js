import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Submit from '../views/Submit.vue'
import Redirect from '../views/Redirect.vue'
import axios from 'axios'

Vue.use(Router)

const routes = [
  {
    path: '/:dc/:cat/:bat',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true,
      title: '叉车换电表单',
    },
  },
  {
    path: '/submit',
    name: 'Submit',
    component: Submit,
    meta: {
      title: '提示',
    },
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: Redirect,
    meta: {
      title: '加载中...',
    },
  },
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

//登录拦截
router.beforeEach((to, from, next) => {
  to.meta.title && (document.title = to.meta.title)
  if (to.meta.requireAuth) {
    var token = sessionStorage.getItem('token')
    var id = sessionStorage.getItem('id')
    if (token) {
      axios
        .get('/jwt', {
          params: {
            token: token,
            id: id,
          },
        })
        .then(() => {
          next()
        })
        .catch(() => {
          sessionStorage.clear()
          next({ path: '/redirect?to=' + to.fullPath })
        })
      next()
    } else {
      next({ path: '/redirect?to=' + to.fullPath })
    }
  } else {
    next()
  }
})
