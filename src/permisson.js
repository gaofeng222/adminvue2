import router from './router'

let token = ''
router.beforeEach((to, from, next) => {
  if (token) {
    return next()
  } else {
    console.log(to, 'to')
    if (to.path != '/login') {
      next('/login')
    } else {
      next()
    }
  }
})
