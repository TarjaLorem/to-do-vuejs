<template>
  <div class="add-todo-item">
    <div class="add-container">
      <input :value="newItem" @change="getTodo" @keyup.enter="addTodo" placeholder="Add some item" type="text" class="add add-input">
      <button @click="addTodo" class="add">Add</button>
    </div>
    <!--<div class="todo-items">
      <div v-for="item in todos" :key="item.id" class="output-text">Item: {{ item.title }}
        <button @click="removeTodo" class="add">Remove</button>
        <button @click="doneTodo" class="add">Done</button>
      </div>
    </div>!-->
  </div>
</template>

<script>
export default {
  name: 'add-todo-item',
  computed: {
    newItem(){
      return this.$store.getters.newItem;
    }
    // todos() {
    //   return this.$store.getters.todos;
    // }
  },
  methods: {
    getTodo(e){
      this.$store.dispatch('getTodo', e.target.value)
    },
    addTodo(){
      this.$store.dispatch('addTodo')
      this.$store.dispatch('clearTodo')
    },
    clearTodo(){
      this.$store.dispatch('clearTodo')
    }
    // removeTodo(item){
    //   this.$store.dispatch('removeTodo', item)
    // },
    // doneTodo(item) {
    //   this.$store.dispatch('doneTodo', item)
    // }
    // className(){
    //   let classes = ['output-text'];
    //   if (this.todos.done) {
    //     classes.push('completed');
    //   }
    //   return classes.join(' ');
    // }
    // addItem(){
    //   if (this.newTodoText != "") {
    //     this.$store.commit('ADD_TODO', this.newTodoText);
    //     // this.$store.dispatch('addTodo', this.newTodoText)
    //     this.newTodoText = "";
    //   }
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
  flex-direction: column;
  align-items: center;
}
.add-container {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
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