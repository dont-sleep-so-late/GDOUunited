<template>
  <div class="head">
   <div class="left">
    <div class="logo">
      <img src="../../assets/img/logo.png" alt="">
    </div>
    <div class="tit">
      <img src="../../assets/img/bigSummary/海大统战云白字.png" alt="">
    </div>
   </div>
   <div class="right">
    <div class="uesrinfo">
      <img src="../../assets/img/bigSummary/用户-圆.png" alt="">
      <p>当前用户：{{ user }}</p>
    </div>
    <!-- <div class="notice">
        <img src="../../assets/img/bigSummary/空心问号.png" alt="">
        <p>通知</p>
      </div> -->
    <div class="help">
      <img src="../../assets/img/bigSummary/空心问号.png" alt="">
      <p>用户指南</p>
    </div>
    <div class="exit" @click="logout">
      <img src="../../assets/img/bigSummary/退出.png" alt="">
      <p>退出</p>
    </div>
   </div>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  computed: {

  },
  data() {
    return {
      user: '加载中...'
    }
  },
  mounted() {
    this.getRole()
  },
  methods: {
    logout() {
      // this.$store.dispatch('LogOut')
      this.$store.commit('clearRoutes', '')
      window.sessionStorage.clear();
      this.$router.push('/login');
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
  }
}
</script>



<style scoped>
.head{
  width: 100%;
}
.left{
  float: left;
  margin-left: 50px;
}
.right{
  float: right;
  margin-right: 50px;
  display: flex;
}
/* 顶部 */
.logo {
  float: left;
  width: 70px;
  height: 100px;
  line-height: 100px;

}

.logo img {
  width: 70px;
  height: 70px;
}

.tit {
  float: left;
  width: 255px;
  height: 70px;
  line-height: 100px;
}

.tit img {
  width: 255px;
  height: 55px;
}

.uesrinfo {
  width: 200px;
  height: 24px;
  line-height: 100px;
}

/* .notice {
  width: 100px;
  height: 24px;
  cursor: pointer;
} */

.help {
  width: 100px;
  height: 24px;
  cursor: pointer;
  line-height: 100px;
}


.exit {
  width: 68px;
  height: 24px;
  cursor: pointer;
  line-height: 100px;
}

.help img,
.notice img,
.exit img,
.uesrinfo img {
  width: 24px;
  height: 24px;
  float: left;
  margin-top: 38px
}

.help p,
.notice p,
.exit p,
.uesrinfo p {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>