import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import todo from '../store/todo'
import { cloneDeep } from 'lodash'

test('добавляет в стейт нужный объект после изменения тодо', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(todo))
  expect(store.state).toBe([])
  const payload = {'id':'20', 'title': 'todotext', 'completed': false}
  store.commit('changeTodo', payload)
  expect(store.state).toBe([{'id':'20', 'title': 'todotext', 'completed': false}])
})

test('обновляет геттер computedTodo, когда происходит добавление в тодо', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(todo))
  expect(store.getters.computedTodo).toBe([])
  const payload = {'id':'20', 'title': 'todotext', 'completed': false}
  store.commit('changeTodo', payload)
  expect(store.getters.computedTodo).toBe([{'id':'20', 'title': 'todotext', 'completed': false}])
})