<template>
  <div class="add-todo-item">
    <div class="add-container">
      <input :value="newItem" @change="getTodo" @keyup.enter="addTodo" placeholder="Add some item" type="text" class="add add-input">
      <button @click="addTodo" class="add">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-todo-item',
  computed: {
    newItem(){
      return this.$store.getters.newItem;
    }
  },
  methods: {
    getTodo(e){
      this.$store.dispatch('getTodo', e.target.value)
    },
    addTodo(){
      this.$store.dispatch('addTodo')
      this.$store.dispatch('clearTodo')
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