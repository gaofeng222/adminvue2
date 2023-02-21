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
 * name:'router-name'             the name is used by <keep-alive> (must set!!!) 组件里面的name === route.js里面，保持一致
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

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@views/Redirect/index'),
        hidden: true,
        meta: {
          title: '重定向'
        }
      }
    ]
  },
  { path: '/login', component: Login, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '首页'
    },
    name: 'Index',
    icon: 'el-icon-s-home',
    children: [
      {
        path: '/home',
        component: Home,
        icon: 'el-icon-s-home',
        name: 'Analysis',
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
    name: 'Product',
    children: [
      {
        path: '/products/lists',
        icon: 'el-icon-s-home',
        name: 'Products-lists',
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
        name: 'Products-catagory',
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
    name: 'Orders',
    children: [
      {
        path: '/orders/lists',
        component: () =>
          import(/* webpackChunkName: "OrderLists" */ '@views/OrderLists'),
        icon: 'el-icon-menu',
        name: 'OrderLists',
        meta: {
          title: '订单列表',
          noCache: true
        }
      },
      {
        path: '/orders/catagory',
        meta: {
          title: '汇总订单'
        },
        name: 'TotalOrder',
        icon: 'el-icon-s-data',
        component: () =>
          import(/* webpackChunkName: "OrderCatagory" */ '@views/OrderCatagory')
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
    name: 'Ad',
    children: [
      {
        path: '/ad/list',
        icon: 'el-icon-tickets',
        name: 'Advertisement',
        meta: {
          title: '广告列表'
        },
        component: () =>
          import(/* webpackChunkName: "ProductCatagory" */ '@views/Ad')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@views/ErrorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@views/ErrorPage/401'),
    hidden: true
  },
  {
    path: '/contact',
    component: Layout,
    meta: {
      title: '反馈管理'
    },
    name: 'FeedBack',
    children: [
      {
        path: '/contact/list',
        icon: 'el-icon-present',
        name: 'Contact',
        meta: {
          title: '联系我们'
        },
        component: () =>
          import(/* webpackChunkName: "ProductCatagory" */ '@views/Contact')
      }
    ]
  }
  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/directive',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: '路由权限',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    icon: 'el-icon-s-platform',
    children: [
      {
        path: '/permission/page',
        component: () => import('@views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: '权限页面',
          roles: ['admin'] // or you can only set roles in sub nav
        },
        icon: 'el-icon-s-check'
      },
      {
        path: '/permission/directive',
        component: () => import('@views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: '指令权限'
          // if do not set roles, means: this page does not require permission
        },
        icon: 'el-icon-notebook-1'
      },
      {
        path: '/permission/role',
        component: () => import('@views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '角色权限',
          roles: ['admin']
        },
        icon: 'el-icon-bank-card'
      }
    ]
  }
]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const createRouter = () =>
  new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: constantRoutes // (缩写) 相当于 routes: routes
  })
const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
