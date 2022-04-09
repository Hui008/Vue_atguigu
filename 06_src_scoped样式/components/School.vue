<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
// 组件交互的代码
export default {
  name: 'SchooL',
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
    }
  },
}
</script>

<style scoped>
    .demo{
        background-color: skyblue;
    }
</style>