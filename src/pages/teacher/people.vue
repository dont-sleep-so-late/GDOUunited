<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div class="header_logo">
        <img src="../../assets/img/LoginImg/logo.png" alt="">
        <span>海大云统战</span>
      </div>
      <div class="header_right">
        <div class="userinfo">
          <img src="../../assets/img/bigSummary/用户-圆.png" alt="">
          <p>当前用户:{{ user }}</p>
        </div>
        <div class="help">
          <img src="../../assets/img/bigSummary/空心问号.png" alt="">
          <p>用户指南</p>
        </div>
        <div class="exit" @click="logout">
          <img src="../../assets/img/bigSummary/退出.png" alt="">
          <p>退出</p>
        </div>
      </div>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||人物库</div>
        <!-- 侧边栏菜单区域 -->
        <!-- router表示以每个菜单的index作为路由进行跳转 -->
        <el-menu background-color="#282b34" text-color="#fff" active-text-color="#409EFF" unique-opened
          :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath">
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>成员管理</span>
            </template>
            <el-menu-item-group>
              <!-- @click="saveNavState('/'+index)"" -->
              <!-- <el-menu-item index="2-1" >统战人物（校级）</el-menu-item>
                   -->
              <el-menu-item index="2-3">统战人物（教职工）</el-menu-item>
              <el-menu-item index="2-4">添加成员(教职工)</el-menu-item>
              <!-- <el-menu-item index="2-6">统战人物(学生)</el-menu-item>
              <el-menu-item index="2-5">添加成员(学生)</el-menu-item> -->

            </el-menu-item-group>
          </el-submenu>
          <!-- <el-menu-item index="ahjs" >
                  <i class="el-icon-menu"></i>
                  <span slot="title">综合查询</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">统计分析</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-setting"></i>
                  <span slot="title">信息采集</span>
                </el-menu-item> -->
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import list from "./list.vue"
import { mapGetters, mapActions } from "vuex";

import autofit from 'autofit.js';
export default {
  name: "people",
  components: {

  },
  beforeMount(){
        autofit.off();
  },
  methods: {
    logout() {
      // window.sessionStorage.clear()
      this.$router.push('/appMainIndex')
    },
    //是否折叠左侧菜单
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    //保存菜单链接的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      console.log(activePath);
    },
    //获取左侧表单数据
    getMenuList() {
      console.log(1);
    },
    //退出
    logout() {
      // window.sessionStorage.clear();
      this.$router.push('/appMainIndex');
    },
    getRole() {
      const debounce = (() => {
        let timer = null //接受定时器
        return (callback, time = 800) => {
          timer && clearTimeout(timer);
          timer = setTimeout(callback, time);
        };
      })();
      debounce(() => {
        this.user = this.$store.getters.roles[0]
      }, 500);
    }
  },
  mounted() {
    this.getRole()
  },
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  data() {
    return {
      //是否折叠
      isCollapse: false,
      //被激活的链接地址
      activePath: '',
      //权限人员
      user: '加载中...'
    }
  }
}
</script>

<style scoped>
.home-container {
  height: 100%;
}

.template {
  height: 100%;
}

.el-header {
  background-color: #385a97;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-aside {
  height: auto;
  background-color: #2e313c;
}

.el-main {
  height: auto;
  background-color: #fff;
}

.el-menu {
  border-right: none;
}

.header_logo {
  color: #fff;
  font-size: 20px;
  display: flex;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
}

.header_logo img {
  width: 40px;
  margin-right: 12px;
}

.header_right {
  color: #fff;
}

.toggle-button {
  background-color: #87878f;
  font-size: 14px;
  line-height: 28px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}

.header_right {
  display: flex;
}

.header_right .userinfo {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.header_right .userinfo img {
  margin-right: 8px;
  width: 24px;
  height: 24px;
}

.header_right .help {
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
}

.header_right .help img {
  margin-right: 8px;
  width: 24px;
  height: 24px;
}

.header_right .exit {
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
}

.header_right .exit img {
  margin-right: 8px;
  width: 24px;
  height: 24px;
}
</style>