import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import home from '../views/home/'
import login from '../views/login/'

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/home', component: home },
        { path: '/login', component: login },
    ]
})

export default router