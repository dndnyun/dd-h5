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

    loginShare: (_params) => {
      return axios.post('/login/wechat/share/visit', _params)
    },

    // 获取签名
    getSignature: (_params) => {
      return axios.post('/wechat/signature/sdk', _params)
    },

    // 获取 ticket
    getTicket: (_params) => {
      return axios.get('/wechat/jsapi/ticket')
    },

    // 获取 钱包
    getWallet: (_params) => {
      return axios.get('/user/wallet')
    }
  }
}
