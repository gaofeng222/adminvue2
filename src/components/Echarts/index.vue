<template>
  <el-card :loading="loading">
    <div slot="header" class="clearfix" v-if="showHead">
      <span>{{ title }}</span>
    </div>
    <div ref="chartRef" :style="{ width, height }"></div>
  </el-card>
</template>

<script>
import echarts from 'echarts'
import mixins from './mixins'
export default {
  name: 'Echarts',
  mixins: [mixins],
  props: {
    title: {
      type: String,
      default: '柱状图'
    },
    loading: {
      type: Boolean,
      default: true
    },
    showHead: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartInstance: null,
      defaultsOptions: {
        grid: {
          borderWidth: 0
        }
      }
    }
  },
  watch: {
    loading: {
      handle() {}
      //   immediate: true
    }
  },
  mounted() {
    this.initInstance()
  },
  beforeDestroy() {
    if (!this.chartInstance) {
      return
    }
    this.chartInstance.dispose()
    this.chartInstance.clear()
    this.chartInstance = null
  },
  methods: {
    initInstance() {
      let el = this.$refs.chartRef
      this.chartInstance = echarts.init(el)
      console.log(this.chartInstance, 'this.chartInstance')

      const instanceOptions = Object.assign(
        {},
        this.defaultsOptions,
        this.options
      )

      this.chartInstance.setOption(instanceOptions)
    }
  }
}
</script>

<style lang="scss" scoped></style>
