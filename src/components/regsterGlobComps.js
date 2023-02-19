import Vue from 'vue'
import { SvgIcon } from './SvgIcon' //TinymceEditor
import MyEcharts from '@comp/Echarts'
// import TinymceEditor from '@comp/TinymceEditor'
import PageWrapper from '@comp/Pagerapper'

const compList = [SvgIcon, MyEcharts, PageWrapper]

compList.forEach((comp) => {
  Vue.component(comp.name || comp.displayName, comp)
})

//这个必须加上
const req = require.context('../icons', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
