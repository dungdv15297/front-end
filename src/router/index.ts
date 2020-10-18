import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '@/views/login/Login.vue';
import Register from '@/views/register/Register.vue';

// New template here
import MainView from '@/views/pihomee/MainView.vue';
import Homepage from '@/views/pihomee/homepage/Homepage.vue';
import Personal from '@/views/pihomee/personal/Personal.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: MainView,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Homepage
      },
      {
        path: '/personal',
        component: Personal
      }
    ]
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
