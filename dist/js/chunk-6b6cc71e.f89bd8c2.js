(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b6cc71e"],{"47e6":function(t,e,a){},"76ba":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"button-row"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addData()}}},[t._v("添加")]),e("el-button",{on:{click:function(e){return t.updateData()}}},[t._v("修改")]),e("el-button",{attrs:{type:"danger"},on:{click:t.removeSome}},[t._v("删除")])],1),e("div",{staticClass:"search-row"},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[e("el-form-item",[e("el-input",{attrs:{placeholder:"组织名称",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchSome()}},model:{value:t.searchMsg.name,callback:function(e){t.$set(t.searchMsg,"name",e)},expression:"searchMsg.name"}})],1),e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.searchSome()}}},[t._v("查询")])],1)],1),e("div",{staticClass:"table-row"},[e("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"row-key":t.getRowKey,data:t.list,"tooltip-effect":"dark",border:!0},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55",align:"center","reserve-selection":!0}}),e("el-table-column",{attrs:{type:"index",index:t.indexAdd,label:"序号",width:"160"}}),e("el-table-column",{attrs:{prop:"department",label:"组织名",width:"width"}}),e("el-table-column",{attrs:{prop:"sum",label:"总人数",width:"width"}})],1),e("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"current-page":t.page,"page-sizes":[3,5,8],"page-size":t.limit,layout:"  prev, pager, next, jumper,->,sizes,total",total:this.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1),e("el-dialog",{attrs:{title:"添加信息",visible:t.dialogFormVisible,width:"80%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{staticStyle:{width:"100%"},attrs:{inline:!0},model:{value:t.addForm,callback:function(e){t.addForm=e},expression:"addForm"}},[e("el-form-item",{attrs:{label:"组织类型:","label-width":"120px"}},[e("el-select",{attrs:{autocomplete:"off",placeholder:"请选择学院部门"},model:{value:t.addForm.type,callback:function(e){t.$set(t.addForm,"type",e)},expression:"addForm.type"}},[e("el-option",{attrs:{value:"department",label:"基层统战"}}),e("el-option",{attrs:{value:"party",label:"民主党派"}}),e("el-option",{attrs:{value:"otherParty",label:"群团组织"}}),e("el-option",{attrs:{value:"category",label:"参政议政"}})],1)],1),e("el-form-item",{attrs:{label:"组织名称:","label-width":"120px"}},[e("el-input",{attrs:{autocomplete:"off",placeholder:"请填入组织名称"},model:{value:t.addForm.orgName,callback:function(e){t.$set(t.addForm,"orgName",e)},expression:"addForm.orgName"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){return t.dialogVisible()}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addDetermine()}}},[t._v("确 定")])],1)],1),e("el-dialog",{attrs:{title:"修改信息",visible:t.alterFormVisible,width:"80%"},on:{"update:visible":function(e){t.alterFormVisible=e}}},[e("el-form",{staticStyle:{width:"100%"},attrs:{inline:!0},model:{value:t.updataForm,callback:function(e){t.updataForm=e},expression:"updataForm"}},[e("el-form-item",{attrs:{label:"组织类型:","label-width":"120px"}},[e("el-select",{attrs:{autocomplete:"off",placeholder:"请选择学院部门"},model:{value:t.updataForm.type,callback:function(e){t.$set(t.updataForm,"type",e)},expression:"updataForm.type"}},[e("el-option",{attrs:{value:"department",label:"基层统战"}}),e("el-option",{attrs:{value:"party",label:"民主党派"}}),e("el-option",{attrs:{value:"otherParty",label:"群团组织"}}),e("el-option",{attrs:{value:"category",label:"参政议政"}})],1)],1),e("el-form-item",{attrs:{label:"组织名称:","label-width":"120px"}},[e("el-input",{attrs:{autocomplete:"off",placeholder:"请填入组织名称"},model:{value:t.updataForm.orgName,callback:function(e){t.$set(t.updataForm,"orgName",e)},expression:"updataForm.orgName"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){return t.alertVisible()}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.updataDetermine()}}},[t._v("确 定")])],1)],1)],1)},s=[],l=a("bc3a"),o=a.n(l),r=(a("852e"),{name:"orgManagement",data(){return{multipleSelection:[],page:1,limit:5,total:0,searchMsg:{name:""},list:[],removeMsg:[],dialogFormVisible:!1,alterFormVisible:!1,addForm:{type:"",orgName:""},updataForm:{type:"",orgName:""}}},methods:{indexAdd(t){return t+1+(this.page-1)*this.limit},getRowKey(t){return t.id},async getPageList(){const{page:t,limit:e}=this;o.a.get(`http://175.178.83.49:9109/Organization/ZuZhi/queryAll/${t}/${e}`).then(t=>{this.list=t.data.data.info,this.total=t.data.data.total,console.log(this.list)})},handleCurrentChange(t){this.page=t,""==this.searchMsg.name?this.getPageList():this.searchSome()},handleSizeChange:function(t){this.limit=t,this.page=1,""==this.searchMsg.name?this.getPageList():this.searchSome()},addData(){this.dialogFormVisible=!0},addDetermine(){if(this.addForm.type&&this.addForm.orgName){if("department"==this.addForm.type){var t=this.addForm.orgName;o.a.post("http://175.178.83.49:9109/Organization/ZuZhi/Department/insert",{department:t}).then(t=>{this.getPageList(),this.$message({message:"基层统战修改成功！！",type:"success"})}),this.dialogVisible()}else if("party"==this.addForm.type){var e=this.addForm.orgName;o.a.post("http://175.178.83.49:9109/Organization/ZuZhi/Party/insert",{party:e}).then(t=>{this.getPageList(),this.$message({message:"民主党派修改成功！！",type:"success"})}),this.dialogVisible()}else if("otherParty"==this.addForm.type){var a=this.addForm.orgName;o.a.post("http://175.178.83.49:9109/Organization/ZuZhi/PartyOther/insert",{otherParty:a}).then(t=>{this.getPageList(),this.$message({message:"群团组织修改成功！！",type:"success"})}),this.dialogVisible()}else if("category"==this.addForm.type){var i=this.addForm.orgName;o.a.post("http://175.178.83.49:9109/Organization/ZuZhi/Political/insert",{category:i}).then(t=>{this.getPageList(),this.$message({message:"参政议政添加成功！！",type:"success"})}),this.dialogVisible()}}else alert("请输入完整信息")},dialogVisible(){this.dialogFormVisible=!1,this.addForm={type:"",orgName:""}},updateData(){0===this.multipleSelection.length?alert("请勾选修改的内容"):1===this.multipleSelection.length?(this.alterFormVisible=!0,this.updataForm={type:"",orgName:this.multipleSelection[0].title}):this.multipleSelection.length>1&&alert("至多修改一个组织的信息")},updataDetermine(){if(this.updataForm.type&&this.updataForm.orgName){if("department"==this.updataForm.type){var t=this.updataForm.orgName,e=this.multipleSelection[0].id;o.a.post("http://175.178.83.49:9109/Organization/ZuZhi/Department/update",{id:e,department:t}).then(t=>{this.getPageList(),this.$message({message:"基层统战修改成功！！！",type:"success"})}),this.alertVisible()}else if("party"==this.updataForm.type){var a=this.updataForm.orgName;e=this.multipleSelection[0].id;o.a.post("http://175.178.83.49:9109/Organization/ZuZhi/Party/update",{party:a,id:e}).then(t=>{this.getPageList(),this.$message({message:"民主党派修改成功！！",type:"success"})}),this.alertVisible()}else if("otherParty"==this.updataForm.type){var i=this.updataForm.orgName;e=this.multipleSelection[0].id;o.a.post("http://175.178.83.49:9109/Organization/ZuZhi/PartyOther/update",{otherParty:i,id:e}).then(t=>{this.getPageList(),this.$message({message:"群团组织修改成功！！",type:"success"})}),this.alertVisible()}else if("category"==this.updataForm.type){var s=this.updataForm.orgName;e=this.multipleSelection[0].id;o.a.post("http://175.178.83.49:9109/Organization/ZuZhi/Political/update",{category:s,id:e}).then(t=>{this.getPageList(),this.$message({message:"参政议政修改成功！！",type:"success"})}),this.alertVisible()}}else alert("请输入完整信息")},alertVisible(){this.alterFormVisible=!1,this.updataForm={type:"",orgName:""}},handleSelectionChange(t){this.multipleSelection=t,console.log(this.multipleSelection)},searchSome(){const{page:t,limit:e}=this;o.a.get(`http://175.178.83.49:9109/Organization/ZuZhi/queryZuZhiMoHu/${this.searchMsg.name}/${t}/${e}`).then(t=>{console.log(t),this.total=t.data.data.total,this.list=t.data.data.info})},removeSome(){for(let e=0;e<this.multipleSelection.length;e++){var t=this.multipleSelection[e].id;o.a.post("http://175.178.83.49:9109/Organization/ZuZhi/Department/delete",{id:t}).then(t=>{this.getPageList()}),o.a.post("http://175.178.83.49:9109/Organization/ZuZhi/Party/delete",{id:t}).then(t=>{this.getPageList()}),o.a.post("http://175.178.83.49:9109/Organization/ZuZhi/PartyOthers/delete",{id:t}).then(t=>{this.getPageList()}),o.a.post("http://175.178.83.49:9109/Organization/ZuZhi/Political/delete",{id:t}).then(t=>{this.getPageList()})}}},mounted(){this.getPageList()}}),n=r,h=(a("fa39"),a("2877")),d=Object(h["a"])(n,i,s,!1,null,null,null);e["default"]=d.exports},fa39:function(t,e,a){"use strict";a("47e6")}}]);