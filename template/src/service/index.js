import axios from 'axios'
import qs from 'qs'
import config from './config.js'
import NProgress from 'nprogress'
import store from '../store'
import router from '../router'

var api = axios.create(config)

api.interceptors.request.use(config => {
  NProgress.start()
  return config
}, error => {
  return Promise.reject(error)
})

api.interceptors.response.use(response => {
  NProgress.done()
  return response.data
}, error => {
  NProgress.done()
  if (error.response.status === 401) {
    store.dispatch('clearToken')
    router.push('/login')
  }
  return Promise.reject(error)
})
const getHeader = () => {
  var headers = {}
  if (store.state.global.token) {
    headers['Authorization'] = store.state.global.token
  }
  return headers
}
export default {
  put (url, params) {
    return api({
      method: 'put',
      url,
      data: params,
      headers: getHeader()
    })
  },
  delete (url, params) {
    return api({
      method: 'delete',
      url,
      data: params,
      headers: getHeader()
    })
  },
  post (url, params) {
    return api({
      method: 'post',
      url,
      data: params,
      headers: getHeader()
    })
  },
  postForm (url, params) {
    var headers = getHeader()
    headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
    return api({
      method: 'post',
      url,
      data: qs.stringify(params),
      headers
    })
  },
  get (url, params) {
    return api({
      method: 'get',
      url,
      params,
      headers: getHeader()
    })
  }
}
