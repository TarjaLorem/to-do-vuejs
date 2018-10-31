<template>
  <div class="add-todo-item">
    <input v-model="newTodoText" placeholder="Add some item" type="text" class="add add-input">
    <button v-on:click="addItem" class="add">Add Todo</button>
  </div>
</template>

<script>
export default {
  name: 'add-todo-item',
  data () {
    return {
      newTodoText: ""
    }
  },
  computed: {
    //  newItem(){
    //   return this.$store.getters.newItem;
    // },
    // todos() {
    //   return this.$store.getters.todos;
    // }
  },
  methods: {
    addItem(){
      if (this.newTodoText != "") {
        this.$store.commit('ADD_TODO', this.newTodoText);
        this.newTodoText = "";
      }
      // this.$store.dispatch('addTodo')
      // this.addNewTitle(this.newItem);
      //   this.newItem = '';
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