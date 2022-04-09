<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2>学生姓名:{{name}}</h2>
    <h2>学生年龄:{{age}}</h2>
  </div>
</template>

<script>
// 组件交互的代码
export default {
  name: 'StudenT',
  data() {
    return {
      name: '张三',
      age: 20,
    }
  },
}
</script>

<style scoped>
.demo{
    background-color: orange;
}
</style>