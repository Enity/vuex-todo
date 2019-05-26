export const addTodo = ({ commit }, payload) => {
    commit ('changeTodo', payload)
};

export const deleteTodo = ({ commit }, id) => {
    commit ('deleteTodo', id)
};

export const toggleTodo = ({ commit }, id) => {
    commit ('toggleTodo', id)
};
