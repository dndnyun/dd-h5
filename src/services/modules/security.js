/**
 * 鉴权
 */
import axios from 'axios'
import * as api from '../api'

export default {
  name: 'security',
  services: {
    // 登录
    login: (_params) => {
      return axios.get(api.login, {
        baseURL: api.securityUrl,
        params: _params
      })
    },
    // 随机盐
    getRandomSalt: (_params) => {
      return axios.get(`${api.getRandomSalt}/${_params}`, {
        baseURL: api.securityUrl
      })
    },
    // 登出
    logout: () => {
      return axios.get(api.logout, {
        baseURL: api.securityUrl
      })
    },
    // 资源树
    getSecurityTree: () => {
      return axios.get(api.securityTree, {
        baseURL: api.securityUrl
      })
    }
  }
}
