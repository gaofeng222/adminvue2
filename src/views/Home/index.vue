<template>
  <div class="home-container">
    <el-row :gutter="20">
      <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"
        ><div class="grid-content">
          <el-card class="box-card" shadow="never">
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
                <span
                  ><svg-icon iconClass="channel" svgClass="channel"></svg-icon
                ></span>
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
                <span
                  ><svg-icon iconClass="fire" svgClass="fire"></svg-icon
                ></span>
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
                <span
                  ><svg-icon iconClass="order" svgClass="order"></svg-icon
                ></span>
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
                <span><svg-icon iconClass="wx" svgClass="wx"></svg-icon></span>
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

    <el-card shadow="never">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="流量趋势" name="first">
          <my-echarts
            v-if="activeName == 'first'"
            height="240px"
            :options="options"
          />
        </el-tab-pane>
        <el-tab-pane label="访问量" name="second"
          ><my-echarts
            v-if="activeName == 'second'"
            height="240px"
            :options="options2"
        /></el-tab-pane>
      </el-tabs>
    </el-card>

    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8"
        ><div class="grid-content">
          <my-echarts
            height="240px"
            showHead
            :options="options3"
            title="转化率"
          /></div
      ></el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8"
        ><div class="grid-content">
          <my-echarts
            height="240px"
            showHead
            :options="options4"
            title="访问来源"
          /></div
      ></el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8"
        ><div class="grid-content">
          <my-echarts
            height="240px"
            showHead
            :options="options5"
            title="成交占比"
          /></div></el-col
    ></el-row>
  </div>
</template>

<script>
// import MyEcharts from '@comp/Echarts'
export default {
  name: 'Home',

  data() {
    return {
      activeName: 'first',
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              width: 1,
              color: '#019680'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            '6:00',
            '7:00',
            '8:00',
            '9:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
            '23:00'
          ],
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              type: 'solid',
              color: 'rgba(226,226,226,0.5)'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            type: 'value',
            max: 80000,
            splitNumber: 4,
            axisTick: {
              show: false
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(255,255,255,0.2)', 'rgba(226,226,226,0.2)']
              }
            }
          }
        ],
        grid: {
          left: '0',
          right: '0',
          top: '4%',
          bottom: 0,
          containLabel: true
        },
        series: [
          {
            smooth: true,
            data: [
              111, 222, 4000, 18000, 33333, 55555, 66666, 33333, 14000, 36000,
              66666, 44444, 22222, 11111, 4000, 2000, 500, 333, 222, 111
            ],
            type: 'line',
            areaStyle: {},
            itemStyle: {
              color: '#5ab1ef'
            }
          },
          {
            smooth: true,
            data: [
              33, 66, 88, 333, 3333, 5000, 18000, 3000, 1200, 13000, 22000,
              11000, 2221, 1201, 390, 198, 60, 30, 22, 11
            ],
            type: 'line',
            areaStyle: {},
            itemStyle: {
              color: '#019680'
            }
          }
        ]
      },
      options2: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              width: 1,
              color: '#019680'
            }
          }
        },
        grid: {
          left: '0',
          right: '0',
          top: '4%',
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ]
        },
        yAxis: {
          type: 'value',
          max: 8000,
          splitNumber: 4
        },
        series: [
          {
            data: [
              3000, 2000, 3333, 5000, 3200, 4200, 3200, 2100, 3000, 5100, 6000,
              3200, 4800
            ],
            type: 'bar',
            barMaxWidth: 80
          }
        ]
      },
      options3: {
        legend: {
          bottom: 0,
          data: ['访问', '购买']
        },
        tooltip: {},
        radar: {
          radius: '60%',
          splitNumber: 8,
          indicator: [
            {
              text: '电脑',
              max: 100
            },
            {
              text: '充电器',
              max: 100
            },
            {
              text: '耳机',
              max: 100
            },
            {
              text: '手机',
              max: 100
            },
            {
              text: 'Ipad',
              max: 100
            },
            {
              text: '耳机',
              max: 100
            }
          ]
        },
        series: [
          {
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
              shadowBlur: 0,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            },
            data: [
              {
                value: [90, 50, 86, 40, 50, 20],
                name: '访问',
                itemStyle: {
                  color: '#b6a2de'
                }
              },
              {
                value: [70, 75, 70, 76, 20, 85],
                name: '购买',
                itemStyle: {
                  color: '#5ab1ef'
                }
              }
            ]
          }
        ]
      },
      options4: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: '1%',
          left: 'center'
        },
        series: [
          {
            color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '12',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' },
              { value: 484, name: '联盟广告' }
            ],
            animationType: 'scale',
            animationEasing: 'exponentialInOut',
            animationDelay: function () {
              return Math.random() * 100
            }
          }
        ]
      },
      options5: {
        tooltip: {
          trigger: 'item'
        },

        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
            data: [
              { value: 500, name: '电子产品' },
              { value: 310, name: '服装' },
              { value: 274, name: '化妆品' },
              { value: 400, name: '家居' }
            ].sort(function (a, b) {
              return a.value - b.value
            }),
            roseType: 'radius',
            animationType: 'scale',
            animationEasing: 'exponentialInOut',
            animationDelay: function () {
              return Math.random() * 400
            }
          }
        ]
      }
    }
  },
  components: {},
  mounted() {},

  methods: { handleClick() {} }
}
</script>

<style lang="less" scoped>
.el-row {
  // margin-bottom: 10px;
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
