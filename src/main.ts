import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import { languages, defaultLocale } from '@/text-resource/index';

Vue.use(VueI18n)
Vue.config.productionTip = false;

const messages = Object.assign(languages);
const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'vn',
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
