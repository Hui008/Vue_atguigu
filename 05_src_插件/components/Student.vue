<template>
  <div class="student">
    <h2>学生名称:{{name | mySlice}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <button @click="test">点我测试一个Hello方法</button>
    <hr>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>

export default {
  name: 'StudenT',
  data() {
    return {
      name: '张三666',
      sex: '男',
    }
  },
  methods:{
      test(){
          this.hello()
      }
  }

}
</script>
    
<style>
.student {
  background-color: #ccc;
}
</style>