(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81b90622"],{"0d73":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"button-row"},[e("el-button",{on:{click:function(e){return t.updatedata()}}},[t._v("修改")]),e("el-button",{attrs:{type:"danger"},on:{click:t.removeSome}},[t._v("删除")])],1),e("div",{staticClass:"search-row"},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[e("el-form-item",[e("el-input",{attrs:{placeholder:"成员名",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchSome()}},model:{value:t.searchMsg.name,callback:function(e){t.$set(t.searchMsg,"name",e)},expression:"searchMsg.name"}})],1),e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.searchSome()}}},[t._v("查询")])],1)],1),e("div",{staticClass:"table-row"},[e("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"row-key":t.getRowKey,data:t.list,"tooltip-effect":"dark",border:!0},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55",align:"center","reserve-selection":!0}}),e("el-table-column",{attrs:{type:"index",index:t.indexAdd,label:"序号",width:"160"}}),e("el-table-column",{attrs:{prop:"department",label:"学院单位",width:"180"}}),e("el-table-column",{attrs:{prop:"name",label:"主要负责人",width:"180"}}),e("el-table-column",{attrs:{prop:"phone",label:"联系方式",width:"200"}}),e("el-table-column",{attrs:{prop:"nativePlace",label:"地址",width:"200"}}),e("el-table-column",{attrs:{prop:"o_identity",label:"所属组织身份",width:"width"}}),e("el-table-column",{attrs:{prop:"joinPartyDate",label:"参加党派时间",width:"width"}})],1),e("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"current-page":t.page,"page-sizes":[3,5,8],"page-size":t.limit,layout:"  prev, pager, next, jumper,->,sizes,total",total:this.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1),e("el-dialog",{attrs:{title:"修改信息",visible:t.dialogFormVisible,width:"80%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{staticStyle:{width:"100%"},attrs:{inline:!0},model:{value:t.modifyForm,callback:function(e){t.modifyForm=e},expression:"modifyForm"}},[e("el-form-item",{attrs:{label:"党派类型:","label-width":"120px"}},[e("el-select",{attrs:{autocomplete:"off",placeholder:"请选择党派类型"},model:{value:t.modifyForm.partyId,callback:function(e){t.$set(t.modifyForm,"partyId",e)},expression:"modifyForm.partyId"}},t._l(t.dangpai,(function(t){return e("el-option",{key:t.meta.id,attrs:{value:t.meta.id,label:t.meta.title}})})),1)],1),e("el-form-item",{attrs:{label:"学院部门:","label-width":"120px"}},[e("el-select",{attrs:{autocomplete:"off",placeholder:"请选择学院部门"},model:{value:t.modifyForm.departmentId,callback:function(e){t.$set(t.modifyForm,"departmentId",e)},expression:"modifyForm.departmentId"}},[t._l(t.xueyuan,(function(t){return e("el-option",{key:t.meta.id,attrs:{value:t.meta.id,label:t.meta.title}})})),t._l(t.zuzhi,(function(t){return e("el-option",{key:t.meta.id,attrs:{value:t.meta.id,label:t.meta.title}})}))],2)],1),e("el-form-item",{attrs:{label:"组织身份:","label-width":"120px"}},[e("el-select",{attrs:{autocomplete:"off",placeholder:"请选择党派类型"},model:{value:t.modifyForm.organizationId,callback:function(e){t.$set(t.modifyForm,"organizationId",e)},expression:"modifyForm.organizationId"}},[e("el-option",{attrs:{value:"6948307500875666111",label:"管理员"}}),e("el-option",{attrs:{value:"6948307500875666112",label:"普通成员"}})],1)],1),e("el-form-item",{attrs:{label:"主要负责人:","label-width":"120px"}},[e("el-input",{attrs:{autocomplete:"off",placeholder:"请填入姓名"},model:{value:t.modifyForm.name,callback:function(e){t.$set(t.modifyForm,"name",e)},expression:"modifyForm.name"}})],1),e("el-form-item",{attrs:{label:"联系方式:","label-width":"120px"}},[e("el-input",{attrs:{autocomplete:"off",placeholder:"请填写手机号"},model:{value:t.modifyForm.phone,callback:function(e){t.$set(t.modifyForm,"phone",e)},expression:"modifyForm.phone"}})],1),e("el-form-item",{attrs:{label:"地址:","label-width":"120px"}},[e("el-input",{attrs:{autocomplete:"off",placeholder:"请填写常住地址"},model:{value:t.modifyForm.nativePlace,callback:function(e){t.$set(t.modifyForm,"nativePlace",e)},expression:"modifyForm.nativePlace"}})],1),e("el-form-item",{attrs:{label:"参加党派时间:","label-width":"120px"}},[e("el-date-picker",{attrs:{type:"month",placeholder:"选择年月","value-format":"yyyy-MM"},model:{value:t.modifyForm.joinPartyDate,callback:function(e){t.$set(t.modifyForm,"joinPartyDate",e)},expression:"modifyForm.joinPartyDate"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){return t.dialogVisible()}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addData(t.modifyForm)}}},[t._v("确 定")])],1)],1)],1)},o=[],l=(a("14d9"),a("bc3a")),n=a.n(l),r=a("635d"),s={name:"Minzhudangpai",data(){return{multipleSelection:[],party:localStorage.getItem("party"),page:1,limit:5,total:0,searchMsg:{name:""},list:[],removeMsg:[],dialogFormVisible:!1,modifyForm:{partyId:"",name:"",phone:"",nativePlace:"",joinPartyDate:"",departmentId:"",organizationId:""},xueyuan:[],dangpai:[],zuzhi:[]}},methods:{indexAdd(t){return t+1+(this.page-1)*this.limit},getRowKey(t){return t.id},getMenuList(){Object(r["callAllMenu"])().then(t=>{let e=t;this.xueyuan=e.res1.data.router.children,this.dangpai=e.res2.data.router.children,this.zuzhi=e.res3.data.router.children})},async getPageList(){const{party:t,page:e,limit:a}=this;n.a.get(`http://175.178.83.49:9109/Organization/RenWu/Party/${t}/${e}/${a}`).then(t=>{this.list=t.data.data.info,this.total=t.data.data.total})},handleCurrentChange(t){this.page=t,""==this.searchMsg.name?this.getPageList():this.searchSome()},handleSizeChange:function(t){this.limit=t,this.page=1,""==this.searchMsg.name?this.getPageList():this.searchSome()},updatedata(){0===this.multipleSelection.length?alert("请勾选修改的内容"):1===this.multipleSelection.length?(this.getMenuList(),this.dialogFormVisible=!0,this.modifyForm={partyId:"",name:this.multipleSelection[0].name,phone:this.multipleSelection[0].phone,nativePlace:this.multipleSelection[0].nativePlace,joinPartyDate:this.multipleSelection[0].joinPartyDate,departmentId:"",organizationId:""}):this.multipleSelection.length>1&&alert("至多修改一为成员信息")},dialogVisible(){this.dialogFormVisible=!1,this.modifyForm={partyId:"",name:"",phone:"",nativePlace:"",joinPartyDate:"",departmentId:"",organizationId:""}},addData(){if(this.modifyForm.partyId&&this.modifyForm.name.trim()&&this.modifyForm.phone&&this.modifyForm.nativePlace.trim()&&this.modifyForm.joinPartyDate&&this.modifyForm.departmentId&&this.modifyForm.organizationId){var t=this.multipleSelection[0].id,e=this.modifyForm.name,a=this.modifyForm.phone,i=this.modifyForm.nativePlace,o=this.modifyForm.joinPartyDate,l=this.modifyForm.departmentId,r=this.modifyForm.organizationId,s=this.modifyForm.partyId;n.a.post("http://175.178.83.49:9109/Organization/RenWu/update",{id:t,name:e,phone:a,nativePlace:i,joinPartyDate:o,departmentId:l,organizationId:r,partyId:s}).then(t=>{this.getPageList(),this.$message({message:"用户信息修改成功！！！",type:"success"})}),this.dialogVisible()}else alert("请输入完整信息")},searchSome(){const{party:t,page:e,limit:a}=this;n.a.get(`http://175.178.83.49:9109/Organization/RenWu/Party/${t}/${this.searchMsg.name}/${e}/${a}`).then(t=>{this.total=t.data.data.total,this.list=t.data.data.info})},handleSelectionChange(t){this.multipleSelection=t},removeSome(){for(let t=0;t<this.multipleSelection.length;t++)this.removeMsg.push(this.multipleSelection[t].id),n.a.get("http://175.178.83.49:9109/Organization/RenWu/delete/"+this.removeMsg[t]).then(t=>{this.getPageList(),this.$message({message:"用户删除成功！！！",type:"success"})})}},mounted(){this.getPageList()},created(){this.department=localStorage.getItem("party")}},m=s,d=(a("28c4"),a("2877")),c=Object(d["a"])(m,i,o,!1,null,null,null);e["default"]=c.exports},"28c4":function(t,e,a){"use strict";a("60d7")},"60d7":function(t,e,a){}}]);