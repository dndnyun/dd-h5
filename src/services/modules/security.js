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
      return axios.post(api.login, _params)
    },
    // 随机盐
    getRandomSalt: (_params) => {
      return axios.get(`${api.getRandomSalt}/${_params}`)
    }
  }
}
