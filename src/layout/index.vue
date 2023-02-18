<template>
  <div class="layout">
    <div class="menu" :class="{ 'is-collapse': sidebar.opened }">
      <Menu />
    </div>
    <div class="content" :class="{ 'is-collapse': sidebar.opened }">
      <MainContent />
    </div>
  </div>
</template>

<script>
import Menu from '@layout/Menu'
import MainContent from '@layout/MainContent'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  components: {
    Menu,
    MainContent
  },
  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  overflow: hidden;
  .menu {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    width: @sideBarWidth;
    background: @sidebarColor;
    transition: width 0.1s;
    &.is-collapse {
      width: 70px !important;
    }
  }
  .content {
    margin-left: @sideBarWidth;
    overflow: hidden;
    background: #f0f2f5;

    &.is-collapse {
      transition: width 0.28s;
      margin-left: 70px !important;
    }
  }
}
</style>
