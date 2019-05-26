export const changeTodo = (state, payload) => {
    state.todos.push(
        {
            id: payload.id,
            title: payload.title,
            completed: payload.completed
        }
    )
};

export const deleteTodo = (state, id) => {
    const index = state.todos.findIndex(todo => todo.id === id);
    state.todos.splice(index, 1);
};

export const toggleTodo = (state, id) => {
    const target = state.todos.find( t =>  t.id === id);
    if (!target) throw new Error('invalid todo id');
    target.completed = !target.completed
};
