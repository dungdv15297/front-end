<template>
  <div class="home">
    Hello, this is demo site
    <b-img-lazy :src="require('@/assets/PIS-logo.png')"></b-img-lazy>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HomePage extends Vue {
  @Prop()
  code!: string;
  @Prop()
  mess!: string;

  get errorCode(): string {
    debugger
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
