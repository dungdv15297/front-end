<template>
  <div>
    <b-nav class="header">
      <b-nav-item class="brand"> {{ $t('system.name') }} </b-nav-item>
      <b-nav-item>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseHelper from "@/base/BaseHelper.vue";

@Component
export default class PageFooter extends BaseHelper {}
</script>

<style scoped>
.header {
  background-color: #ffcd39;
  border: 1px solid;
}
</style>
