<template>
  <div class="main-container">
    <Heador />
    <TagsViews v-if="showTagsView" />
    <div
      class="main-c"
      :style="{
        height: showTagsView ? 'calc(100vh - 105px)' : 'calc(100vh - 61px)'
      }"
    >
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
import { mapGetters } from 'vuex'
export default {
  name: 'MainContent',
  components: { Heador, TagsViews },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['showTagsView', 'cachedViews']),
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
  }
}
</style>
