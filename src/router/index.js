import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@views/Login'
import Home from '@views/Home'
import Layout from '@layout/'
Vue.use(VueRouter)

console.log(Login, 'Login')
const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home
      }
    ]
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes // (缩写) 相当于 routes: routes
})

export default router
