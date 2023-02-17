<template>
  <div class="nav-container">
    <NavTop />
    <el-scrollbar>
      <Menus />
    </el-scrollbar>
  </div>
</template>

<script>
import NavTop from './NavTop'
import Menus from './Menus'
export default {
  name: 'Menu',
  components: { Menus, NavTop },
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
::v-deep .el-scrollbar {
  height: calc(100% - 60px);
}
::v-deep .el-scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
  overflow-y: auto;
}
.nav-container {
  height: 100%;
  overflow: hidden;
}
</style>
