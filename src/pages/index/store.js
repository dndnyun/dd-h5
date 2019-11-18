import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SET_USER = 'SET_USER'

export default new Vuex.Store({
  state: {
    user: {},
    content: {}
  },
  mutations: {
    [SET_USER] (state, params) {
      state.isCollapse = params
    }
  },
  actions: {
    setUser ({ commit, state }, params) {
      commit(SET_USER, params)
    }
  }
})
