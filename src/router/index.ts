import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ForSign from '@/views/ForSign.vue';
import ListComp from '@/base/list-components';

Vue.use(VueRouter);

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'ForSign',
    component: ForSign
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
