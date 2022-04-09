<template>
  <div>
        <school></school>
        <student></student>
        <hr>
  </div>
</template>

<script>
import School from '@/components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{School,Student},
}
</script>

<style>

</style>