/**
 * 鉴权
 */
import axios from 'axios'

export default {
  name: 'material',
  services: {
    uploadImage: (_params) => {
      return axios.post('/upload/img', _params)
    },
    createPost: (_params) => {
      let params = []
      _params.map(item => {
        params.push(
          {
            ...item,
            style: JSON.stringify(item.style)
          }
        )
      })
      return axios.post('/article/create/original', params)
    }
  }
}
