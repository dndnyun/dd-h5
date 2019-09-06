'use strict'
import axios from 'axios'
import { url } from './config'
import Vue from 'vue'

window.__axiosCancelTokenArr = []
/**
 * 请求拦截器
 * 处理发送请求之前 header 插入 token 鉴权
 */
axios.interceptors.request.use(requestConfig => {
  let configs = requestConfig
  let userInfo = appConfig.getToken()
  if (userInfo) {
    configs.headers['x_safe_token'] = userInfo.token
    console.log(userInfo.token)
  }
  configs.cancelToken = new axios.CancelToken(cancel => {
    window.__axiosCancelTokenArr.push({ cancel })
  })
  return configs
}, err => {
  return Promise.reject(err)
})

/**
 * 响应拦截器
 * 响应回调错误处理、数据处理等逻辑
 */
axios.interceptors.response.use(response => {
  let result = response.data
  if (result.code === 0) {
    return Promise.resolve(result.data)
  } else {
    return Promise.reject(result.msg) // 返回接口错误信息
  }
}, error => {
  console.log(error)
  return Promise.reject(error.response ? error.response.data : error.response) // 返回接口错误信息

  // if (error.response && error.response.status === 401) {
  //   localStorage.removeItem('CR_USER')
  //   _vue.$router.push({
  //     path: '/'
  //   })
  // } else {
  //   return Promise.reject(error.response ? error.response.data : error.response) // 返回接口返回的错误信息
  // }
})

/**
 * 切换配置
 */
const defaults = {
  baseURL: url,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
}

Object.assign(axios.defaults, defaults)

const files = require.context('./modules', true, /\.js$/)

let services = {}

files.keys().forEach(file => {
  const fileConfig = files(file)
  const _file = fileConfig.default || fileConfig
  services[_file.name] = { ..._file.services }
})

Vue.prototype.$http = services
