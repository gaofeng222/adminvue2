export const tableHeight = {
  data() {
    return {
      tableCalHeight: 300,
      currentPage: 1
    }
  },
  mounted() {
    this.$_initHeight()
    window.addEventListener('resize', this.$_initHeight)
  },
  beforeDestory() {
    window.removeEventListener('resize', this.$_initHeight)
  },
  methods: {
    $_initHeight() {
      //必须在dom生成之后再设置高度，否则视图不会生效计算的高度
      this.$nextTick(() => {
        let dom = this.$refs.tableComp.$el
        console.log(dom, 'dom')
        //获取表格距离顶部的距离
        let topDisX = dom.getBoundingClientRect().top
        let bodyHeight = (document.documentElement || document.body)
          .clientHeight
        // console.log(topDisX, 'topDisX')
        // console.log(bodyHeight, 'bodyHeight')
        this.tableCalHeight = bodyHeight - topDisX - 64
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
