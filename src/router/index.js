import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import home from '../views/home/'
import login from '../views/login/'
import article from '../views/home/article/'
import publish from '../views/home/publish/'
import comments from '../views/home/comments/'
import account from '../views/home/account/'
import media from '../views/home/media/'

// 导入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'



const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        {
            path: '/home', component: home, children: [
                { path: '/article', component: article },
                { path: '/comments', component: comments },
                { path: '/account', component: account },
                { path: '/media', component: media },
                { path: '/publish', component: publish },
                { path: '/edit/:id', component: publish, name: 'edit' }
            ]
        },
        { path: '/login', component: login },
    ]
})

// 导航前置守卫,判断是否已登录
router.beforeEach((to, from, next) => {
    NProgress.start();
    // if (to.path != '/login') {
    //     let userdata = window.localStorage.getItem('userInfo');
    //     if (userdata) {
    //         next();
    //     } else {
    //         Vue.prototype.$message.error('请先登录!');
    //         router.push('/login');
    //     }
    // } else {
    //     next();
    // }
    next();
})
// 导航后置守卫
router.afterEach((to, from) => {
    NProgress.done();
})

export default router