import Vue from 'vue'
import { SvgIcon } from './SvgIcon'
import MyEcharts from '@comp/Echarts'
import Pagerapper from '@comp/Pagerapper'

const compList = [SvgIcon, MyEcharts, Pagerapper]

compList.forEach((comp) => {
  Vue.component(comp.name || comp.displayName, comp)
})

//这个必须加上
const req = require.context('../icons', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
