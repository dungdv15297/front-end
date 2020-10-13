import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MainView from '@/views/mainview/MainView.vue';
import Login from '@/views/login/Login.vue';
import Error from '@/views/Error.vue';
import Register from '@/views/register/Register.vue';
import PersonalInfor from '@/views/personalInfor/PersonalInfor.vue';
import ForgotPass from '@/views/forgot/ForgotPass.vue';
import Views from '@/views/normal-main-view/Views.vue';
import SearchPage from '@/views/normal-main-view/search-page/SearchPage.vue';
import HomePage from '@/views/normal-main-view/home-page/HomePage.vue';
import { component } from 'vue/types/umd';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/manager',
    name: 'manager',
    component: MainView
  },
  {
    path: '/login',
    name: 'Login',
    children: [
      {
        path: '/login?*',
        component: Login
      },
      {
        path: '/login/*',
        component: Login
      }
    ],
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
    path: '/forgot',
    name: 'ForgotPass',
    component: ForgotPass
  },
  {
    path: '/',
    name: 'Views',
    component: Views,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: HomePage
      },
      {
        path: '/search',
        component: SearchPage,
        props: route => ({
          type: route.query.type,
          district: route.query.district,
          province: route.query.province,
          street: route.query.street,
          pr: route.query.pr,
          sr: route.query.sr
        })
      }
    ]
  },
  {
    path: '/*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  // If go to MainView page, check the condition
  if (to.name === 'MainView') {
    // If do not have a token in storage, redirect to Error page with ERR100
    if (token === null) {
      next({
        name: 'Error',
        params: {
          code: 'ERR100',
          mess: 'ERR100'
        }
      });
    }
  } else if (to.fullPath === '/login' || to.fullPath === '/redirect') {
    next({
      path: to.fullPath,
      query: { from: btoa(from.path) }
    });
  } else {
    next();
  }
})

export default router
