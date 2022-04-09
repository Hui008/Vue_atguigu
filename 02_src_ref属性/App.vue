<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <School ref="sch"></School>
      <button @click="showDom" ref="btn">点我输出上方的Dom元素</button>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
    name:'App',
    components:{School},
    data() {
        return {
            msg:'欢迎学习Vue'
        }
    },
    
    methods: {
        showDom() {
            console.log(this.$refs.title)
            console.log(this.$refs.sch)
            console.log(this.$refs.btn)
        }
    },
}
</script>

<style>

</style>