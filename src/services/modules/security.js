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
    }
  }
}
