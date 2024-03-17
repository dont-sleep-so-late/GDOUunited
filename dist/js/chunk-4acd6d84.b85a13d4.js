(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4acd6d84"],{"2dcc":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"用户名"},model:{value:e.searchObj.username,callback:function(t){e.$set(e.searchObj,"username",t)},expression:"searchObj.username"}})],1),t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.fetchData()}}},[e._v("查询")]),t("el-button",{attrs:{type:"default"},on:{click:function(t){return e.resetData()}}},[e._v("清空")])],1),t("div",[e.hasPerm("user.add")?t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.addUser()}}},[e._v("添加")]):e._e(),e.hasPerm("user.remove")?t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.removeRows()}}},[e._v("批量删除")]):e._e()],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,stripe:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{label:"序号",width:"70",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s((e.page-1)*e.limit+t.$index+1)+" ")]}}])}),t("el-table-column",{attrs:{prop:"username",label:"用户名",width:"150"}}),t("el-table-column",{attrs:{prop:"nickName",label:"用户昵称"}}),t("el-table-column",{attrs:{prop:"gmtCreate",label:"创建时间",width:"180"}}),t("el-table-column",{attrs:{label:"操作",width:"230",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("router-link",{attrs:{to:"/workplace/user/role/"+a.row.id}},[e.hasPerm("user.assgin")?t("el-button",{attrs:{type:"info",size:"mini",icon:"el-icon-info"}}):e._e()],1),t("router-link",{attrs:{to:"/workplace/user/update/"+a.row.id}},[e.hasPerm("user.update")?t("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"}}):e._e()],1),e.hasPerm("user.remove")?t("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(t){return e.removeDataById(a.row.id)}}}):e._e()]}}])})],1),t("el-pagination",{staticStyle:{padding:"30px 0","text-align":"center"},attrs:{"current-page":e.page,total:e.total,"page-size":e.limit,"page-sizes":[5,10,20,30,40,50,100],layout:"sizes, prev, pager, next, jumper, ->, total, slot"},on:{"current-change":e.fetchData,"size-change":e.changeSize}})],1)},n=[],i=(a("14d9"),a("d694")),o={data(){return{listLoading:!0,list:null,total:0,page:1,limit:10,searchObj:{},multipleSelection:[]}},created(){console.log("list created......"),this.fetchData()},mounted(){console.log("list mounted......")},methods:{changeSize(e){console.log(e),this.limit=e,this.fetchData(1)},addUser(){this.$router.push({path:"/workplace/user/add"})},fetchData(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;console.log("翻页。。。"+e),this.page=e,i["a"].getPageList(this.page,this.limit,this.searchObj).then(e=>{this.list=e.data.items,this.total=e.data.total,this.listLoading=!1})},resetData(){console.log("重置查询表单"),this.searchObj={},this.fetchData()},removeDataById(e){this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>i["a"].removeById(e)).then(e=>{this.fetchData(this.page),e.success&&this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},handleSelectionChange(e){console.log("handleSelectionChange......"),console.log(e),this.multipleSelection=e},removeRows(){console.log("removeRows......"),0!==this.multipleSelection.length?this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{var e=[];return this.multipleSelection.forEach(t=>{e.push(t.id)}),i["a"].removeRows(e)}).then(e=>{this.fetchData(this.page),e.success&&this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})}):this.$message({type:"warning",message:"请选择要删除的记录!"})},querySearch(e,t){console.log(e),console.log(t)}}},r=o,l=a("2877"),c=Object(l["a"])(r,s,n,!1,null,null,null);t["default"]=c.exports},d694:function(e,t,a){"use strict";var s=a("b775");const n="http://175.178.83.49:8222/admin/acl/user";t["a"]={getPageList(e,t,a){return Object(s["a"])({url:`${n}/${e}/${t}`,method:"get",params:a})},getById(e){return Object(s["a"])({url:`${n}/getId/${e}`,method:"get"})},save(e){return Object(s["a"])({url:n+"/save",method:"post",data:e})},updateById(e){return Object(s["a"])({url:n+"/update",method:"put",data:e})},getAssign(e){return Object(s["a"])({url:`${n}/toAssign/${e}`,method:"get"})},saveAssign(e,t){return Object(s["a"])({url:n+"/doAssign",method:"post",params:{userId:e,roleId:t}})},removeById(e){return Object(s["a"])({url:`${n}/remove/${e}`,method:"delete"})},removeRows(e){return Object(s["a"])({url:n+"/batchRemove",method:"delete",data:e})}}}}]);