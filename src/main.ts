import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/i18n/index';
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
