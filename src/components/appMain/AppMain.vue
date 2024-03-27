<template>
  <div class="main">
    <div class="nav">
      <!-- 路由跳转 -->
      <button v-if="this.buttonList.descion" @click="showDescion" class="descion"></button>
      <button v-if="this.buttonList.workplace" @click="showWorkPlace" class="workplace"></button>
      <button v-if="this.buttonList.offerAdvice" @click="showOfferAdvice" class="offerAdvice"></button>
      <button v-if="this.buttonList.organizationDatabase" @click="showSecurity" class="security"></button>
      <button v-if="this.buttonList.personDatabase" @click="showOrganizationDatabase"
        class="organizationDatabase"></button>
      <button v-if="this.buttonList.personDatabase" @click="showPersonDatabase" class="personDatabase"></button>
      <button v-if="this.buttonList.detailDatabase" @click="showDetailDatabase" class="detailDatabase"></button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppMain",
  data() {
    return {
      buttons: [],
      buttonList: {
        descion: false,
        workplace: false,
        offerAdvice: false,
        security: false,
        organizationDatabase: false,
        personDatabase: false,
        detailDatabase: false,
      }
    }
  },
  computed: {
    ...mapGetters(["addRoutes"]),
  },
  async created() {
    const { data } = await this.$store.dispatch('GetInfo')
    const menus = data.menus
    const username = data.username
    await this.$store.dispatch('permission/generateRoutes',
      { menus, resources, username });
  },
  mounted() {
    this.buttons = this.$store.getters.buttons
    this.showButton()
  },
  methods: {
    ...mapActions(["permission/generateRoutes"]),
    showButton() {
      this.buttons.forEach(item => {
        if (item.name == "/metadata") this.buttonList.descion = true
        else if (item.name == "ums") this.buttonList.workplace = true
        else if (item.name == "/offerAdvice") this.buttonList.offerAdvice = true
        else if (item.name == "/workplace") this.buttonList.security = true
        else if (item.name == "/organization") this.buttonList.organizationDatabase = true
        else if (item.name == "/teacher") this.buttonList.personDatabase = true
        else if (item.name == "/filedata") this.buttonList.detailDatabase = true
      });
      console.log(this.buttonList);
    },
    showDescion() {
      var i = 0
      //2024/3/13改动 只判断是否为超级管理
      for (i = 0; i < this.buttons.length; i++) {
        if (this.buttons[i].name === "/metadata") {
          this.$router.push(this.buttons[i].name);
          break;
        }
        else if (i === this.buttons.length - 1) {
          this.$alert('对不起，您没有进入决策中心的权限', {
            confirmButtonText: '确定',
          });
        }
      }

    },
    showWorkPlace() {
      var i = 0
      for (i = 0; i < this.buttons.length; i++) {
        if (this.buttons[i].name === "ums") {
          this.$router.push({ path: '/ums' });
          break;
        }
        else if (i === this.buttons.length - 1) {
          this.$alert('对不起，您没有进入业务工作平台的权限', {
            confirmButtonText: '确定',
          });
        }
      }
    },
    showOfferAdvice() {
      // var i = 0
      // for (i = 0; i < this.buttons.length; i++) {
      //   if (this.buttons[i].name === "/offerAdvice") {
      //     this.$router.push({ path: '/ums' });
      //     break;
      //   }
      //   else if (i === this.buttons.length - 1) {
      //     this.$alert('对不起，您没有进入建言平台的权限', {
      //       confirmButtonText: '确定',
      //     });
      //   }
      // }
    },
    showSecurity() {
      var i = 0
      for (i = 0; i < this.buttons.length; i++) {
        if (this.buttons[i].name === "/workplace") {
          this.$router.push({ path: '/security' });
          break;
        }
        else if (i === this.buttons.length - 1) {
          this.$alert('对不起，您没有进入业务工作平台的权限', {
            confirmButtonText: '确定',
          });
        }
      }
    },
    showPersonDatabase() {
      var i = 0
      for (i = 0; i < this.buttons.length; i++) {
        if (this.buttons[i].name === "/teacher") {
          this.$router.push(this.buttons[i].name);
          break;
        }
        else if (i === this.buttons.length - 1) {
          this.$alert('对不起，您没有进入人物库的权限', {
            confirmButtonText: '确定',
          });
        }
      }
    },
    showOrganizationDatabase() {
      var i = 0
      for (i = 0; i < this.buttons.length; i++) {
        if (this.buttons[i].name === "/organization") {
          this.$router.push(this.buttons[i].name);
          break;
        }
        else if (i === this.buttons.length - 1) {
          this.$alert('对不起，您没有进入组织库的权限', {
            confirmButtonText: '确定',
          });
        }
      }
    },
    showDetailDatabase() {
      var i = 0
      for (i = 0; i < this.buttons.length; i++) {
        if (this.buttons[i].name === "/filedata") {
          this.$router.push(this.buttons[i].name);
          break;
        }
        else if (i === this.buttons.length - 1) {
          this.$alert('对不起，您没有进入资料库的权限', {
            confirmButtonText: '确定',
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.main {
  /* position: relative;
  bottom: 120px;
  left: 495px;
  width: 545px;
  height: 550px; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 左侧样式 */

.nav {
  width: 600px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20;
}

.descion {
  width: 400px;
  height: 140px;
  background-image: url("../../assets/img/bigSummary/统战决策中心.png");
  background-size: 100% 140px;
  border-radius: 20px;
  cursor: pointer;
}

.workplace {
  width: 220px;
  height: 140px;
  background-image: url("../../assets/img/bigSummary/分组\ 10.png");
  background-size: 101% 140px;
  border-radius: 20px;
  cursor: pointer;
}

.offerAdvice {
  width: 265px;
  height: 140px;
  background-image: url("../../assets/img/bigSummary/分组\ 11.png");
  background-size: 100% 140px;
  border-radius: 20px;
  cursor: pointer;
}

.security {
  width: 450px;
  height: 140px;
  background-image: url("../../assets/img/bigSummary/保密检测系统2.jpg");
  background-size: 100% 156px;
  background-position-y: center;
  border-radius: 20px;
  cursor: pointer;
}

.organizationDatabase {
  width: 169px;
  height: 140px;
  background-image: url("../../assets/img/bigSummary/组织库.png");
  background-size: 100% 140px;

  border-radius: 20px;
  cursor: pointer;
}

.personDatabase {
  width: 169px;
  height: 140px;
  background-image: url("../../assets/img/bigSummary/人物库.png");
  background-size: 100% 140px;
  border-radius: 20px;
  cursor: pointer;
}

.detailDatabase {
  width: 169px;
  height: 140px;
  background-image: url("../../assets/img/bigSummary/资料库.png");
  background-size: 100% 140px;
  border-radius: 20px;
  cursor: pointer;
}
</style>