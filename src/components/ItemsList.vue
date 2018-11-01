<template>
<div class="items-list">
  <v-layout>
    <v-container>
    <div class="display-3 font-weight-light">To do what?</div>
      <v-list>
        <template v-for="(item, index) in todos">
          <v-list-tile :key="index">
            <v-list-tile-content>
              <v-list-tile-title :class="{'done': item.done}" class="title font-weight-regular">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-checkbox type="checkbox" @change="doneTodo({item})"></v-checkbox>
            </v-list-tile-action>
            <v-btn color="error" @click="removeTodo" class="subheading">Remove</v-btn>
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
.done {
  text-decoration: line-through;
}
</style>