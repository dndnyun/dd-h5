/**
 * 主要接口
 */
import axios from 'axios'

export default {
  name: 'content',
  services: {

    // 创建链接分享
    createLink (_params) {
      return axios.post('/article/create/link', _params)
    },

    // 获取文章列表
    getPostList (_params) {
      return axios.get('/article/list', {
        params: _params
      })
    },

    // 生成分享链接
    generateLink (_params) {
      return axios.get('/article/share/generate', {
        params: _params
      })
    }
  }
}
