<template>
  <div class="todo-card">
    <v-layout>
      <v-flex>
        <v-card>
          <TodoToolbar/>
          <AddTodoItem/>
          <ItemsList/>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
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
    display: flex;
    align-self: center;
    width: 80%;
  }
</style>
