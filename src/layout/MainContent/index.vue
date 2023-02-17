<template>
  <div>
    <Heador />
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Heador from '@layout/MainContent/Header'
export default {
  name: 'MainContent',
  components: { Heador },
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

<style scoped></style>
