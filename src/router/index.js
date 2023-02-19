import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@views/Login'
import Home from '@views/Home'
import Dashboard from '@views/Dashboard'
import Layout from '@layout/'
Vue.use(VueRouter)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

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
        name: 'analysis',
        meta: {
          title: '分析统计',
          affix: true
        }
      },
      {
        path: '/dashboard',
        icon: 'el-icon-s-platform',
        name: 'Dashboard',
        meta: {
          title: '仪表盘',
          affix: true
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
        name: 'catafory-lists',
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
        name: 'catafory-product',
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
          import(/* webpackChunkName: "ProductLists" */ '@views/OrderLists'),
        icon: 'el-icon-menu',
        name: 'order-list',
        meta: {
          title: '订单列表'
        }
      },
      {
        path: '/orders/catagory',
        meta: {
          title: '汇总订单'
        },
        name: 'total-order',
        icon: 'el-icon-s-data',
        component: () =>
          import(
            /* webpackChunkName: "ProductCatagory" */ '@views/OrderCatagory'
          )
      }
    ]
  },
  // {
  //   path: '/components',
  //   component: Layout,
  //   meta: {
  //     title: '组件管理'
  //   },
  //   children: [
  //     {
  //       path: '/components/edite',
  //       icon: 'el-icon-tickets',
  //       name: 'editePage',
  //       meta: {
  //         title: '富文本'
  //       },
  //       component: () =>
  //         import(/* webpackChunkName: "ProductCatagory" */ '@views/Edite')
  //     }
  //   ]
  // },
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
        name: 'advertisement',
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
      title: '反馈管理'
    },
    children: [
      {
        path: '/contact/list',
        icon: 'el-icon-present',
        name: 'contact',
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
