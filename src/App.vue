<template>
<div id="app">
  <v-app>
    <TodoCard/>
  </v-app>
  </div>
</template>

<script>
import TodoCard from './components/TodoCard.vue'

export default {
  name: 'app',
  components: {
    TodoCard
  }
}
</script>

<style>
</style>
