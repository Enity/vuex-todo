<template>
  <div class="hello">
  <div>
  <input type="text" v-model="newTodoText"/>
  <button @click="addTodo(newTodoText)">Add</button>
  </div>
  <div v-for="(list) in getTodo" :key="list.id" class="content">
 <p :class="{'completed': list.completed}">{{list.title}}</p>
 <button @click="deleteTodo(list.id)">☓</button>
 <button @click="toggleTodo(list.id)">+</button>
  </div>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data() {
        return {
        id: 0,
        newTodoText: '',
        completed: true
        };
    },
  computed: {
      getTodo () {
        if (this.newTodoText != '') {
        return this.$store.getters.computedTodo
        }
      }
    },
  methods: {
      addTodo (newTodoText) {
        const payload = {'id':this.id++, 'title': newTodoText, 'completed': false}
        if (newTodoText.length)
        return this.$store.dispatch('AddActionTodo', payload)
      },
      deleteTodo (id){
        return this.$store.dispatch('DeleteActionTodo', id)
      },
      toggleTodo(id){
        return this.$store.dispatch('ToggleTodo', id)
      }
    },
 mountend() {
        return this.$store.getters.computedTodo
  }

}
 
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.completed {
  text-decoration: line-through;
}

.content {
  display: flex;
  justify-content: center;
  margin: 20px 0 20px 0;
}
.content p{
  margin-right: 10px;
}

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
</style>
