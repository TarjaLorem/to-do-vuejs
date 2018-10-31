import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
    newItem: ''
  },
  getters : {
    newItem: state => state.newItem,
    todos: state => state.todos.filter((todo) => {return !todo.completed}),
  },
  mutations: {
    ADD_TODO(state){
      state.todos.push({
        title: state.newItem,
        completed: false
      })
    }
  },
  actions : {
    addTodo({commit}){
      commit('ADD_TODO')
 }
  }
})