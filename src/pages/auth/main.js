import Vue from 'vue'
import App from './App.vue'
import '@/services'

Vue.config.productionTip = false

let vue = new Vue({
  render: h => h(App)
}).$mount('#app')

export default vue
