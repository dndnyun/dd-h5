/**
 * 鉴权
 */
import axios from 'axios'

export default {
  name: 'security',
  services: {
    // 登录
    login: (_params) => {
      return axios.post('/login/wechat/public', _params)
    },

    // 获取签名
    getSignature: (_params) => {
      return axios.post('/wechat/signature/sdk', _params)
    },

    // 获取 ticket
    getTicket: (_params) => {
      return axios.get('/wechat/jsapi/ticket', {
        // params: _params
      })
    }
  }
}
