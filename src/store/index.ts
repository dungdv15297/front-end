import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('vuex.state.token') ? localStorage.getItem('vuex.state.token') : '',
    accountId: localStorage.getItem('vuex.state.accountId') ? localStorage.getItem('vuex.state.accountId') : '',
    locale: localStorage.getItem('vuex.state.locale') ? localStorage.getItem('vuex.state.locale') : 'vn'
  },
  //use: this.$store.commit(mutation, data)
  //if you want to save a object to localStorage, you must stringify this object to json by JSON.stringify(object)
  //to get that object from localStorage, use Json.parse(localStorage.getItem('name')) 
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('vuex.state.token', token);
    },
    setAccountId(state, accountId) {
      state.accountId = accountId;
      localStorage.setItem('vuex.state.accountId', accountId);
    },
    changeLocale(state, locale) {
      state.locale = locale;
      localStorage.setItem('vuex.state.locale', locale);
    }
  },
  //use: this.$store.dispatch(action, data)
  actions: {
    setToken: ({ commit }, data) => commit('setToken', data),
    setAccountId: ({ commit }, data) => commit('setAccountId', data),
    changeLocale: ({ commit }, data) => commit('changeLocale', data)

  },
  modules: {
  },
  //use: this.$store.getters['name']
  getters: {
    token: state => state.token,
    accountId: state => state.accountId,
    locale: state => state.locale
  }
})
