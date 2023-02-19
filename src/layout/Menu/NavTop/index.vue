<template>
  <transition name="sidebarLogoFade">
    <div class="navBox">
      <router-link class="sidebar-logo-link" to="/">
        <svg
          class="logo"
          viewBox="0 0 128 128"
          width="24"
          height="24"
          data-v-e0ef77de=""
        >
          <path
            fill="#42b883"
            d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
            data-v-e0ef77de=""
          ></path>
          <path
            fill="#35495e"
            d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
            data-v-e0ef77de=""
          ></path>
        </svg>
        <h3 v-if="!sidebar.opened">{{ systemName }}管理后台</h3>
      </router-link>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavTop',

  data() {
    return {
      log: 'https://cn.vuejs.org/'
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'systemName'])
  },
  mounted() {
    // console.log(this.siderbar, 'side')
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}
.navBox {
  height: 60px;
  font-size: 22px;
  color: #fff;
  .sidebar-logo-link {
    box-sizing: border-box;
    padding-left: 20px;
    display: block;
    width: 100%;
    line-height: 60px;
    svg {
      float: left;
      margin-top: 18px;
    }
    h3 {
      font-size: 20px;
      float: left;
      margin-left: 4px;
    }
  }
}
</style>
