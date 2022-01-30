import Vue from 'vue'
import Vuex from 'vuex'
import { headerSearchBar } from './headerSearchBar.js'
import { userInfo } from './userInfo/userInfo.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    headerSearchBar,
    userInfo,
  }
})
