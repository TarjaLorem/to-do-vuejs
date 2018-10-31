import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: []
  },
  getters : {
    newItem: state => state.newItem,
    todos: state => state.todos.filter((todo) => {return !todo.completed}),
  },
  mutations: {
    ADD_TODO(state, text){
      state.todos.push({
        title: text,
        completed: false
      })
    }
  },
  actions : {
//     addTodo({commit}){
//       commit('ADD_TODO')
//  }
  }
})