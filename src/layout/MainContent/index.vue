<template>
  <div class="main-container">
    <Heador />
    <TagsViews />
    <div class="main-c">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import Heador from '@layout/MainContent/Header'
import TagsViews from './TagViews'
export default {
  name: 'MainContent',
  components: { Heador, TagsViews },
  data() {
    return {}
  },
  computed: {
    cachedViews() {
      // return this.$store.state.tagsView.cachedViews
      return []
    },
    key() {
      return this.$route.path
    }
  },
  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.main-container {
  height: 100%;
  overflow: hidden;
  .main-c {
    padding: 10px;
    box-sizing: border-box;
    overflow: auto;
    height: calc(100vh - 105px);
  }
}
</style>
