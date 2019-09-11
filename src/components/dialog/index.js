/**
 * author     dark
 * date       18/12/18
 */
'use strict'
import Vue from 'vue'
import DialogVue from './dialog'

let DialogConstructor = Vue.extend(DialogVue)

let instance

let Dialog = (options) => {
  options = options || {}
  instance = new DialogConstructor({
    data: options
  })

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  return instance.vm
}

export default Dialog
