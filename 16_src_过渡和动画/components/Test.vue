<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h2 class="msg" v-show='isShow'>{{msg}}</h2>
        </transition>
    </div>
</template>

<script>
export default {
    name:'TesT',
    data() {
        return {
            isShow : true,
            msg:'你好啊!'
        }
    },
    methods:{

    }
}
</script>

<style>
    .msg {
        margin-top: 20px;
        background-color: pink;
    }

    .hello-enter-active {
        animation: atguigu 1s linear;
    }

    .hello-leave-active {
        animation: atguigu 1s linear reverse;
    }

    @keyframes atguigu {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);

        }
    }
</style>