<template>
    <li>
        <label>
        <input type="checkbox" :checked="todo.done" @click="check(todo.id)"/>
        <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click='deleteItem(todo.id)'>删除</button>
    </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['todo','checkTodo','deleteTodo'],
  methods:{
      check(id) {
          this.checkTodo(id)
      },
      deleteItem(id) {
          if(confirm('确定删除吗?')){
              this.deleteTodo(id)
          }
      }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

li:hover {
    background-color: #ccc;
}
li:hover button {
    display: block;
}
</style>