<template>
  <div class="student">
      <h2>学生姓名:{{name}}</h2>
      <h2>学生年龄:{{age}}</h2>
      <button @click='sendStudentName'>把学生名字提交给学校</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'StudenT',
    data() {
        return {
            name:'张三',
            age:18
        }
    },
    methods:{
        sendStudentName() {
            pubsub.publish('hello',this.name)
        }
    },
    
}
</script>

<style scoped>
    .student {
        background-color: pink;
        margin: 5px;
    }
</style>