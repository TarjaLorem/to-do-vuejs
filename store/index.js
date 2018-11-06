import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    editingTask: {},
    todos: [],
    newItem: '',
    idItem: 0
  },
  getters : {
    newItem: state => state.newItem,
    todos: state => state.todos,
    editingTask: state => state.editingTask
  },
  mutations: {
    GET_TODO(state, item){
      state.newItem = item
    },
    ADD_TODO(state){
      const regex = /[\wа-я]+/;
      if(state.newItem != "" && regex.test(state.newItem)){
        state.todos.push({
          id: state.idItem,
          title: state.newItem.trim(),
          done: false
        })
      state.idItem++;
      }
    },
    EDIT_TODO(state, item){
      state.editingTask = item
    },
    CLEAR_TODO(state){
      state.newItem = ''
    },
    REMOVE_TODO(state, item) {
      const todos = state.todos
      todos.splice(todos.indexOf(item), 1)
    },
    DONE_TODO(state, { item }) {
      item.done = !item.done
    }
  },
  actions : {
    getTodo({commit}, item){
      commit('GET_TODO', item)
    },
    addTodo({commit}){
      commit('ADD_TODO')
    },
    clearTodo({commit}){
      commit('GET_TODO', '')
    },
    editTodo({commit}, item){
      commit('EDIT_TODO', item)
    },
    removeTodo({commit}, item){
      commit('REMOVE_TODO', item)
    },
    doneTodo({commit}, item){
      commit('DONE_TODO', item)
    }
  }
})