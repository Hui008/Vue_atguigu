export default {
    install(Vue) {
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        //定义全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定（一上来）
            bind(element, binding) {
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element) {
                element.focus()
            },
            //指令所在模板被重新解析
            update(element, binding) {
                element.value = binding.value
            }
        })
        // 定义混入
        Vue.mixin({
            return: {
                x: 100,
                y: 2000
            }
        })

        Vue.prototype.hello = () => {
            alert('你好啊')
        }
    }
}