<template>
  <div class="student">
      <h2>学生名字:{{name}}</h2>
      <h2>学生年龄:{{age}}</h2>
      <!-- <button @click="sendStudentName">点我发送学生姓名</button> -->
      <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
    name:'StudenT',
    data() {
        return {
            name:'张三',
            age:18
        }
    },
    mounted(){
        // console.log('student',window.x)
    },
    methods:{
        sendStudentName() {
            this.$bus.$emit('getStudentName',this.name)
        }
    }
}
</script>

<style scoped>
    .student {
        margin: 10px;
        background-color: pink;
    }
</style>