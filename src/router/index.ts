import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '@/views/login/Login.vue';
import Register from '@/views/register/Register.vue';

// New template here
import MainView from '@/views/pihomee/MainView.vue';
import Homepage from '@/views/pihomee/homepage/Homepage.vue';
import Contact from '@/views/pihomee/contact/Contact.vue';
import About from '@/views/pihomee/about/About.vue';
import Admin from '@/views/admin/Admin.vue';
import SearchPage from '@/views/pihomee/searchpage/SearchPage.vue';
import DetailsRoom from '@/views/pihomee/details-room/DetailsRoom.vue';

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
        path: '/room',
        component: SearchPage
      },
      {
        path: '/contact',
        component: Contact
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/details-room',
        component: DetailsRoom
      }
    ]
  },
  {
    path: '/personal',
    component: Admin,
    props: { mode: 1 }
  },
  {
    path: '/room-manager',
    component: Admin,
    props: { mode: 2 }
  },
  {
    path: '/room-add',
    component: Admin,
    props: { mode: 3 }
  },
  {
    path: '/manager/master-table',
    component: Admin,
    props: { mode: 4 }
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
