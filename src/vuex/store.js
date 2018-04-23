import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import upload from './modules/upload'
import * as types from './mutation-types'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// 最外层的vuex只存储最常用和基本的数据, 如isLoading,
// 其余都放在modules下管理
const state = {
  isLoading: false
}

const getters = {
  isLoading: state => state.isLoading
}

const mutations = {
  [types.TOGGLE_LOADING] (state, to) {
    if (typeof to === 'boolean') {
      state.isLoading = to
    } else {
      state.isLoading = !state.isLoading
    }
  }
}

const store = new Vuex.Store({
  modules: {
    user,
    upload
  },
  state,
  getters,
  mutations,
  plugins: debug ? [createLogger()] : [],
  strict: debug
})

export default store
