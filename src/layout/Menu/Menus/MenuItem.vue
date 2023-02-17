<template>
  <div v-if="!item.hidden">
    <el-submenu
      v-if="item.children && item.children.length > 0"
      :index="item.path"
      :key="item.path"
    >
      <template slot="title">
        <i :class="item.icon" />
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <MenuItem
        :item="subItem"
        v-for="subItem in item.children"
        :key="subItem.path"
      />
    </el-submenu>
    <el-menu-item v-else :index="item.path">
      <i :class="item.icon" />
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    this.onlyOneChild = null
    return { isCollapse: false }
  },

  mounted() {},

  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    }
  }
}
</script>
<style scoped>
.el-menu--collapse .el-menu-item span,
.el-menu--collapse .el-submenu .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>

<style lang="less" scoped>
/deep/.el-menu--collapse {
  .el-submenu__icon-arrow {
    background: red;
    display: none !important;
  }
}
</style>
