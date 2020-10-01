import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MainView from '@/views/MainView.vue';
import Login from '@/views/login/Login.vue';
import Error from '@/views/Error.vue';
import Register from '@/views/register/Register.vue';

Vue.use(VueRouter);

  const routes: Array<RouteConfig> = [
  {
    path: '/main-view',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/404',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
