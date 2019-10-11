import Vue from 'vue'
import App from './App.vue'
import '@/services'
import { getQueryParameters } from '@/assets/helper.js'

if (!appConfig.isWx) {
  window.location.replace(appConfig.siteUrl + '/error.html')
} else if (!appConfig.getToken()) {
  let queryString = getQueryParameters()
  if (queryString.channel === 'share') {
    window.location.replace(appConfig.getWxAuth(queryString.articleId))
  } else {
    window.location.replace(appConfig.wxAuth)
  }
} else {
  Vue.config.productionTip = false

  new Vue({
    render: h => h(App)
  }).$mount('#app')
}
