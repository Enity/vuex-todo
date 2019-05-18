export default {
  state: {
    todos: [
      {
        id: 1,
        title: '',
        completed: false
      }
    ]
  },
  mutations: {
    changeTodo (state, payload) {
      console.log(state.todos)
      state.todos.push(
      { 
        id: payload.id,
        title: payload.title,
        completed: payload.completed
      }
      )
    },
    deleteTodo (state, id) {
      const index = state.todos.findIndex(todo => todo.id === id);
      state.todos.splice(index, 1);
    },
    toggleTodo (state, id) {
      const target = state.todos.find( t =>  t.id === id)
      if (!target) throw new Error('invalid todo id')
      target.completed = !target.completed
    }
  },
  actions: {
    AddActionTodo ({commit}, payload) {
        commit ('changeTodo', payload)
    },
    DeleteActionTodo ({commit}, id) {
      commit ('deleteTodo', id)
    },
    ToggleTodo({commit}, id) {
      commit ('toggleTodo', id)
    }

  },
  getters: {
    computedTodo (state) {
      return state.todos 
    }
  }
}
