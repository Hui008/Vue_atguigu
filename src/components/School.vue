<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
    <button @click='sendSchoolName'>点击将学校名字发送给App</button>
  </div>
</template>

<script>
// 组件交互的代码
export default {
  name: 'SchooL',
  props:['getSchoolName'],
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
    }
  },
  methods:{
      sendSchoolName() {
          this.getSchoolName(this.name)
      }
  }
}
</script>

<style scoped>
    .demo{
        background-color: skyblue;
        margin: 10px;
    }
</style>