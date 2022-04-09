<template>
  <div class="student">
    <h2 @click="showName">学生名称:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
  </div>
</template>

<script>
// import { hunhe } from '../mixin'
export default {
  name: 'StudenT',
  data() {
    return {
      name: '张三',
      sex: '男',
    }
  },
//   mixins: [hunhe],
}
</script>
    
<style>
.student {
  background-color: #ccc;
}
</style>