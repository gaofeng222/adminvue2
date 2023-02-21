import router from './router'
import storage from '@utils/storage'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@utils/getPageTitle'
import { Message } from 'element-ui'
const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist
NProgress.configure({ showSpinner: false }) // NProgress Configuration
router.beforeEach(async (to, from, next) => {
  // console.log(to, 'to111')
  // console.log(from, 'from111')
  NProgress.start()
  document.title = getPageTitle(to.meta.title)
  let token = storage.get('token')
  if (token) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      console.log(store.getters.roles, 'roles22')
      // next()
      const hasRoles = store.getters.roles && store.getters.roles.length > 0

      if (hasRoles) {
        next()
      } else {
        try {
          const { roles } = await store.dispatch('user/getInfo', { token })

          const accessRoutes = await store.dispatch(
            'permission/generateRoutes',
            roles
          )
          let dRoutes = [
            ...accessRoutes,
            { path: '*', redirect: '/404', hidden: true }
          ]
          console.log(accessRoutes, 'accessRoutes')
          console.log(roles, 'roles333')
          // router.addRoutes(accessRoutes)
          for (const route of dRoutes) {
            console.log(route, 'route')
            router.addRoute(route)
          }
          next({ ...to, replace: true })
        } catch (error) {
          console.log(error)
          await store.dispatch('user/resetToken')
          Message.error(error || '出错了')
          to.path != '/home' ? next(`/login?redirect=${to.path}`) : ''
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
