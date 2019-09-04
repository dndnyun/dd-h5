/**
 * 主要接口
 */
import axios from 'axios'

export default {
  name: 'content',
  services: {
    // 创建链接分享
    createLink: (_params) => {
      return axios.post('/article/create/link', _params)
    }
  }
}
