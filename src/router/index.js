import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@views/Login'
import Home from '@views/Home'
import Dashboard from '@views/Dashboard'
import Layout from '@layout/'
Vue.use(VueRouter)

console.log(Login, 'Login')
export const routes = [
  { path: '/login', component: Login, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '首页'
    },
    icon: 'el-icon-s-home',
    children: [
      {
        path: '/home',
        component: Home,
        icon: 'el-icon-s-home',
        meta: {
          title: '分析统计'
        }
      },
      {
        path: '/dashboard',
        icon: 'el-icon-s-platform',
        meta: {
          title: '仪表盘'
        },
        component: Dashboard
      }
    ]
  },
  {
    path: '/products',
    component: Layout,
    redirect: '/products/lists',
    icon: 'el-icon-setting',
    meta: {
      title: '产品管理'
    },
    children: [
      {
        path: '/products/lists',
        icon: 'el-icon-s-home',
        component: () =>
          import(/* webpackChunkName: "ProductLists" */ '@views/ProductLists'),
        meta: {
          title: '产品列表'
        }
      },
      {
        path: '/products/catagory',
        icon: 'el-icon-s-order',
        meta: {
          title: '产品分类'
        },
        component: () =>
          import(
            /* webpackChunkName: "ProductCatagory" */ '@views/ProductCatagory'
          )
      }
    ]
  },
  {
    path: '/orders',
    component: Layout,
    redirect: '/orders/lists',
    icon: 'el-icon-mobile',
    meta: {
      title: '订单管理'
    },
    children: [
      {
        path: '/orders/lists',
        component: () =>
          import(/* webpackChunkName: "ProductLists" */ '@views/ProductLists'),
        icon: 'el-icon-menu',
        meta: {
          title: '订单列表'
        }
      },
      {
        path: '/orders/catagory',
        meta: {
          title: '汇总订单'
        },
        icon: 'el-icon-s-data',
        component: () =>
          import(
            /* webpackChunkName: "ProductCatagory" */ '@views/ProductCatagory'
          )
      }
    ]
  },
  {
    path: '/ad',
    component: Layout,
    meta: {
      title: '广告管理'
    },
    children: [
      {
        path: '/ad/list',
        icon: 'el-icon-tickets',
        meta: {
          title: '广告列表'
        },
        component: () =>
          import(/* webpackChunkName: "ProductCatagory" */ '@views/Ad')
      }
    ]
  },
  {
    path: '/contact',
    component: Layout,
    meta: {
      title: '广告管理'
    },
    children: [
      {
        path: '/contact/list',
        icon: 'el-icon-present',
        meta: {
          title: '联系我们'
        },
        component: () =>
          import(/* webpackChunkName: "ProductCatagory" */ '@views/Contact')
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
