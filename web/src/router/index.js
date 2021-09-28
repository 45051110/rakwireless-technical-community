import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Home from '@/views/home/index';
import Login from '@/views/login/index';
import Register from '@/views/register/index';
import Search from '@/views/search/index';
import PostCenter from '@/views/postCenter/index';
import EditPost from '@/views/editPost/index';
import Download from '@/views/download/index';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/postCenter',
      name: 'PostCenter',
      component: PostCenter,
    },
    {
      path: '/editPost',
      name: 'EditPost',
      component: EditPost,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/download',
      name: 'Download',
      component: Download,
    },
  ],
});
