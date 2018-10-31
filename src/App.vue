<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="vue-logo">
    <Form/>
    <ItemsList/>
    <AddTodoItem/>

  </div>
</template>

<script>
import Form from './components/Form.vue'
import ItemsList from './components/ItemsList.vue'
import AddTodoItem from './components/AddTodoItem.vue'

export default {
  name: 'app',
  components: {
    Form,
    ItemsList,
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
.vue-logo {
  width: 100px;
  height: auto;
}
</style>
