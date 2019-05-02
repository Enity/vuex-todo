<template>
  <div class="hello">
  <div>
  <input type="text" v-model="newTodoText"/>
  <button @click="addTodo(newTodoText)">Add</button>
  </div>
  <div v-for="(list, index) in getTodo" :key="list.index" class="content">
 <p>{{list}}</p>
 <button @click="deleteTodo(index)">☓</button>
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
        newTodoText: ''
        };
    },
  computed: {
      getTodo () {
        return this.$store.getters.computedTodo
      }
    },
  methods: {
      addTodo (newTodoText) {
        return this.$store.dispatch('AddActionTodo', newTodoText);
      },
      deleteTodo (index){
        return this.$store.dispatch('DeleteActionTodo', index)
      }
    },
 mountend() {
        return this.$store.getters.computedTodo
  }

}
 
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
