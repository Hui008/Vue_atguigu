//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入ElementUI组件库
import ElementUI from 'element-ui';
// 引入ElementUI的样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);



//关闭Vue的生产提示
Vue.config.productionTip = false


//创建vm
new Vue({
	el:'#root',
	render: h => h(App),
})
