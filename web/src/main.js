// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import less from 'less';
import axios from 'axios';

import App from './App';
import router from './router';

import { getToken } from "@/utils/auth";

require('./mock');

Vue.prototype.$axios = axios;

Vue.use(less)
Vue.config.productionTip = false;
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (getToken()) { //判断本地是否存在access_token
      next();
    } else {
      next({
        path: '/login'
      })
    }
  }
  else {
    next();
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if (to.fullPath == "/login") {
    if (getToken()) {
      next({
        path: from.fullPath
      });
    } else {
      next();
    }
  }
});