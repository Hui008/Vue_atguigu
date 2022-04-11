<template>
  <div class="school">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'SchooL',
    data() {
        return {
            name:'尚硅谷',
            address:'北京'
        }
    },
    mounted() {
        // console.log('school',window.x)
        this.$bus.$on('getStudentName',(data)=>{
            console.log('我是Schoo组件,我接受到了',data);
        })
    },
    beforeDestroy() {
        this.$bus.$off('getStudentName')
    }
    
}
</script>

<style scoped>
    .school{
        margin: 10px;
        background-color: skyblue;
    }
</style>