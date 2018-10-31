<template>
  <div class="items-list">
    <div class="todo-items">
      <div v-for="item in todos" :key="item.id" class="output-text">Item: {{ item.title }}
        <input type="checkbox" @change="doneTodo({ item })">
        <button @click="removeTodo" class="add">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'items-list',
  computed: {
    todos() {
      return this.$store.getters.todos;
    }
  },
  methods: {
    removeTodo(item){
      this.$store.dispatch('removeTodo', item)
    },
    doneTodo(item) {
      this.$store.dispatch('doneTodo', item)
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.items-list {
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
}
.output-text {
  display: flex;
}
.done {
  text-decoration: line-through;
}
</style>