import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MainView from '@/views/MainView.vue';
import Signin from '@/views/Signin.vue';
import Error from '@/views/Error.vue';

Vue.use(VueRouter);

  const routes: Array<RouteConfig> = [
  {
    path: '/main-view',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
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
