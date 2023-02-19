<template>
  <div>
    <div class="lg:flex bg-white p-4">
      <el-avatar
        :size="72"
        class="!mx-auto !block"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2">
        <h1 class="md:text-lg text-md">
          早安, {{ userinfo.realname }}, 开始您一天的工作吧！
        </h1>
        <span class="text-secondary text-red-500"> 今日晴，20℃ - 32℃！ </span>
      </div>
      <div class="flex flex-1 justify-end md:mt-0 mt-4">
        <div class="flex flex-col justify-center text-right">
          <span class="text-secondary"> 待办 </span>
          <span class="text-xl">2/10</span>
        </div>

        <div class="flex flex-col justify-center text-right md:mx-16 mx-12">
          <span class="text-secondary"> 项目 </span>
          <span class="text-xl">8</span>
        </div>
        <div class="flex flex-col justify-center text-right md:mr-10 mr-4">
          <span class="text-secondary"> 团队 </span>
          <span class="text-xl">300</span>
        </div>
      </div>
    </div>
    <div class="lg:flex mt-2">
      <el-card class="w-2/3 mr-2">
        <div slot="header" class="clearfix">
          <span>月销售额</span>
        </div>
        <my-echarts height="350px" :options="options1" />
      </el-card>
      <el-card class="w-1/3"
        ><div slot="header" class="clearfix">
          <span>比例分配</span>
        </div>
        <my-echarts height="350px" :options="options2"
      /></el-card>
    </div>
  </div>
</template>

<script>
import options2 from '@assets/data/echart'
export default {
  name: 'Dashboard',

  data() {
    return {
      userinfo: {
        realname: 'admin'
      },
      options1: {
        dataset: {
          source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie']
          ]
        },
        grid: {
          left: '0',
          right: '0',
          top: '2%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: { name: 'amount' },
        yAxis: { type: 'category' },
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 10,
          max: 100,
          text: ['High Score', 'Low Score'],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F']
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              x: 'amount',
              // Map the "product" column to Y axis
              y: 'product'
            }
          }
        ]
      },
      options2
    }
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped></style>
