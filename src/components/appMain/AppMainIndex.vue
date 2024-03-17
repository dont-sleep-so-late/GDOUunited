<template>
  <div class="content" :style="`zoom:${zoom}`">
    <Navbar />
    <AppMain />
  </div>
</template>

<script>
import AppMain from './AppMain.vue'
import Navbar from './Navbar.vue'

export default {
  components: { Navbar, AppMain },
  name: 'AppMainIndex',
  data() {
    return {
      zoom: '1'
    }
  },
  beforeMount() {
    this.setZoom()
  },
  methods: {
    setZoom() {
      if (window.innerWidth >= 1920) {
        this.zoom = 1.25;
      } else
        this.zoom = 1;
    }
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
  background-position: 0 0;
  height: 100%;
}
</style>