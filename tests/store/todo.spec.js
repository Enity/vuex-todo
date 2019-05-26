import { changeTodo } from '../../src/store/todo/mutations';
import { computedTodo } from '../../src/store/todo/getters';

test('добавляет в стейт нужный объект после изменения тодо', () => {
    const state = {
        todos: []
    };

    const payload = { 'id':'20', 'title': 'todotext', 'completed': false };
    changeTodo(state, payload);

    expect(state).toBe([{ 'id':'20', 'title': 'todotext', 'completed': false }]);
});

test('геттер computedTodo', () => {
    const state = {
        todos: [
            { 'id':'20', 'title': 'todotext', 'completed': false }
        ]
    };

    const res = computedTodo(state);

    expect(res).toBe([{ 'id':'20', 'title': 'todotext', 'completed': false }]);
})
