(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e46febec"],{"021e":function(e,t,i){"use strict";i("8ea8")},"8ea8":function(e,t,i){},fbc4:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("h2",{staticStyle:{"text-align":"center"}},[e._v("添加成员")]),t("h4",{staticStyle:{"margin-top":"10px"}},[e._v("必填选项")]),t("div",{staticClass:"pleft1 ptop1rem i1"},[t("el-form",[t("div",{staticClass:"headBox"},[t("span",[e._v("头像")]),t("div",{staticClass:"add"},[e._v("+")])]),t("div",{staticClass:"user-header"},[t("input",{staticClass:"header-upload-btn user-header-com",attrs:{type:"file",accept:"image/*"},on:{change:e.onchangeImgFun}}),t("img",{staticClass:"user-header-com",attrs:{alt:"",src:e.imgStr}})])])],1),t("div",{staticClass:"pleft1 ptop1rem i1"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[t("el-form-item",{attrs:{prop:"must"}},[t("el-input",{attrs:{placeholder:e.input_item[0].inputinfo,clearable:""},on:{input:function(t){return e.updateView(t,e.index)}},model:{value:e.input_item[0].input1,callback:function(t){e.$set(e.input_item[0],"input1",t)},expression:"input_item[0].input1"}},[t("template",{slot:"prepend"},[e._v(e._s(e.input_item[0].inputname))])],2)],1),t("el-form-item",{attrs:{prop:"must"}},[t("el-input",{attrs:{placeholder:e.input_item[5].inputinfo,clearable:""},on:{input:function(t){return e.updateView(t,e.index)}},model:{value:e.input_item[5].input1,callback:function(t){e.$set(e.input_item[5],"input1",t)},expression:"input_item[5].input1"}},[t("template",{slot:"prepend"},[e._v(e._s(e.input_item[5].inputname))])],2)],1),t("el-form-item",[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[1].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[1].selectinfo,clearable:""},model:{value:e.select_item[1].id,callback:function(t){e.$set(e.select_item[1],"id",t)},expression:"select_item[1].id"}},e._l(e.select_item[1].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("el-form-item",[t("div",{staticClass:"dateBox s1"},[t("span",[e._v(e._s(e.date_item[0].datename))]),t("el-date-picker",{attrs:{type:"month",format:"yyyy 年 MM 月","value-format":"yyyy-MM",placeholder:"请选择年-月"},model:{value:e.date_item[0].value,callback:function(t){e.$set(e.date_item[0],"value",t)},expression:"date_item[0].value"}})],1)]),t("el-form-item",[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[3].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[3].selectinfo,clearable:""},model:{value:e.select_item[3].id,callback:function(t){e.$set(e.select_item[3],"id",t)},expression:"select_item[3].id"}},e._l(e.select_item[3].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("el-form-item",[t("div",{staticClass:"dateBox s1"},[t("span",[e._v(e._s(e.date_item[2].datename))]),t("el-date-picker",{attrs:{type:"month",format:"yyyy 年 MM 月","value-format":"yyyy-MM",placeholder:"请选择年-月"},model:{value:e.date_item[2].value,callback:function(t){e.$set(e.date_item[2],"value",t)},expression:"date_item[2].value"}})],1)]),t("el-form-item",{attrs:{prop:"must"}},[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[7].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[7].selectinfo,clearable:""},model:{value:e.select_item[7].id,callback:function(t){e.$set(e.select_item[7],"id",t)},expression:"select_item[7].id"}},e._l(e.select_item[7].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("el-form-item",[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[10].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[10].selectinfo,clearable:""},model:{value:e.select_item[10].id,callback:function(t){e.$set(e.select_item[10],"id",t)},expression:"select_item[10].id"}},e._l(e.select_item[10].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("el-form-item",[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[4].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[4].selectinfo,clearable:""},model:{value:e.select_item[4].id,callback:function(t){e.$set(e.select_item[4],"id",t)},expression:"select_item[4].id"}},e._l(e.select_item[4].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("el-form-item",[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[8].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[8].selectinfo,clearable:""},model:{value:e.select_item[8].id,callback:function(t){e.$set(e.select_item[8],"id",t)},expression:"select_item[8].id"}},e._l(e.select_item[8].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("el-form-item",[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[9].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[9].selectinfo,clearable:""},model:{value:e.select_item[9].id,callback:function(t){e.$set(e.select_item[9],"id",t)},expression:"select_item[9].id"}},e._l(e.select_item[9].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("el-form-item",{attrs:{prop:"must"}},[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[15].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[15].selectinfo,clearable:""},model:{value:e.select_item[15].id,callback:function(t){e.$set(e.select_item[15],"id",t)},expression:"select_item[15].id"}},e._l(e.select_item[15].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("el-form-item",{attrs:{prop:"must"}},[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[17].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[17].selectinfo,clearable:""},model:{value:e.select_item[17].id,callback:function(t){e.$set(e.select_item[17],"id",t)},expression:"select_item[17].id"}},e._l(e.select_item[17].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("el-form-item",{attrs:{prop:"must"}},[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[2].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[2].selectinfo,clearable:""},model:{value:e.select_item[2].id,callback:function(t){e.$set(e.select_item[2],"id",t)},expression:"select_item[2].id"}},e._l(e.select_item[2].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("el-form-item",{attrs:{prop:"must"}},[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[11].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[11].selectinfo,clearable:""},model:{value:e.select_item[11].id,callback:function(t){e.$set(e.select_item[11],"id",t)},expression:"select_item[11].id"}},e._l(e.select_item[11].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("el-form-item",{attrs:{prop:"must"}},[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[6].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[6].selectinfo,clearable:""},model:{value:e.select_item[6].id,callback:function(t){e.$set(e.select_item[6],"id",t)},expression:"select_item[6].id"}},e._l(e.select_item[6].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("el-form-item",{attrs:{prop:"must"}},[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[13].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[13].selectinfo,clearable:""},model:{value:e.select_item[13].id,callback:function(t){e.$set(e.select_item[13],"id",t)},expression:"select_item[13].id"}},e._l(e.select_item[13].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("el-form-item",{attrs:{prop:"must"}},[t("el-input",{attrs:{placeholder:e.input_item[1].inputinfo,clearable:""},on:{input:function(t){return e.updateView(t,e.index)}},model:{value:e.input_item[1].input1,callback:function(t){e.$set(e.input_item[1],"input1",t)},expression:"input_item[1].input1"}},[t("template",{slot:"prepend"},[e._v(e._s(e.input_item[1].inputname))])],2)],1),t("el-form-item",{attrs:{prop:"must"}},[t("div",{staticClass:"rodBox s1"},[t("span",[e._v(e._s(e.input_item[8].inputname))]),t("el-input",{staticStyle:{width:"1074px","margin-left":"7rem"},attrs:{type:"textarea",clearable:"",placeholder:e.input_item[8].inputinfo},on:{input:function(t){return e.updateView(t,e.index)}},model:{value:e.input_item[8].input1,callback:function(t){e.$set(e.input_item[8],"input1",t)},expression:"input_item[8].input1"}})],1)]),t("el-form-item",{attrs:{prop:"must"}},[t("div",{staticClass:"rodBox s1"},[t("span",[e._v(e._s(e.input_item[9].inputname))]),t("el-input",{staticStyle:{width:"1074px","margin-left":"7rem"},attrs:{type:"textarea",clearable:"",placeholder:e.input_item[9].inputinfo},on:{input:function(t){return e.updateView(t,e.index)}},model:{value:e.input_item[9].input1,callback:function(t){e.$set(e.input_item[9],"input1",t)},expression:"input_item[9].input1"}})],1)]),t("el-form-item",{attrs:{prop:"must"}},[t("div",{staticClass:"rodBox s1"},[t("span",[e._v(e._s(e.input_item[10].inputname))]),t("el-input",{staticStyle:{width:"1074px","margin-left":"7rem"},attrs:{type:"textarea",clearable:"",placeholder:e.input_item[10].inputinfo},on:{input:function(t){return e.updateView(t,e.index)}},model:{value:e.input_item[10].input1,callback:function(t){e.$set(e.input_item[10],"input1",t)},expression:"input_item[10].input1"}})],1)])],1)],1),t("h4",{staticStyle:{"margin-top":"10px"}},[e._v("选填选项")]),t("div",{staticClass:"pleft1 ptop1rem i1"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[t("el-form-item",{attrs:{prop:"must"}},[t("el-input",{attrs:{placeholder:e.input_item[4].inputinfo,clearable:""},on:{input:function(t){return e.updateView(t,e.index)}},model:{value:e.input_item[4].input1,callback:function(t){e.$set(e.input_item[4],"input1",t)},expression:"input_item[4].input1"}},[t("template",{slot:"prepend"},[e._v(e._s(e.input_item[4].inputname))])],2)],1),t("el-form-item",{attrs:{prop:"must"}},[t("el-input",{attrs:{placeholder:e.input_item[7].inputinfo,clearable:""},on:{input:function(t){return e.updateView(t,e.index)}},model:{value:e.input_item[7].input1,callback:function(t){e.$set(e.input_item[7],"input1",t)},expression:"input_item[7].input1"}},[t("template",{slot:"prepend"},[e._v(e._s(e.input_item[7].inputname))])],2)],1),t("el-form-item",[t("div",{staticClass:"selectBox s1"},[t("span",[e._v(e._s(e.select_item[0].selectname))]),t("el-select",{attrs:{placeholder:e.select_item[0].selectinfo,clearable:""},model:{value:e.select_item[0].id,callback:function(t){e.$set(e.select_item[0],"id",t)},expression:"select_item[0].id"}},e._l(e.select_item[0].sel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)])],1)],1),t("div",{staticClass:"foot-button pleft1 clear"},[t("el-button",{attrs:{type:"primary"},on:{click:e.saveData}},[e._v("保存")])],1)])},s=[],l=(i("14d9"),i("bc3a"),{name:"AdPeopleDetail",data(){return{imgStr:null,errorSrt:"",file:"1",imageUrl:"",selectData:[],nationData:[],nationDataAxis:[],fulltimedegreeData:[],fulltimedegreeDataAxis:[],areaData:[],areaDataAxis:[],religionData:[],religionDataAxis:[],departmentData:[],departmentDataAxis:[],currentPositionData:[],currentPositionDataAxis:[],titleData:[],titleDataAxis:[],partyData:[],partyDataAxis:[],otherPartyData:[],otherPartyDataAxis:[],politicalPosition:[],politicalPositionAxis:[],politicalArrangement:[],politicalArrangementAxis:[],jobLevel:[],jobLevelAxis:[],identity:[],identityAxis:[],committee:[],committeeAxis:[],campus:[],campusAxis:[],bachelor:[],bachelorAxis:[],abroadTime:[],abroadTimeAxis:[],sendData:{positionAxis:"",activeAxis:"",awardAxis:"",name:"",sex:"",imgUrl:"",phone:"",job:"",departmentId:"",currentPositionId:"",religionId:"",currentJob:"",allParty:"",nationId:"",birth:"",nativePlace:"",fulltimedegreeId:"",titleId:"",startWorkingDate:"",stateOfRetire:"",joinPartyDate:"",remark:"",currentZhiTime:"",currentJiTime:"",idCard:"",partyId:"",otherPartyId:"",position:"",areaId:"",politicalPositionId:"",jobLevelId:"",organizationId:"",committeeId:"",campusId:"",bachelorId:"",politicalArrangementId:"",positionRod:"",activityRod:"",awardRod:"",politicsId:"",photo:""},date_item:[{id:1,dateid:2,datename:"出生日期",value:""},{id:2,dateid:2,datename:"参加工作",value:""},{id:3,dateid:3,datename:"加入时间",value:""}],input_item:[{id:1,inputname:"姓名",inputinfo:"请输入成员姓名",input1:""},{id:2,inputname:"手机号码",inputinfo:"请输入成员手机号码",input1:""},{id:3,inputname:"电子邮箱",inputinfo:"请输入成员电子邮箱",input1:""},{id:4,inputname:"身份证",inputinfo:"请输入身份证号",input1:""},{id:5,inputname:"籍贯",inputinfo:"请输入省市",input1:""},{id:6,inputname:"性别",inputinfo:"请输入男或女",input1:""},{id:7,inputname:"学位",inputinfo:"请输入成员学位",input1:""},{id:8,inputname:"职务",inputinfo:"请输入成员职务",input1:""},{id:9,inputname:"任职轴",inputinfo:"请输入成员任职内容",input1:""},{id:10,inputname:"活动轴",inputinfo:"请输入成员活动内容",input1:""},{id:11,inputname:"获奖轴",inputinfo:"请输入成员获奖内容",input1:""}],select_item:[{id:"",subid:1,selectname:"职位级别",selectinfo:"请选择",sel:[]},{id:"",subid:2,selectname:"民族",selectinfo:"请选择",sel:[]},{id:"",subid:3,selectname:"非民主党派",selectinfo:"请选择",sel:[]},{id:"",subid:3,selectname:"政治面貌",selectinfo:"请选择",sel:[]},{id:"",subid:1,selectname:"职称",selectinfo:"请选择",sel:[]},{id:"",subid:1,selectname:"退休",selectinfo:"请选择",sel:[{value:0,label:"否"},{value:1,label:"是"}]},{id:"",subid:4,selectname:"区域",selectinfo:"请选择",sel:[]},{id:"",selectname:"学位",selectinfo:"请选择",sel:[]},{id:"",subid:4,selectname:"学院/部门",selectinfo:"请选择",sel:[]},{id:"",subid:6,selectname:"教职工类别",selectinfo:"请选择",sel:[]},{id:"",subid:6,selectname:"全日制学历",selectinfo:"请选择",sel:[]},{id:"",subid:4,selectname:"政治安排",selectinfo:"请选择",sel:[]},{id:"",subid:5,selectname:"留学情况",selectinfo:"请选择",sel:[{value:1,label:"留学"},{value:0,label:"未留学"}]},{id:"",subid:5,selectname:"组织身份",selectinfo:"请选择",sel:[]},{id:"",subid:6,selectname:"委员会",selectinfo:"请选择",sel:[]},{id:"",selectname:"校区",selectinfo:"请选择",sel:[]},{id:"",selectname:"留学时间",selectinfo:"请选择",sel:[]},{id:"",subid:3,selectname:"民主党派",selectinfo:"请选择",sel:[]}],rules:{index:[{required:!0,message:"请选择活动资源",trigger:"blur"}]}}},computed:{},watch:{},created(){this.getSelectData()},methods:{async getSelectData(){let{data:e}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryAllNations");e.t.map(e=>{this.nationData=JSON.parse(JSON.stringify(e).replace("nationId","value").replace("nation","label")),this.nationDataAxis.push(this.nationData)}),this.select_item[1].sel=this.nationDataAxis;let{data:t}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryPolitics");t.t.map(e=>{this.politicalPosition=JSON.parse(JSON.stringify(e).replace("politicsId","value").replace("politics","label")),this.politicalPositionAxis.push(this.politicalPosition)}),this.select_item[3].sel=this.politicalPositionAxis;let{data:i}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryBachelor");i.t.map(e=>{this.bachelor=JSON.parse(JSON.stringify(e).replace("bachelorId","value").replace("bachelor","label")),this.bachelorAxis.push(this.bachelor)}),this.select_item[7].sel=this.bachelorAxis;let{data:a}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryAllFullTimeDegree");a.t.map(e=>{this.fulltimedegreeData=JSON.parse(JSON.stringify(e).replace("fulltimedegreeId","value").replace("fulltimedegree","label")),this.fulltimedegreeDataAxis.push(this.fulltimedegreeData)}),this.select_item[10].sel=this.fulltimedegreeDataAxis;let{data:s}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryAllTitle");s.t.map(e=>{this.titleData=JSON.parse(JSON.stringify(e).replace("titleId","value").replace("title","label")),this.titleDataAxis.push(this.titleData)}),this.select_item[4].sel=this.titleDataAxis;let{data:l}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryAllCampuses");l.t.map(e=>{this.campus=JSON.parse(JSON.stringify(e).replace("campusId","value").replace("campus","label")),this.campusAxis.push(this.campus)}),this.select_item[15].sel=this.campusAxis;let{data:n}=await this.$axios.post("http://175.178.83.49:9106/service/party/queryAllParty");n.t.map(e=>{this.partyData=JSON.parse(JSON.stringify(e).replace("partyId","value").replace("party","label")),this.partyDataAxis.push(this.partyData)}),this.select_item[17].sel=this.partyDataAxis;let{data:c}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryAllPartyOthers");c.t.map(e=>{this.otherPartyData=JSON.parse(JSON.stringify(e).replace("pid","value").replace("otherParty","label")),this.otherPartyDataAxis.push(this.otherPartyData)}),this.select_item[2].sel=this.otherPartyDataAxis;let{data:r}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryAllPolitical");r.t.map(e=>{this.politicalArrangement=JSON.parse(JSON.stringify(e).replace("politicalPositionId","value").replace("position","label")),this.politicalArrangementAxis.push(this.politicalArrangement)}),this.select_item[11].sel=this.politicalArrangementAxis;let{data:o}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryAllAreas");o.t.map(e=>{this.areaData=JSON.parse(JSON.stringify(e).replace("areaId","value").replace("area","label")),this.areaDataAxis.push(this.areaData)}),this.select_item[6].sel=this.areaDataAxis;let{data:p}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryAllOrganizationIdentity");p.t.map(e=>{this.identity=JSON.parse(JSON.stringify(e).replace("oidentity","label").replace("oid","value")),this.identityAxis.push(this.identity)}),this.select_item[13].sel=this.identityAxis;let{data:u}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryAllDept");u.t.map(e=>{this.departmentData=JSON.parse(JSON.stringify(e).replace("departmentId","value").replace("department","label")),this.departmentDataAxis.push(this.departmentData)}),this.select_item[8].sel=this.departmentDataAxis;let{data:m}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryAllJobLevel");m.t.map(e=>{this.jobLevel=JSON.parse(JSON.stringify(e).replace("jobLevelId","value").replace("jobLevel","label")),this.jobLevelAxis.push(this.jobLevel)}),this.select_item[0].sel=this.jobLevelAxis;let{data:d}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryAllCurrentPosition");d.t.map(e=>{this.currentPositionData=JSON.parse(JSON.stringify(e).replace("currentPositionId","value").replace("currentPosition","label")),this.currentPositionDataAxis.push(this.currentPositionData)}),this.select_item[9].sel=this.currentPositionDataAxis;let{data:h}=await this.$axios.post("http://175.178.83.49:9106/service/renwuku/queryAbroadTime");h.t.map(e=>{this.abroadTime=JSON.parse(JSON.stringify(e).replace("abroadTimeId","value").replace("time","label")),this.abroadTimeAxis.push(this.abroadTime)}),this.select_item[16].sel=this.abroadTimeAxis},onchangeImgFun(e){console.log(e.target.files[0]),this.imgStr=window.URL.createObjectURL(e.target.files[0]),console.log(window.URL.createObjectURL(e.target.files[0])),this.file=e.target.files[0],console.log(this.file)},updateView(e,t){this.$forceUpdate()},prev(){this.$router.back()},empty(){this.myInput.input2="";for(let e=0;e<this.input_item.length;e++)this.input_item[e].input1="";for(let e=0;e<this.select_item.length;e++)this.select_item[e].id=e+1},saveData(){""===this.select_item[2].id||""===this.select_item[17].id?(this.sendData.name=this.input_item[0].input1,this.sendData.phone=this.input_item[1].input1,this.sendData.nativePlace=this.input_item[4].input1,this.sendData.sex=this.input_item[5].input1,this.sendData.job=this.input_item[7].input1,this.sendData.birth=this.date_item[0].value,this.sendData.joinPartyDate=this.date_item[2].value,this.sendData.jobLevelId=this.select_item[0].id,this.sendData.nationId=this.select_item[1].id,this.sendData.otherPartyId=this.select_item[2].id,this.sendData.politicsId=this.select_item[3].id,this.sendData.titleId=this.select_item[4].id,this.sendData.areaId=this.select_item[6].id,this.sendData.bachelorId=this.select_item[7].id,this.sendData.departmentId=this.select_item[8].id,this.sendData.currentPositionId=this.select_item[9].id,this.sendData.fulltimedegreeId=this.select_item[10].id,this.sendData.politicalPositionId=this.select_item[11].id,this.sendData.organizationId=this.select_item[13].id,this.sendData.campusId=this.select_item[15].id,this.sendData.partyId=this.select_item[17].id,this.sendData.photo=this.file,this.sendData.positionAxis=this.input_item[8].inputname,this.sendData.activeAxis=this.input_item[9].inputname,this.sendData.awardAxis=this.input_item[10].inputname,this.$axios.post("http://175.178.83.49:9106/service/renwuku/addPeople",this.sendData,{headers:{"content-type":"multipart/form-data"}}).then(e=>{console.log(e),console.log(e.t),console.log(e.data),console.log(this.file),alert("添加成功！"),console.log(this.file)}).catch(e=>{console.log("请求失败",e)})):alert("民主党派和非民主党派不可以同时填写")}}}),n=l,c=(i("021e"),i("2877")),r=Object(c["a"])(n,a,s,!1,null,"27d572aa",null);t["default"]=r.exports}}]);