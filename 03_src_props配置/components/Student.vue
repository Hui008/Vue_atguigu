<template>
  <div class="student">
    <h1 v-text="msg"></h1>
    <h2>学生名称:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄:{{age+1}}</h2>
  </div>
</template>

<script>
export default {
  name: 'StudenT',
  data() {
    return {
      msg: '尚硅谷牛批',
    }
  },

  // 接受数据时限制类型
  /* props: {
      name:String,
      age:Number,
      sex:String
  }, */

  // 接受数据时，限制类型+默认值指定+必要性限制
  props:{
      name:{
          type:String,
          required:true // name是必要的
      },
      age:{
          type:Number,
          default:99 // 默认值
      },
      sex:{
          type:String,
          required:true
      }
  }
}
</script>
    
<style>
.student {
  background-color: #ccc;
}
</style>