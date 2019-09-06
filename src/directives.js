import Vue from 'vue'

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

Vue.directive('clearJack', {
  bind: function (el) {
    el.onblur = () => {
      window.scroll(0, 0)
    }
  },
  unbind: function (el) {
    el.onblur = null
  }
})
