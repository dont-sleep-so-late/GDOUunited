<template>
      <div class="mainbox content">
     <ul
     style="height: 661.6px;padding: 0 15px;">
     <li class="box element" v-for="item in representType" :key="item.id" style="overflow: scroll;">
        <div class="box titelName">{{item.value}}(总数:{{ item.sum }})</div>
        <div class="person" v-for="item1 in representive" :key="item1.name" v-show="item1.position==item.value"><img :src="item1.imgUrl" alt=""><div class="personName">{{ item1.name }}</div></div>
    </li>
    </ul>
      </div>
  </template>
  
  <script>
  import { post} from 'http';
  import axios from 'axios';
  
  export default {
    name: "twoRepresent",
    data() {
      return {
        representType:[{
              id:0,
              value:'全国人大代表',
              sum:'1'
                      },{
              id:1,
              value:'省政协委员',
              sum:'3'

                      },{
              id:2,
              value:'市人大代表',
              sum:'2'

                      },{
              id:3,
              value:'市政协委员',
              sum:'6'

        }],
        representive:[]
      }
    },
    methods: {
        getUserInfo() {
      // 在这里发起 Axios 请求获取用户信息
      this.$axios.get('http://localhost:9106/service/renwuku/getRepresentative')
        .then(response => {
      this.representive=response.data.t;
      console.log(this.representive);

        })
        .catch(error => {
          console.error('获取用户信息失败：', error);
        });
    }
    
    },
  
    mounted(){
        this.getUserInfo()
    }
  };
  </script >
  
  <style scoped>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
  }
  
  *,
  body {
    padding: 0px;
    margin: 0px;
    font-family: "微软雅黑";
    color: #fff;
  }
  
  body {
    color: #fff;
    font-size: 16px;
    background-size: 100% 200%;
  }
  
  html,
  body {
    height: 100%;
  }
  
  li {
    list-style-type: none;
  }
  
  i {
    margin: 0px;
    padding: 0px;
    text-indent: 0px;
  }
  
  img {
    border: none;
    max-width: 100%;
  }
  
  a {
    text-decoration: none;
    color: #fff;
  }
  
  a.active,
  a:focus {
    outline: none !important;
    text-decoration: none;
  }
  
  ol,
  ul,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0
  }
  
  a:hover {
    color: #06c;
    text-decoration: none !important
  }
  
  .clearfix:after,
  .clearfix:before {
    display: table;
    content: " "
  }
  
  .clearfix:after {
    clear: both
  }
  
  .pulll_left {
    float: left;
  }
  
  .pulll_right {
    float: right;
  }
  
  i {
    font-style: normal;
  }
  
  .text-w {
    color: #ffe400
  }
  
  .text-d {
    color: #ff6316
  }
  
  .text-s {
    color: #14e144
  }
  
  .text-b {
    color: #07e5ff
  }
  
  .mainbox {
    padding: 0px 10px;
    padding-bottom: 100px;
  }
  
  .nav1 {
    margin-left: -6px;
    margin-right: -6px;
  }
  
  .nav1>li {
    padding: 0 6px;
    float: left;
  }
  
  .box {
    border: 1px solid rgba(7, 118, 181, 0.5);
    box-shadow: inset 0 0 10px rgba(7, 118, 181, 0.4);
    margin-bottom: 12px;
    position: relative;
  }
  
  .minibox {
    margin-bottom: 6px;
    position: relative;
  }
  
  .color1 {
    border: 1px solid rgba(159, 213, 9, 0.5);
    box-shadow: inset 0 0 10px rgba(159, 213, 9, 0.4);
    background-color: rgba(159, 213, 9, 0.25);
  }
  
  .color2 {
    border: 1px solid rgba(9, 213, 189, 0.5);
    box-shadow: inset 0 0 10px rgba(9, 213, 189, 0.4);
    background-color: rgba(9, 213, 189, 0.25);
  }
  
  .color3 {
    border: 1px solid rgba(227, 61, 185, 0.5);
    box-shadow: inset 0 0 10px rgba(227, 61, 185, 0.4);
    background-color: rgba(227, 61, 185, 0.25);
  }
  
  .color4 {
    border: 1px solid rgba(9, 213, 40, 0.5);
    box-shadow: inset 0 0 10px rgba(9, 213, 40, 0.4);
    background-color: rgba(9, 213, 40, 0.25);
  }
  
  .color5 {
    border: 1px solid rgba(7, 118, 181, 0.5);
    box-shadow: inset 0 0 10px rgba(7, 118, 181, 0.4);
    background-color: rgba(7, 118, 181, 0.3);
  }
  
  .tit {
    padding: 10px 10px 10px 25px;
    border-bottom: 1px solid rgba(7, 118, 181, 0.7);
    font-size: 16px;
    font-weight: 500;
    position: relative;
  }
  
  .tit:before {
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    background: rgba(22, 214, 255, 0.9);
    box-shadow: 0 0 5px rgba(22, 214, 255, 0.9);
    border-radius: 10px;
    left: 10px;
    top: 18px;
  }
  
  .tit:after,
  .box:before {
    width: 100%;
    height: 1px;
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    background: linear-gradient(to right, #076ead, #4ba6e0, #076ead);
    box-shadow: 0 0 5px rgba(131, 189, 227, 1);
    opacity: 0.6;
  }
  
  .box:before {
    top: -1px;
  }
  
  .boxnav {
    padding: 10px;
  }
  
  .mapc {
    background: url(../assets/img/bg3.png) no-repeat center center;
    background-size: 100% 100%;
  }
  
  .map {
    position: relative;
    height: 100%;
  }
  
  .content {
    /* background: url(../assets/img/地图界面.gif) no-repeat center center; */
    background: url(../assets/img/地图界面.png) no-repeat center center;
  
    background-size: cover
  }
  .content ul {
    display: flex;
  }
  .content ul li {
    width: 22%;
    margin: 0% 1%;
  }
  /*---------------------------------------------------------------*/
  /*element-ui 样式加了scoped后要用深度选择器>>>、/deep/或::v-deep才能生效 */
  ::v-deep .el-input {
    margin-top: 5px;
  }
  
  ::v-deep .el-input__inner {
    background-color: transparent !important;
    color: white !important;
    border: 1px solid rgba(9, 128, 213, 0.5) !important;
    box-shadow: inset 0 0 20px rgba(9, 128, 213, 0.4);
  }
  
  ::v-deep .el-button{
    background-color: transparent !important;
    border: 1px solid rgba(9, 128, 213, 0.5) !important;
    box-shadow: inset 0 0 20px rgba(9, 128, 213, 0.4);
    margin-top: 5px;
    height: 40px;
    width: 40px;
    margin-left: 2%;
  }
  
  ::v-deep .scrollbar-wrapper {
    max-height: 500px;
  }
  
  ::v-deep .el-scrollbar-wrap {
    overflow-x: hidden;
  }
  
  ::v-deep .el-submenu__title span,
  ::v-deep .el-submenu__title i {
    color: white;
  }
  
  ::v-deep .el-menu {
    background-color: transparent !important;
  }
  
  ::v-deep .el-menu li {
    color: white;
  }
  
  ::v-deep .el-submenu__title:hover,
  ::v-deep .el-menu-item:hover {
    background-color: #626f8b69 !important;
  }
  
  ::v-deep .el-menu-item:active,
  ::v-deep .el-menu-item:focus {
    background-color: #626f8b69 !important;
  }
  
  .el-divider--horizontal {
    margin: 24px 0;
  }
  
  .personInformation {
    display: inline-block;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 2%;
    width: 90%;
    height: 20%;
  }
  
  .person {
    float: left;
    margin-right: 70px;
  }
  
  .information {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
  }
  
  .information li {
    display: inline-block;
    width: 33%;
    height: 33%;
  }
  
  .block {
    display: flex;
    justify-content: space-between;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 2%;
    width: 90%;
    height: 10%;
  }
  
  .block li {
    width: 25%;
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  
  
  .track {
    height: 66%;
  }
  
  .el-divider--horizontal{
       margin: 8px 0;
       background: 0 0;
       border-top: 1px solid #e8eaec;
   } 
  
  .appointment,
  .activity,
  .award{
    margin-top: 1%;
    height: 30%;
  }
  
  .track .middlebox {
    height: 60%;
  }
.titelName {
    width: 102%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: larger;
    margin: 0;
}
.person img {
width: 30%;
margin: 0 35%;
height: 120px;
}
.person {
    width: 100%;
    border-bottom: 1px solid rgba(7, 118, 181, 0.7);
    padding: 10px 0;
    
}
.personName {
    width: 50%;
margin: 0 25%;
text-align: center;
}
.element {
overflow: scroll;
}

.element::-webkit-scrollbar {
width: 0.5em;
background-color: transparent;
}

.element::-webkit-scrollbar-thumb {
background-color: transparent;
}
  </style>