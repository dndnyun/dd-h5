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

const env = process.env.NODE_ENV

console.log(env)

if (!appConfig.isWx && env === 'production') {
  window.location.replace(appConfig.siteUrl + '/error.html')
} else if (!appConfig.getToken() && env === 'production') {
  window.location.replace(appConfig.wxAuth)
} else {
  Vue.prototype.$day = day
  Vue.prototype.$dialog = Dialog

  Vue.config.productionTip = false

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
