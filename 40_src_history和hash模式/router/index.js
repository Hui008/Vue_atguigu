// 用户创建整个应用的路由器
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

import VueRouter from 'vue-router'

// 创建并暴露一个路由器
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            name:"guanyu",
            path:'/about',
            component:About,
            meta:{isAuth:false,title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            children:[
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            meta:{isAuth:false,title:'详情'},

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
                    component:News,
                    meta:{title:'新闻'},
                    /* beforeEnter:(to,from,next)=>{ // 独享路由守卫
                        console.log('独享路由守卫',to,from);
                        if(to.meta.isAuth){ // 判断是否是否需要鉴权
                            if(localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else{
                                alert('无权限')
                            }
                        } else{
                            next()
                        }
                    } */
                }
            ]
        }
    ]
})

/* // 全局前置路由守卫
router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫',to,from);
    
    if(to.meta.isAuth){ // 判断是否是否需要鉴权
        if(localStorage.getItem('school') === 'atguigu') {
            next()
        } else{
            alert('无权限')
        }
    } else{
        next()
    }
}) 

// 全局前置路由守卫
router.afterEach((to,from)=>{
    document.title = to.meta.title || '硅谷'
    console.log('后置路由守卫',to,from);
}) */
export default router