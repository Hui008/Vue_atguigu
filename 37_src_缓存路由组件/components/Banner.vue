<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click="bannerBack">后退</button>
            <button @click="bannerForward">前进</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'BanneR' ,
    methods:{
        bannerBack() {
            this.$router.back()
        },
        bannerForward() {
            this.$router.forward()
        }
    }
}
</script>

<style>

</style>