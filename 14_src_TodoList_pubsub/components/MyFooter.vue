<template>
  <div class="todo-footer" v-show='todos.length'>
    <label>
      <!-- <input type="checkbox" @click="checkAll" :checked='isAll'/> -->
      <input type="checkbox" v-model='isAll'/>
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" @click = 'clearAll'>清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos'],
  computed: {
    doneTotal(){
        const x =this.todos.reduce((pre,current)=>{
            return pre + (current.done ? 1:0)
        },0)
        return x
    },
    /* isAll() {
        return this.todos.length === this.doneTotal 
    } */
    isAll:{
        get(){
            return this.todos.length === this.doneTotal 
        },
        set(value){
            // this.chooseAllTodo(value)
            this.$emit('chooseAllTodo',value)
        }
    }
  },
  methods:{
      /* checkAll(e) {
          this.chooseAllTodo(e.target.checked)
      }, */
    clearAll() {
        if(confirm('是否确认删除?')) {
            // this.clearAllTodo(e.target.checked)
            this.$emit('clearAllTodo')
        }
    }
  }
}
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>