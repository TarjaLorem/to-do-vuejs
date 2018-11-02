<template>
  <div class="add-todo-item">
    <v-layout>
      <v-container>
        <v-form>
          <v-layout class="todo-form-width">
            <v-layout column>
              <v-text-field v-validate="'required'" name="task" :value="newItem" @change="getTodo" @keyup.enter="addTodo" label="New task" class="title font-weight-light">
              </v-text-field>
              <span v-show="errors.has('task')" class="red--text message-height">{{ errors.first('task') }}</span>
            </v-layout>
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
.todo-form-width {
  width: 60%;
}
.message-height {
  max-height: 0
}
</style>