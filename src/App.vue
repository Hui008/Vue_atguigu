<template>
    <div>
        <h1>{{msg}}</h1>
        <School :getSchoolName='getSchoolName'></School>
        <Student @atguigu='getStudentName' @demo='m1'></Student>
        <!-- <Student ref="student"></Student> -->
    </div>
</template>

<script>
    // 引入组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'

    export default {
        name:'App',
        data(){
            return {
                msg:'helloW'
            }
        },
        components:{School,Student},
        methods:{
            getSchoolName(SchoolName){
                console.log('App收到学校名:'+SchoolName)
            },
            getStudentName(StudentName) {
                console.log('App收到学生名字:'+StudentName);
            },
            m1() {
                console.log('demo被触发了');
            },
        },
        mounted(){
            this.$refs.student.$on('atguigu',this.getStudentName)
        }
    }
</script>

<style scoped>
    div {
        background-color: #ccc;
    }
</style>