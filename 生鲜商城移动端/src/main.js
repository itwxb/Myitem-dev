import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import './plugins/vant.js'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
