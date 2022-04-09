<template>
  <div>
        <student name="张三" sex='男' :age="20"></student>
        <hr>
        <student name="小红" sex="女" :age="18"></student>
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{Student:Student},
}
</script>

<style>

</style>