<template>
  <div id="app">
    <ItemsList/>
    <AddTodoItem/>
  </div>
</template>

<script>
import ItemsList from './components/ItemsList.vue'
import AddTodoItem from './components/AddTodoItem.vue'

export default {
  name: 'app',
  components: {
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
  display: flex;
  flex-direction: column;
}
</style>
