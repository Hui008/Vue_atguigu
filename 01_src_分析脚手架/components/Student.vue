<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2>学生姓名</h2>
    <h2>学生年龄</h2>
    <button @click="showName">点我提示学生姓名</button>
  </div>
</template>

<script>
// 组件交互的代码
export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      age: 20,
    }
  },
  methods: {
    showName() {
      alert(this.name)
    },
  },
}
</script>

<style scoped>
/*组件的样式 */
.demo {
  background-color: orange;
}
</style>