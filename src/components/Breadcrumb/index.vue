<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
          class="no-redirect"
          >{{ item.meta.title }}</span
        >
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
const { compile } = require('path-to-regexp')
export default {
  data() {
    return {
      levelList: null,
      name: 'test'
    }
  },
  watch: {
    $route(route) {
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getBreadcrumb()
      console.log(route, 'route222')
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      )
      const first = matched[0]
      const second = matched[1]
      console.log(second, 'second')
      if (!this.isDashboard(first) && first.meta.title != '首页') {
        matched = [{ path: '/dashboard', meta: { title: '仪表盘' } }].concat(
          matched
        )
      }
      this.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      )
      console.log(this.levelList, 'levelList')
    },
    isDashboard(route) {
      console.log(route, 'first')
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = compile(path)
      console.log(toPath(params), 'path')
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      console.log(path, 'path222')
      console.log(redirect, 'redirect')
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
      console.log(item, '999')
    }
  }
}
</script>
