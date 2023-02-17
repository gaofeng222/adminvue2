<template>
  <div>
    <el-submenu
      v-if="item.children && item.children.length > 0"
      :index="item.path"
      :key="item.path"
    >
      <template slot="title">
        <i :class="item.icon" />
        <span slot="title">{{ item.meta.title }}</span>
      </template>
    </el-submenu>
    <el-menu-item v-else :index="item.path">
      <i :class="item.icon" />
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="less" scoped></style>
