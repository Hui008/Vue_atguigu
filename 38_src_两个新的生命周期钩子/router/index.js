// 用户创建整个应用的路由器
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

import VueRouter from 'vue-router'

// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            name:"guanyu",
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,

                            // props第一种写法 
                            // props:{a:1, b:'hello'}

                            // props第二种写法  只能用于组件接收params
                            // props:true

                            // props第三种写法 
                            props($route) {
                                return {id:$route.query.id,title:$route.query.title}
                            }
                        },
                    ]
                },
                {
                    path:'news',
                    component:News
                }
            ]
        }
    ]
})