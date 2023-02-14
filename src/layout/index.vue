<template>
  <div class="layout">
    <div class="menu">
      <Menu />
    </div>
    <div class="content">
      <MainContent />
    </div>
  </div>
</template>

<script>
import Menu from "@layout/Menu";
import MainContent from "@layout/MainContent";
export default {
  data() {
    return {};
  },
  components: {
    Menu,
    MainContent,
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
@width: 250px;
@backgroundColor: #112f50;
.layout {
  .menu {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    width: @width;
    background: @backgroundColor;
  }
  .content {
    margin-left: @width;
  }
}
</style>
