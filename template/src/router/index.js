import Vue from 'vue'
import Router from 'vue-router'

import { Loading, Error } from '@/components/Common'

// const lazyLoading = (name, index = false) => (resolve) => require([`views/${name}${index ? '/index' : ''}.vue`], resolve)
const lazyLoading = (name, index = false) => () => ({
  // 需要加载的组件. 应当是一个 Promise
  component: import(`@/views/${name}${index ? '/index' : ''}.vue`),
  // loading 时应当渲染的组件
  loading: Loading,
  // 出错时渲染的组件
  error: Error,
  // 渲染 loading 组件前的等待时间。默认：200ms.
  delay: 200,
  // 最长等待时间。超出此时间则渲染 error 组件。默认：Infinity
  timeout: 3000
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: lazyLoading('Home', true)
    }, {
      path: '/login',
      name: 'Login',
      meta: {
        auth: true
      },
      component: lazyLoading('Login', true)
    }
  ]
})
