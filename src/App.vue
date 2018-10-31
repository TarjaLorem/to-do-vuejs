<template>
  <div id="app">
    <Form/>
    <ToDoItem/>
    <AddTodoItem/>

  </div>
</template>

<script>
import Form from './components/Form.vue'
import ToDoItem from './components/ToDoItem.vue'
import AddTodoItem from './components/AddTodoItem.vue'

export default {
  name: 'app',
  components: {
    Form,
    ToDoItem,
    AddTodoItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
