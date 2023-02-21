<template>
  <div class="tags-view-container">
    <scroll-pane @scroll="handleScroll" class="tags-view-wrapper">
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :key="tag.path"
        :class="isActive(tag) ? 'active' : ''"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        tag="span"
        class="tags-view-item"
        @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''"
        @contextmenu.prevent.native="openMenu(tag, $event)"
      >
        {{ tag.title }}
        <span
          v-if="!isAffix(tag)"
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(tag)"
        /> </router-link
    ></scroll-pane>
    <el-dropdown class="route-setting" @command="handleCommand">
      <span class="el-dropdown-link">
        <i class="el-icon-menu"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="refresh">
          <i class="el-icon-refresh"></i> 刷新</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import ScrollPane from './ScrollPane'
import path from 'path'
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      affixTags: [],
      routes: [],
      selectTag: {}
    }
  },
  computed: {
    ...mapGetters(['visitedViews'])
  },
  watch: {
    $route() {
      this.addTags()
      console.log(this.visitedViews, 'visitedViews')
    }
  },
  components: {
    ScrollPane
  },
  mounted() {
    this.initTags()
  },

  methods: {
    ...mapActions('tagsViews', {
      addTagsViews: 'addView',
      closeTagsViews: 'delView',
      addVisistTags: 'addVisitedView',
      delCachedViews: 'delCachedView'
    }),
    isActive(route) {
      if (route.path === this.$route.path) {
        this.selectTag = route
      }
      return route.path === this.$route.path
    },
    isAffix(tag) {
      return tag.meta && tag.meta.affix
    },
    handleScroll() {
      console.log('handleScroll')
    },
    filterAffixTags(routes, basePath = '/') {
      let tags = []
      routes.forEach((route) => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    initTags() {
      console.log('initTags')
      const affixTags = (this.affixTags = this.filterAffixTags(this.routes))
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          this.addVisistTags(tag)
        }
      }
      // console.log(this.$route, 'addd')
      //刷新后只保留当前的tags
      this.addVisistTags(this.$route)
    },
    addTags() {
      const { name } = this.$route
      if (name) {
        this.addTagsViews(this.$route)
      }
      return false
    },
    closeSelectedTag(view) {
      this.closeTagsViews(view).then(({ visitedViews }) => {
        console.log(visitedViews, 'visitedViews')
        if (this.isActive(view)) {
          this.toLastView(visitedViews, view)
        }
      })
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView.fullPath)
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: '/redirect' + view.fullPath })
        } else {
          this.$router.push('/')
        }
      }
    },
    openMenu() {},
    handleCommand(command) {
      if (command == 'refresh') {
        console.log(this.selectTag, 'command')
        this.delCachedViews(this.selectTag).then(() => {
          const { fullPath } = this.selectTag
          this.$nextTick(() => {
            this.$router.replace({
              path: '/redirect' + fullPath
            })
          })
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tags-view-container {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  position: relative;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 2px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: @menuHover;
        color: #fff;
        border-color: @menuHover;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
      .el-icon-close {
        width: 16px;
        height: 16px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transform-origin: 100% 50%;
        &:before {
          transform: scale(0.6);
          display: inline-block;
          vertical-align: -3px;
        }
        &:hover {
          background-color: #fff;
          color: @menuHover;
        }
      }
    }
  }
  .route-setting {
    position: absolute;
    right: 10px;
    top: 10px;
    margin-left: 10px;
  }
}
</style>
