<template>
  <dd class="pis-input">
    <input type="text" v-model="textValue" :class="inputClass" />
    <span class="errText" v-if="condition"> {{error.message}} </span>
  </dd>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import BaseHelper from '@/base/BaseHelper.vue';

@Component
export default class BizHeader extends BaseHelper {
  @Prop()
  error: any;
  @Prop()
  value: any;

  get textValue(): string {
    return this.value;
  }

  set textValue(value: string) {
    this.$emit('input', value);
  }

  get condition(): boolean {
    return this.error? !this.error.rule : false;
  }

  get inputClass(): string {
    return this.condition ? 'pis-err' : '';
  }

}
</script>
<style scoped>
.pis-input {
  margin-right: 10px;
}
.pis-err {
  border: 1px solid red;
}
.pis-input .errText {
  visibility: hidden;
  background-color: red;
  color: white;
  text-align: center;
  padding: 3px 15px 2px 15px;
  border-radius: 5px;
  margin-left: 5px;
  position: absolute;
  z-index: 1;
}
.pis-input .errText::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent red transparent transparent;
}
.pis-input:hover .errText {
  visibility: visible;
}
</style>
