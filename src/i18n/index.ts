import store from '@/store';
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en.json';
import vn from './vn.json';

Vue.use(VueI18n)

const messages = {
  en: en,
  vn: vn
}

const i18n = new VueI18n({
  locale: store.getters['locale'],
  messages,
  fallbackLocale: 'vn',
})

export default i18n 