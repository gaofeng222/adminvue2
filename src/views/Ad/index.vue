<template>
  <div>
    <el-carousel height="450px" :interval="4000" type="card">
      <el-carousel-item v-for="item in picLists" :key="item.picUrl">
        <el-image :src="item.picUrl" fit="fit"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Ad',

  data() {
    return {
      picLists: [
        {
          picUrl: require('@assets/images/b1.png')
        },
        {
          picUrl: require('@assets/images/b2.png')
        },
        {
          picUrl: require('@assets/images/b3.png')
        },
        {
          picUrl: require('@assets/images/b4.png')
        }
      ]
    }
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
