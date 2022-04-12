<template>
  <div class="demo">
      <h2>{{msg}}</h2>
      <Student></Student>
      <School></School>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
    name:'App',
    components:{School,Student},
    data() {
        return {
            msg:'你好啊'
        }
    }
}
</script>

<style scoped>
    .demo {
        background-color: #ccc;
        padding: 5px;
    }
</style>