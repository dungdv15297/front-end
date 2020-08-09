<template>
  <b-icon :icon="icon" :scale="scale" :variant="variant"></b-icon>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseHelper from "@/base/BaseHelper.vue";

@Component
export default class Icons extends BaseHelper {
  @Prop()
  icon!: string;
  @Prop()
  scale!: string;
  @Prop()
  variant!: string;
}
</script>

<style scoped>
</style>
