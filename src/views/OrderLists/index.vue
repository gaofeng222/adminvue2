<template>
  <Pagerapper>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
      inline
    >
      <el-form-item label="日期：">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="姓名：">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="地址：">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
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
      <el-table-column prop="age" label="年龄" width="180"> </el-table-column>
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
  </Pagerapper>
</template>

<script>
import { tableHeight } from '@/mixins/tableHeight'
export default {
  name: 'OrderLists',

  data() {
    return {
      labelPosition: 'left',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
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

  methods: {
    onSubmit() {
      alert('submit!')
      console.log('submit!')
    }
  }
}
</script>

<style lang="less" scoped></style>
