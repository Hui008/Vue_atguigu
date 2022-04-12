<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group appear
                      name="animate__animated animate__bounce"
                      enter-active-class="animate__swing"
                      leave-active-class="animate__backOutUp">
      <h2 class="msg"
          v-show='isShow'
          :key="1">{{msg}}</h2>
      <h2 class="msg"
          v-show='!isShow'
          :key="2">{{msg2}}</h2>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'TesT3',
  data() {
    return {
      isShow: true,
      msg: '你好啊!',
      msg2: '尚硅谷',
    }
  },
}
</script>

<style>
.msg {
  margin-top: 20px;
  background-color: pink;
}
</style>