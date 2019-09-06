import Vue from 'vue'
import App from './App.vue'

if (appConfig.isWx) {
  window.location.replace('http://' + window.location.host + '/index.html')
} else {
  Vue.config.productionTip = false

  new Vue({
    render: h => h(App)
  }).$mount('#app')
}
