<template>
  <v-container class="todo-card align-self-center">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 md lg xl>
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

</style>
