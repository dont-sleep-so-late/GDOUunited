import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import axios from 'axios'
import qs from 'qs'
import autofit from 'autofit.js'


import './assets/global.css'
import '@/styles/index.scss'

//富文本编辑器以及相关样式
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor) //此方法内会用Vue.component注册quillEditor组件

import '@/permission' // permission control
import { hasBtnPermission } from './utils/permission' // button permission
import { getToken } from '@/utils/auth' //获取请求头

//ElementUI按需引入
import './plugins/element.js'


//配置请求格式
// 配置请求头
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
}
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers['Authorization'] = getToken()
    }
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

import API from '@/api'

// main.js 引入echarts方式如下
import * as echarts from 'echarts'

Vue.prototype.$axios = axios
Vue.prototype.$API = API
Vue.prototype.$echarts = echarts
Vue.prototype.hasPerm = hasBtnPermission

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
