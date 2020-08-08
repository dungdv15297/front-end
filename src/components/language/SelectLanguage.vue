<template>
  <div class="lang-position">
    <div class="flex">{{ $t('language.lang') }}</div>
    <b-form-select @change="onChangeLang" v-model="selected" size="sm">
      <b-form-select-option value="vn"> {{ $t('language.vn') }} </b-form-select-option>
      <b-form-select-option value="en"> {{ $t('language.en') }} </b-form-select-option>
    </b-form-select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseHelper from "@/base/BaseHelper.vue";

@Component
export default class SelectLanguage extends BaseHelper {
  selected: string = '';

  created() {
    this.selected = this.$store.getters['locale'];
  }

  get vn(): string {
    return this.$t('language.vn').toString();
  }

  get en(): string {
    return this.$t('language.en').toString();
  }

  onChangeLang() {
    if (this.selected === "en" || this.selected === "vn") {
      this.$store.dispatch('changeLocale', this.selected);
    }
    this.$i18n.locale = this.$store.getters['locale']
  }
}
</script>

<style scoped>
.lang-position {
  position: fixed;
  right: 100px;
  bottom: 60px;
  width: 150px;
  font-weight: bold;
  display: inline-block;
}
.flex {
  display: flex;
}
</style>
