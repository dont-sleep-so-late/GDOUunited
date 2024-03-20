<template>
  <div class="content">
    <Navbar />
    <AppMain />
  </div>
</template>
<script>
import autofit from 'autofit.js';
import AppMain from './AppMain.vue';
import Navbar from './Navbar.vue';


export default {
  components: { Navbar, AppMain },
  name: 'AppMainIndex',
  mounted() {
    autofit.init()
  },
  beforeUnmount() {
    autofit.off()
  },

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.content {
  background: url(../../assets/img/IndexImg/13.gif) no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  zoom: 1.25;
}
</style>