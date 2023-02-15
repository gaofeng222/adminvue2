<template>
  <div>
    <Heador />
    <!-- <Content /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Heador from "@layout/MainContent/Header";
export default {
  name: "MainContent",
  components: { Heador },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
