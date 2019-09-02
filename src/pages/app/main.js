import Vue from 'vue'
import day from 'dayjs'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/components/common'
import '@/filters'
import '@/directives'
import '@/services'

Vue.prototype.$day = day

Vue.config.productionTip = false

let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vue
