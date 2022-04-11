<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <Student></Student>
    <School></School>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
  name: 'App',
  components: {Student, School},
  data() {
      return{
          msg:'hallo啊'
      }
  }
}
</script>

<style>
    .app {
        background-color: #ccc;
    }
</style>