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
    },

    // 通过 id 获取文章详情
    getArticleById (_params) {
      return axios.get('/article/get', {
        params: _params
      })
    },

    // 通过 id 阅读文章，用于观看时长
    readArticleById (_params) {
      return axios.post('/article/read', _params)
    }
  }
}
