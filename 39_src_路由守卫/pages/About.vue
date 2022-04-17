<template>
  <h2>我是About内容</h2>
</template>

<script>
export default {
    name:'AbouT',
    // 通过路由规则 进入该组件时被调用
    beforeRouteEnter(to,from,next){
        console.log('App------beforeRouteEnter');
        next()
    },
    // 通过路由规则 离开该组件时被调用
    beforeRouteLeave(to,from,next){
        console.log(to,from);
        next()
    },
}
</script>

<style>

</style>