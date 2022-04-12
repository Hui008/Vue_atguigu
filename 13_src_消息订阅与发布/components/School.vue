<template>
  <div class="school">
      <h2>学校名字为:{{name}}</h2>
      <h2>学校地址为:{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'SchooL',
    data() {
        return {
            name:'尚硅谷',
            address:'北京'
        }
    },
    mounted() {
        pubsub.subscribe('hello',function(msgName,data){
            console.log('School收到了消息,',data);
        })
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
    .school {
        background-color: skyblue;
        margin: 5px;
    }
</style>