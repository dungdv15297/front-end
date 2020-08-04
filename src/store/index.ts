import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: 'abc',
    accountId: '123'
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setAccountId(state, accountId) {
      state.accountId = accountId;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    token: state => state.token,
    accountId: state => state.accountId,
  }
})
