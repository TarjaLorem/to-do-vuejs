<template>
<div class="items-list">
  <v-layout>
    <v-container>
    <div class="display-2 font-weight-light">To do what?</div>
      <v-list>
        <template v-for="(item, index) in todos">
          <v-list-tile :key="index">
            <v-list-tile-content>
              <v-text-field :class="{'done': item.done}" v-if="item === editingTask" @keyup.enter="endEditing(item)" v-model="item.title"></v-text-field>
              <v-list-tile-title class="title font-weight-regular blue-grey--text" v-else>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-checkbox type="checkbox" @change="doneTodo({item})"></v-checkbox>
            </v-list-tile-action>
            <v-btn color="error" @click="removeTodo" class="subheading">Remove</v-btn>
            <v-btn @click="editTodo(item)" class="subheading">Edit</v-btn>
            <v-btn @click="endEditing(item)" class="subheading">Done</v-btn>
          </v-list-tile>
          <v-divider v-if="index + 1 < todos.length" :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-container>
  </v-layout>
  </div>
</template>

<script>
export default {
  name: 'items-list',
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    editingTask() {
      return this.$store.state.editingTask;
    },
    state() {
      return this.$store.state;
    }
  },
  methods: {
    removeTodo(item){
      this.$store.dispatch('removeTodo', item)
    },
    doneTodo(item) {
      this.$store.dispatch('doneTodo', item)
    },
    editTodo (item) {
			this.$store.dispatch('editTodo', item)
		},
    endEditing (item) {
			this.$store.state.editingTask = {};
			if (item.title.trim() === ""){
				this.removeTodo(item);
			}
  }
}
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>