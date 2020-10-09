import Vue from 'vue';
import VueRouter, { RouteConfig, Route } from 'vue-router';
import MainView from '@/views/MainView.vue';
import Login from '@/views/login/Login.vue';
import Error from '@/views/Error.vue';
import HomePage from '@/views/homePage/HomePage.vue';
import Register from '@/views/register/Register.vue';
import PersonalInfor from '@/views/personalInfor/PersonalInfor.vue';
import BaseHelper from '@/base/BaseHelper.vue';
import { dialogTypes } from '@/base/enum/dialog-types';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/main-view',
    name: 'MainView',
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      const isManaged = localStorage.getItem('isManaged');
      if (!!token && isManaged) {
        next();
      }

      next({
        name: 'Error',
        params: {
          code: 'ERR101',
          mess: 'ERR101'
        }
      });
    },
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
    props: true,
    component: Error
  },
  {
    path: '/personal',
    name: 'Personal',
    component: PersonalInfor
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: HomePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'MainView') {
    const token = localStorage.getItem('token');
    const isManaged = localStorage.getItem('isManaged');
    if (token === null) {
      const helper: BaseHelper = new BaseHelper();
      (helper as any).openDialog(dialogTypes.WARNING, 'ERR100');
      return;
    } else if (isManaged === null || !isManaged) {
      const helper: BaseHelper = new BaseHelper();
      (helper as any).openDialog(dialogTypes.WARNING, 'ERR101');
      return
    }
  }
  next();
})

export default router
