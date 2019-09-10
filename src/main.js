import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入初始样式
import './assets/css/base.css'

// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import router from './router/'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
