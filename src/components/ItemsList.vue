<template>
<div class="items-list">
  <v-layout>
    <v-container>
    <div class="headline font-weight-light">To do what?</div>
      <v-list class="mobile-list">
        <template v-for="(item, index) in todos">
          <v-list-tile :key="index" class="mobile-list">
            <v-list-tile-content>
              <v-text-field v-if="item === editingTask" @keyup.enter="endEditing(item)" v-model="item.title"></v-text-field>
              <v-list-tile-title :class="{'done': item.done}" class="title font-weight-regular blue-grey--text" v-else>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
            <v-layout class="mobile-actions">
              <v-list-tile-action>
                <v-checkbox type="checkbox" @change="doneTodo({item})"></v-checkbox>
              </v-list-tile-action>
              <v-btn color="error" @click="removeTodo" class="subheading mobile-btn">Remove</v-btn>
              <v-btn @click="editTodo(item)" class="subheading mobile-btn">Edit</v-btn>
              <v-btn @click="endEditing(item)" class="subheading mobile-btn">Done</v-btn>
            </v-layout>
          </v-list-tile>
          <v-divider v-if="index + 1 < todos.length" :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-container>
  </v-layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'


export default {
  name: 'items-list',
  computed: {
    ...mapGetters([
      'todos',
      'editingTask'
    ])
  },
  methods: {
    ...mapActions([
      'removeTodo',
      'doneTodo',
      'editTodo'
    ]),
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
.mobile-actions {
  align-items: center;
  justify-content: flex-end;
}
@media (max-width: 425px) {
  .mobile-btn {
    max-width: 50px;
    min-width: 0;
    height: auto;
  }
  .mobile-actions {
    align-items: center;
  }
}
</style>