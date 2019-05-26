<template>
  <div class="hello">
  <div>
  <input type="text" v-model="newTodoText" @keyup.enter="addTodo(newTodoText)"/>
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
  name: 'todo',
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
     return this.$store.getters.computedTodo
      }
    },
  methods: {
      addTodo (newTodoText) {
        const newId = Date.now() + Math.random();
        const payload = {'id':newId, 'title': newTodoText, 'completed': false};
        if (newTodoText.length)
        this.$store.dispatch('addTodo', payload);
        this.newTodoText = ""
      },
      deleteTodo (id){
        return this.$store.dispatch('deleteTodo', id)
      },
      toggleTodo(id){
        return this.$store.dispatch('toggleTodo', id)
      }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.completed {
  text-decoration: line-through;
  color: rgb(182, 174, 174);
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
