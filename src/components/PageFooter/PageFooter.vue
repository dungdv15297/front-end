<template>
  <b-container class="bv-example-row footer">
    <b-row>
      <b-col> {{ $t('pageFooter.created') }} </b-col>
      <b-col class="align-center"> {{ $t('pageFooter.design') }} </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseHelper from "@/base/BaseHelper.vue";

@Component
export default class PageFooter extends BaseHelper {
  
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0px;
  max-width: 100vw;
  font-weight: bold;
  border: 1px solid;
  padding: 10px 10px 10px 10px;
  background-color: #ffe598;
  text-align: left;
  font-size: x-small;
}
.align-center {
  text-align: center;
}
</style>
