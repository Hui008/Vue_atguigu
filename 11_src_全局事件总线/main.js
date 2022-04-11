import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// window.x ={a:1,b:200}

new Vue({
    el: '#root',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this // 安装全局事件总线
    }
})