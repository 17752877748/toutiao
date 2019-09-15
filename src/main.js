import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入初始样式
import './assets/css/base.css'

// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


// 把axios注册为全局的
import JSONbig from "json-bigint";
import axios from "axios";
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/'
Vue.prototype.$axios = axios;

axios.defaults.transformResponse = [
  function (data) {
    // 我尝试把响应体当JSON转成JS对象，能转就返回了，不能转会报错（报错它会立即进入到catch）
    try {
      // 如果你能按JSON转换成对象，那么就转
      return JSONbig.parse(data);
    } catch (error) {
      // 如果不能就原样返回
      return data;
    }
  }
];


import router from './router/'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
