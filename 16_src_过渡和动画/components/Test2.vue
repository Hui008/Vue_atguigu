<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group name="hello" appear>
            <h2 class="msg" v-show='isShow' :key="1">{{msg}}</h2>
            <h2 class="msg" v-show='!isShow' :key="2">{{msg2}}</h2>
        </transition-group>
    </div>
</template>

<script>
export default {
    name:'TesT2',
    data() {
        return {
            isShow : true,
            msg:'你好啊!',
            msg2:'尚硅谷'
        }
    },

}
</script>

<style>
.msg {
        margin-top: 20px;
        background-color: pink;
    }

.hello-enter,
.hello-leave-to {
    transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
    transition: 1s linear;
}
.hello-enter-to,
.hello-leave {
    transform: translateX(0);
}
/* .hello-leave{
    transform: translateX(0);
}
.hello-leave-to{
    transform: translateX(-100%);
} */
</style>