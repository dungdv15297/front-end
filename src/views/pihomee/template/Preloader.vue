<template>
  <div class="loader-wrapper" v-if="show">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Preloader extends Vue {
  show = true;
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 1000)
  }
}
</script>

<style scoped>
.loader-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #242f3f;
  z-index: 99999999;
  animation: fade-animation 3s;
  transition: ease-in;
}

</style>
