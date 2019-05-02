import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';

export default {
  plugins: [
    createPersistedState()
  ],
  state: {
    todos: []
  },
  mutations: {
    changeTodo (state, payload) {
      state.todos.push(
        payload
      )
    },
    deleteTodo (state,index) {
      Vue.delete(state.todos, index)
    },
  },
  actions: {
    AddActionTodo ({commit}, payload) {
        commit ('changeTodo', payload)
    },
    DeleteActionTodo ({commit}, index) {
      commit ('deleteTodo', index)
    }
  },
  getters: {
    computedTodo (state) {
      return state.todos 
    }
  }
}
