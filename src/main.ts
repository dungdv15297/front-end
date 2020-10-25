import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/i18n/index';
import momen from 'vue-moment';
import * as VueGoogleMaps from 'vue2-google-maps';
import { BootstrapVue, IconsPlugin, BootstrapVueIcons, ImagePlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(ImagePlugin);
Vue.use(momen);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAUdNy3yIM8nZXqD7GAJsKZYR2UVNu_0QQ',
    libraries: 'places',
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
