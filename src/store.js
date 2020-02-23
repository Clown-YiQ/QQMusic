import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : '登录'
}

const mutations = {
  setUserName (state, val) {
    state.userName = val
    localStorage.setItem('userName', val.userName)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
