import Vue from 'vue'
import App from './App.vue'
//
import router from './router'
import axios from 'axios'
import './directive/make-red.js'
import Http from './service/http'

Vue.use(axios)

Vue.config.productionTip = false
// 把http挂载到vue实例上 ,全部页面都可用
Vue.prototype.$Http = Http
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
