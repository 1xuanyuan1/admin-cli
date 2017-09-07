// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

import { Card, Loading } from '@/components/Common'
Vue.component('Card', Card)
Vue.component('Loading', Loading)

import 'nprogress/nprogress.css'

sync(store, router)

// 表单验证
import VeeValidate, { Validator } from 'vee-validate'
import messages from '@/assets/js/zh_CN.js'
Validator.updateDictionary({
  zh_CN: {
    messages
  }
})
const config = {
  errorBagName: 'errors', // change if property conflicts.
  delay: 0,
  locale: 'zh_CN',
  messages: null,
  strict: true
}
Vue.use(VeeValidate, config)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
