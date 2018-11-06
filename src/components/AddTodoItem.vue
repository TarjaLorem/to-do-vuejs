<template>
  <div class="add-todo-item">
    <v-layout>
      <v-container>
        <v-form>
          <v-layout class="todo-form">
            <v-layout column class="todo-width">
              <v-textarea v-validate="{required: true}" name="task" rows="3" :value="newItem" @change="getTodo" @keyup.enter="addTodo" label="New task" class="title font-weight-light">
              </v-textarea>
              <span v-show="errors.has('task')" class="red--text message-height">{{ errors.first('task') }}</span>
            </v-layout>
            <v-btn large color="success" @click="addTodo" class="subheading mobile-btn">Add</v-btn>
          </v-layout>
        </v-form>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  name: 'add-todo-item',
  computed: {
    ...mapGetters([
      'newItem'
    ])
  },
  methods: {
    getTodo(e){
      this.$store.dispatch('getTodo', e)
    },
    addTodo(){
      this.$store.dispatch('addTodo').then(() => {
      this.$store.dispatch('clearTodo')
      })
    }
  }
}
</script>

<style scoped>
.todo-form {
  width: 60%;
  align-items: center;
}
.message-height {
  max-height: 0
}
@media (max-width: 425px) {
  .todo-form {
    width: 100%;
    flex-direction: column;
  }
  .todo-width {
    width: 100%;
  }
  .mobile-btn {
    max-width: 50px;
    height: auto;
  }
}
</style>