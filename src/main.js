import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入初始样式
import './assets/css/base.css'

// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 导入router规则js
import router from './router/'

// 导入vuex
import store from './store/'


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

// 添加axios请求拦截器
axios.interceptors.request.use(function (config) {
  // 判断是否为登录的请求
  if (config.url.indexOf('authorizations') != -1) {

    // 如果是登录，直接发这个请求就行了
    return config;
  }
  let userInfo;
  // 判断userInfo是否为空或非json格式,是的话打回登录
  try {
    userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    if (userInfo == null) {
      Vue.prototype.$message.error("请先登录!");
      router.push('/login');
      return;
    }
  } catch (error) {
    Vue.prototype.$message.error("请先登录!");
    router.push('/login');
    return;
  }
  // 否的话添加token发送请求
  config.headers.Authorization = `Bearer ${userInfo.token}`
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加axios响应拦截
axios.interceptors.response.use(function (response) {
  // 在发送请求之前做些什么
  return response;
}, function (error) {
  // 对请求错误做些什么
  // window.console.dir(error);
  if (error.response.status == 401) {
    Vue.prototype.$message.error("请先登录!");
    router.push("/login");
    return;
  }
  return Promise.reject(error);
});


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
