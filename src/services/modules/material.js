/**
 * 鉴权
 */
import axios from 'axios'

export default {
  name: 'material',
  services: {
    uploadImage: (_params) => {
      return axios.post('/upload/img', _params)
    }
  }
}
