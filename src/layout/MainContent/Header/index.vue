<template>
  <div class="header">
    <div class="left-menu w-1/3">
      <Hamburger
        class="hamburger-container hidden-xs-only"
        @toggleClick="toggleSideBar"
        :isActive="sidebar.opened"
      />
      <Breadcrumb v-if="breadcrumeShow" class="breadcrumb-container" />
      <h3 v-else style="line-height: 60px" class="ml-10">
        欢迎进入{{ systemName }}后台管理系统
      </h3>
    </div>
    <div class="right-info">
      <div class="time-info">
        <span>当前时间:{{ nowTime }}</span>
      </div>
      <div class="welcom-info hidden-xs-only">
        <p>欢迎回来，{{ username }}</p>
      </div>
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <img
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
            class="user-avatar"
          />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/dashboard">
            <el-dropdown-item>仪表盘</el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/gaofeng222/adminvue2/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div>
        <i class="el-icon-s-tools" @click="showDrawerHandle"></i>
      </div>
    </div>
    <Drawer :drawerShow="drawerShow" @closDrawerHandle="closDrawerHandle" />
  </div>
</template>

<script>
import Hamburger from '@comp/Hamburger'
import Breadcrumb from '@comp/Breadcrumb'
import Drawer from '@comp/Drawer'
import { mapActions, mapGetters } from 'vuex'
import dayjs from 'dayjs'

export default {
  name: 'Header',

  data() {
    return {
      username: 'admin',
      nowTime: '',
      timeId: null,
      drawerShow: false
    }
  },
  components: { Hamburger, Breadcrumb, Drawer },
  created() {
    this.initTime()
  },
  mounted() {
    // console.log(dayjs().format())
  },
  computed: {
    ...mapGetters(['sidebar', 'breadcrumeShow', 'systemName'])
  },
  beforeDestroy() {
    clearTimeout(this.timeId)
  },
  methods: {
    ...mapActions('app', {
      toggleSideBarHandle: 'toggleSideBar'
    }),
    ...mapActions('user', {
      logoutHandle: 'logout'
    }),
    toggleSideBar() {
      this.toggleSideBarHandle()
    },
    logout() {
      this.logoutHandle().then((res) => {
        if (res.code == 200) {
          this.$notify({
            title: '提示',
            message: '退出成功',
            type: 'success',
            duration: 1000
          })
        }
        this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        // location.reload()
      })
    },
    initTime() {
      this.nowTime = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
      this.timeId = setInterval(() => {
        this.gettime()
      }, 1000)
    },
    gettime() {
      this.nowTime = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
    showDrawerHandle() {
      this.drawerShow = !this.drawerShow
    },
    closDrawerHandle() {
      this.drawerShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.02);
  .left-menu {
    float: left;
    .hamburger-container {
      line-height: 60px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background 0.3s;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
    .breadcrumb-container {
      float: left;
      line-height: 60px;
      height: 100%;
      margin-left: 10px;
    }
  }
  .right-info {
    float: right;
    // height: 100%;
    // line-height: 60px;
    &:focus {
      outline: none;
    }
    display: flex;
    align-items: center;
    .time-info {
      padding-top: 11px;
      margin-right: 10px;
    }
    .welcom-info {
      font-size: 14px;
      padding-top: 10px;
      color: @subMenuBg;
    }
    .avatar-container {
      margin-right: 30px;
      margin-left: 10px;
      .avatar-wrapper {
        margin-top: 10px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 15px;
          font-size: 12px;
        }
      }
    }
    .el-icon-s-tools {
      padding-top: 15px;
      cursor: pointer;
      padding-right: 10px;
    }
  }
}
</style>
