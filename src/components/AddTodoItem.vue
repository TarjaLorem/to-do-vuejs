<template>
  <div class="add-todo-item">
    <v-layout>
      <v-container>
        <v-form>
          <v-layout row wrap>
            <v-text-field :value="newItem" @change="getTodo" @keyup.enter="addTodo" label="New task" class="title font-weight-light"></v-text-field>
            <v-btn color="success" @click="addTodo" class="subheading">Add</v-btn>
          </v-layout>
        </v-form>
      </v-container>
    </v-layout>
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
      this.$store.dispatch('getTodo', e)
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

}
</style>