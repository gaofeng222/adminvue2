<template>
  <div class="home-container">
    <el-row :gutter="20">
      <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"
        ><div class="grid-content">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>访问数</span>
              <el-button
                type="primary"
                plain
                style="float: right; padding: 3px 6px"
                >月</el-button
              >
            </div>
            <div class="text item">
              <p class="item-o">
                <span> $2,000 </span>
                <span></span>
              </p>
              <p class="item-t">
                <span> 总访问数 </span>
                <span>$120,000</span>
              </p>
            </div>
          </el-card>
        </div></el-col
      >
      <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"
        ><div class="grid-content">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>成交额</span>
              <el-button
                type="warning"
                plain
                style="float: right; padding: 3px 6px"
                >月</el-button
              >
            </div>
            <div class="text item">
              <p class="item-o">
                <span> $20,000 </span>
                <span></span>
              </p>
              <p class="item-t">
                <span> 总访问数 </span>
                <span>$500,000</span>
              </p>
            </div>
          </el-card>
        </div></el-col
      >
      <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"
        ><div class="grid-content">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>下载数</span>
              <el-button
                type="success"
                plain
                style="float: right; padding: 3px 6px"
                >周</el-button
              >
            </div>
            <div class="text item">
              <p class="item-o">
                <span> $8,000 </span>
                <span></span>
              </p>
              <p class="item-t">
                <span> 总访问数 </span>
                <span>$120,000</span>
              </p>
            </div>
          </el-card>
        </div></el-col
      >
      <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"
        ><div class="grid-content">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>成交数</span>
              <el-button
                type="info"
                plain
                style="float: right; padding: 3px 6px"
                >年</el-button
              >
            </div>
            <div class="text item">
              <p class="item-o">
                <span> $5,000 </span>
                <span></span>
              </p>
              <p class="item-t">
                <span> 总访问数 </span>
                <span>$500,000</span>
              </p>
            </div>
          </el-card>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  margin-bottom: 10px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.home-container {
  .box-card {
    .item {
      p {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        &.item-o {
          font-size: 24px;
        }
        &.item-t {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
