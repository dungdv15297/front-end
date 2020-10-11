<template>
  <div class="home">
    <a href="/signin"><img src="@/assets/PIS-logo.png" class="logo" /></a>
    <div class="errorCode" v-html="errorCode"></div>
    <div class="errorMess" v-html="errorMess"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Error extends Vue {
  @Prop()
  code!: string;
  @Prop()
  mess!: string;

  get errorCode(): string {
    return !!this.code ? this.$t(`errorCode.${this.code}`).toString() : '';
  }

  get errorMess(): string {
    return !!this.mess ? this.$t(`errorMess.${this.mess}`).toString() : '';
  }
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: #ffecd6;
  background-image: linear-gradient(#e8e7e7, #f5e0a1);
  text-align: left;
}
.logo {
  opacity: 0.7;
  width: 100px;
  height: 100px;
}
.errorMess {
  text-align: center;
  font-size: xx-large;
  max-width: 500px;
  margin: auto;
}
.errorCode {
  font-size: 150px;
  font-family: monospace;
  color: #f8ab7b;
  text-align: center;
}
</style>
