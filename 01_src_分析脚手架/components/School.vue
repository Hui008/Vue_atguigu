<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2>学校名称</h2>
    <h2>学校地址</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互的代码
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
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
  background-color: aquamarine;
}
</style>