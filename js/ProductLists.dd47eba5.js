(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProductLists"],{"5a14":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("5880");const i={data(){return{tableCalHeight:300,currentPage:1}},computed:{...Object(n["mapGetters"])(["showTagsView"])},watch:{showTagsView:{handler(){this.$_initHeight()},immediate:!0}},mounted(){this.$_initHeight(),window.addEventListener("resize",this.$_initHeight)},beforeDestory(){window.removeEventListener("resize",this.$_initHeight)},methods:{$_initHeight(){this.$nextTick(()=>{let e=this.$refs.tableComp.$el;console.log(e,"dom");let t=e.getBoundingClientRect().top,a=(document.documentElement||document.body).clientHeight;this.tableCalHeight=a-t-64})},handleSizeChange(e){console.log(`每页 ${e} 条`)},handleCurrentChange(e){console.log("当前页: "+e)}}}},"8ad3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("PageWrapper",[t("el-table",{ref:"tableComp",staticStyle:{width:"100%","margin-bottom":"10px"},attrs:{data:e.tableData,"show-overflow-tooltip":"",height:e.tableCalHeight,border:"","ooltip-effect":"dark","highlight-current-row":""}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t("el-table-column",{attrs:{prop:"age",label:"年龄",width:"180"}},[t("template",{slot:"empty"},[t("span",[e._v("暂无数据")])])],2),t("el-table-column",{attrs:{prop:"address",label:"地址"}})],1),t("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},i=[],s=a("5a14"),r={name:"ProductsLists",data(){return{tableData:[{date:"2016-05-03",name:"王小虎",ageL:"",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎",ageL:"",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",ageL:"",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",ageL:"",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-08",name:"王小虎",ageL:"",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-06",name:"王小虎",ageL:"",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-07",name:"王小虎",ageL:"",address:"上海市普陀区金沙江路 1518 弄"}]}},mixins:[s["a"]],mounted(){},methods:{}},l=r,o=a("2877"),d=Object(o["a"])(l,n,i,!1,null,"6ee87a59",null);t["default"]=d.exports}}]);