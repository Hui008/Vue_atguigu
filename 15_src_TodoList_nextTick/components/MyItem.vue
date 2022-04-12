<template>
    <li>
        <label>
        <input type="checkbox" :checked="todo.done" @click="check(todo.id)"/>
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input  type="text" 
                v-show="todo.isEdit" 
                :value="todo.title"
                @blur="handleBlur(todo,$event)"
                ref="inputTitle">
        <!-- <span>{{todo.title}}</span> -->
        </label>
        
        <button class="btn btn-danger" @click='deleteItem(todo.id)'>删除</button>
        <button class="btn btn-edit" @click='editItem(todo)'>编辑</button>

    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'MyItem',
  props: ['todo'],
  methods:{
      check(id) {
        //   this.checkTodo(id)
        // this.$bus.$emit('checkTodo',id)
        pubsub.publish('checkTodo',id)
      },
      deleteItem(id) {
          if(confirm('确定删除吗?')){
            //   this.deleteTodo(id)
            // this.$bus.$emit('deleteTodo',id)
            pubsub.publish('deleteTodo',id)
          }
      },
      editItem(todo) {
          if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
			todo.isEdit = true
		}
        else{
            this.$set(todo,'isEdit',true)
		}
        this.$nextTick(function() {
            this.$refs.inputTitle.focus()
        })
      },
      handleBlur(todo,e) {
          todo.isEdit = false
        //   pubsub.publish('changeTodo',todo.id,e.target.value)
        if(!e.target.value.trim()) return alert('请输入内容')
            this.$bus.$emit('changeTodo',todo.id,e.target.value)
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

.btn-edit {
    color: #fff;
  background-color: #49da7e;
  border: 1px solid #2fbd5c;
  margin-right: 10px;
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

input {
    margin-top: 10px;
}
</style>