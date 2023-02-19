import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permisson'
import '@style/index.less' // global css
import '@/style/tailwindcss.css'
import 'element-ui/lib/theme-chalk/display.css'
import ElementUI from 'element-ui'
import '@comp/regsterGlobComps'

// import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)

require('./mock/index') //运行mock

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
