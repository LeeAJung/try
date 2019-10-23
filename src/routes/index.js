import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../view/login.vue'
// import App from '../src/App.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:"/",
            component:()=>import("@/view/login"),
            // meta属性用于保存简单信息，比如title
            meta: {
                title:"欢迎登录",
                anonymous:true
            }
        },
       {
            path:"/main",
            component:()=>import('@/view/main'),
            children:[
                {
                    path:"",
                    component:()=>import('@/view/home'),
                    meta: {
                        title:"首页",
                        index:"1"
                    }
                },
                {
                    path:"/user",
                    component:()=>import('@/view/user/userlist'),
                    meta: {
                        title:"字典管理",
                        index:"1-1"
                    }
                },
                {
                    path:"/manage",
                    component:()=>import('@/view/manage'),
                    meta: {
                        title:"资产管理",
                        index:"1-2"
                    }
                }
            ]
        }
    ]
})

// 进行登录判断，不能输入main的路由就直接跳入项目中，需要判断后进入登录页面，登录之后才可以进入main的页面
// 所有路由跳转都要走这里
router.beforeEach((to,from,next) => {
    document.title= to.meta.title+'- 智脑'
    // if(!to.meta.anonymous){
    //     // 做登录验证
    //     if(sessionStorage.getItem("username")){
    //         next()
    //     }else{
    //         next('/') 
    //     }
    // }else{
    //      next()
    // }
    next()
   
   
    
})
export default router