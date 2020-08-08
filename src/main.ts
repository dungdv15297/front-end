import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import { languages } from '@/i18n/index';
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(VueI18n);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

const messages = Object.assign(languages);
const i18n = new VueI18n({
  locale: store.getters['locale'],
  fallbackLocale: 'vn',
  messages
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
