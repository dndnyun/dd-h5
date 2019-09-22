import Vue from 'vue'
import day from 'dayjs'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/components/common'
import '@/filters'
import '@/directives'
import '@/services'
import Dialog from '@/components/dialog'

// if (!appConfig.isWx) {
//   window.location.replace('http://' + window.location.host + '/error.html')
// } else if (!appConfig.getToken()) {
//   window.location.replace(appConfig.wxAuth)
// } else {
Vue.prototype.$day = day
Vue.prototype.$dialog = Dialog

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// }
