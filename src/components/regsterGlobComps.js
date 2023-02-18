import Vue from 'vue'
import { SvgIcon } from './SvgIcon'

const compList = [SvgIcon]

compList.forEach((comp) => {
  Vue.component(comp.name || comp.displayName, comp)
})

//这个必须加上
const req = require.context('../icons', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
