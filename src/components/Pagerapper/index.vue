<template>
  <div class="pege-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageWrapper',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.pege-wrapper {
  background-color: #fff;
  padding: 10px;
}
</style>
