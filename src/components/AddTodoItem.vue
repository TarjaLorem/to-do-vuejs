<template>
  <div class="add-todo-item">
    <input :value="newItem" placeholder="Add some item" type="text" class="add add-input">
    <button @click="addItem" class="add">Add Todo</button>
    <div class="list-group-item" :key="todo.title" v-for="todo in todos">{{todo.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'add-todo-item',
  computed: {
     newItem(){
      return this.$store.getters.newItem;
    },
    todos() {
      return this.$store.state.todos;
    }
  },
  methods: {
    // addItem() {
    //   this.$store.state.todos.push({
    //     id: this.idItem,
    //     title: this.newItem,
    //     completed: false
    //   });
    //   this.newItem = '';
    //   this.idItem++;
    // },
    addItem(){
      this.$store.dispatch('addTodo')
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
.add-todo-item {
  display: flex;
  justify-content: center;
}
.add {
  width: 300px;
  padding: 15px;
  font-size: 16px;
}
.add-input {
  margin-right: 20px;
}
</style>