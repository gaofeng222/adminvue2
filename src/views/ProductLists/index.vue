<template>
  <PageWrapper>
    <!-- {{ tableCalHeight }} -->
    <el-table
      ref="tableComp"
      :data="tableData"
      show-overflow-tooltip
      :height="tableCalHeight"
      border
      style="width: 100%; margin-bottom: 10px"
      ooltip-effect="dark"
      highlight-current-row
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="180">
        <!-- empty-text="暂无数据" -->
        <template slot="empty">
          <span>暂无数据</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
  </PageWrapper>
</template>

<script>
import { tableHeight } from '@/mixins/tableHeight'
export default {
  name: 'ProductsLists',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          ageL: '',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          ageL: '',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          ageL: '',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          ageL: '',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          ageL: '',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          ageL: '',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          ageL: '',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  mixins: [tableHeight],
  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped></style>
