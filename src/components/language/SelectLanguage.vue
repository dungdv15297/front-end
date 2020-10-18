<template>
  <div class="lang-position">
    <b-form-select @change="onChangeLang" v-model="selected" size="sm">
      <b-form-select-option value="vn"> {{ $t('language.vn') }} </b-form-select-option>
      <b-form-select-option value="en"> {{ $t('language.en') }} </b-form-select-option>
    </b-form-select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SelectLanguage extends Vue {
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
  width: 100px;
  display: inline-block;
}
.flex {
  display: flex;
}
</style>
