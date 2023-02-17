<template>
  <el-menu
    :default-active="activeMenu"
    active-text-color="#ffd04b"
    class="el-menu-vertical-demo"
    background-color="#112f50"
    text-color="#fff"
    @open="handleOpen"
    unique-opened
    @close="handleClose"
    :collapse-transition="false"
    router
    :collapse="sidebar.opened"
    mode="vertical"
  >
    <!-- {{ sidebar.opened }} -->
    <MenuItem
      v-for="route in RouterLists"
      :item="route"
      :key="route.path"
      :base-path="route.path"
    />
  </el-menu>
</template>

<script>
import MenuItem from './MenuItem'
import { routes } from '@/router'
import { mapGetters } from 'vuex'
export default {
  name: 'Menus',
  components: { MenuItem },
  data() {
    return {
      isCollapse: false
      // menus: routes
    }
  },
  computed: {
    ...mapGetters(['sidebar']),
    RouterLists() {
      console.log('888')
      //对菜单进行处理,只有一个菜单就不显示父级
      return routes.map((item) => {
        if (item.children && item.children.length === 1) {
          item = item.children[0]
        }
        return item
      })
    },
    activeMenu() {
      const route = this.$route
      console.log('999')
      console.log(this.$route, 'route')
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },

  mounted() {
    // console.log(routes, 'routes')
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu {
  border-right: none;
  &.el-menu--collapse {
    width: 68px !important;
    /deep/.el-icon-arrow-right {
      //样式bug修复
      display: none !important;
    }
  }
}
</style>
