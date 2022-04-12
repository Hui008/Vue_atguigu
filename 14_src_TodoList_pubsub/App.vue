<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo='addTodo'></MyHeader>
        <MyList :todos="todos" :deleteTodo='deleteTodo'></MyList>
        <MyFooter :todos="todos" @chooseAllTodo='chooseAllTodo' @clearAllTodo='clearAllTodo'></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
      // 添加
      addTodo(todoObj) {
          this.todos.unshift(todoObj)
      },
      checkTodo(_,id) {
          this.todos.forEach((todo)=>{
              if(todo.id === id) 
              todo.done = !todo.done
          })
      },
      deleteTodo(_,id) {
          this.todos = this.todos.filter((todo)=>{
              return todo.id !== id
          })
      },
      chooseAllTodo(isAll){
          this.todos.forEach((todo)=>{
              return todo.done = isAll
          })
      },
      clearAllTodo() {
          this.todos = this.todos.filter((todo)=>{
              return !todo.done  
          })
      }
  },
  mounted() {
    // this.$bus.$on('checkTodo',this.checkTodo),
    // this.$bus.$on('deleteTodo',this.deleteTodo)
    this.pidCheck = pubsub.subscribe('checkTodo',this.checkTodo)
    this.pidDelete = pubsub.subscribe('deleteTodo',(this.deleteTodo))

    },
    beforeDestroy() {
        // this.$bus.$off('checkTodo')
        // this.$bus.$off('deleteTodo')
        pubsub.unsubscribe('pidCheck')
        pubsub.unsubscribe('pidDelete')
    },
  watch:{
      deep:true,
      todos(value) {
          localStorage.setItem('todos',JSON.stringify(value))
      }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>