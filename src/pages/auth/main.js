import Vue from 'vue'
import App from './App.vue'
import '@/services'

if (!appConfig.isWx) {
  window.location.replace(appConfig.siteUrl + '/error.html')
} else {
  Vue.config.productionTip = false

  new Vue({
    render: h => h(App)
  }).$mount('#app')
}
