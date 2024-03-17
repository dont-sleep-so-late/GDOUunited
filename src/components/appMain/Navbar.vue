<template>
  <div class="head">
    <div class="logo">
      <img src="../../assets/img/logo.png" alt="">
    </div>
    <div class="title">
      <img src="../../assets/img/bigSummary/海大统战云白字.png" alt="">
    </div>
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
/* 顶部 */
.logo {
  position: relative;
  left: 70px;
  top: 15px;
  width: 100px;
  height: 100px;

}

.logo img {
  width: 70px;
  height: 70px;
}

.title {
  position: relative;
  right: 420px;
  bottom: 75px;
  width: 255px;
  height: 55px;

}

.title img {
  width: 255px;
  height: 55px;
}

.uesrinfo {
  position: relative;
  left: 1095px;
  bottom: 120px;
  width: 300px;
  height: 24px;
}

.notice {
  position: relative;
  left: 1225px;
  bottom: 143px;
  width: 100px;
  height: 24px;
  cursor: pointer;
}

.help {
  position: relative;
  left: 1305px;
  bottom: 145px;
  width: 100px;
  height: 24px;
  cursor: pointer;
}


.exit {
  position: relative;
  left: 1420px;
  bottom: 169px;
  width: 68px;
  height: 24px;
  cursor: pointer;
}

.help img,
.notice img,
.exit img,
.uesrinfo img {
  position: absolute;
  bottom: 3px;
  width: 24px;
  height: 24px;
}

.help p,
.notice p,
.exit p,
.uesrinfo p {
  position: absolute;
  left: 35px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>