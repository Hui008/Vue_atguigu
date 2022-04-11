<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2>学生姓名:{{name}}</h2>
    <h2>学生年龄:{{age}}</h2>
    <h2>{{number}}</h2>
    <button @click='sendStudentName'>点击将学生名字发送给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="add">点我num++</button>
    <button @click='death'>点我销毁所有student组件实例</button>
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
      number:0
    }
  },
  methods:{
      sendStudentName() {
          this.$emit('atguigu',this.name)
          this.$emit('demo')
      },
      add(){
          console.log('add被调用了');
          this.number++
      },
      unbind() {
        this.$off('atguigu') //解绑一个自定义事件
        // this.$off('')
      },
      death() {
          this.$destroy()
      }
  }
}
</script>

<style scoped>
.demo{
    background-color: orange;
    margin: 10px;
    
}
</style>