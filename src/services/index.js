/**
 * author     dark
 * date       17/10/17
 */
'use strict'
import axios from 'axios'
import { url } from './api'
import Vue from 'vue'
import _vue from '../main'

window.__axiosCancelTokenArr = []
/**
 * 请求拦截器
 * 处理发送请求之前 header 插入 token 鉴权
 */
axios.interceptors.request.use(requestConfig => {
  let configs = requestConfig
  const localUser = localStorage.getItem('CR_USER')
  let CR_USER = ''
  if (localUser !== null && localUser !== undefined) {
    CR_USER = JSON.parse(localUser)
  }
  if (CR_USER) {
    configs.headers['token'] = CR_USER.token
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
  if (result.code === 200) {
    return Promise.resolve(result.data)
  } else if (result.code === 401 || result.code === 403) {
    localStorage.removeItem('CR_USER')
    _vue.$router.push({
      path: '/'
    })
    window.sessionStorage.removeItem('_un')
    window.sessionStorage.removeItem('_uns')
    if (result.code === 403) {
      _vue.$message({
        type: 'error',
        message: '账号或密码错误!'
      })
    } else {
      _vue.$message({
        type: 'error',
        message: '请重新登录!'
      })
    }
  }
}, error => {
  console.log(error)
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
