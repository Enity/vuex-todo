import Vue from 'vue'
import Vuex from 'vuex'
import todo from './todo'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['todo']
    })
  ],
  modules: {
    todo
  }
})
