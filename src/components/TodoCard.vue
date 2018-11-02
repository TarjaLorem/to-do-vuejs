<template>
  <v-container class="todo-card align-self-center">
    <v-layout>
      <v-flex>
        <v-card class="align-self-center">
          <TodoToolbar/>
          <AddTodoItem/>
          <ItemsList/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ItemsList from './ItemsList.vue'
import AddTodoItem from './AddTodoItem.vue'
import TodoToolbar from './TodoToolbar.vue'

export default {
  name: 'todo-card',
  components: {
    TodoToolbar,
    AddTodoItem,
    ItemsList
  }
}
</script>

<style>
  .todo-card {
    width: 60%;
  }
</style>
