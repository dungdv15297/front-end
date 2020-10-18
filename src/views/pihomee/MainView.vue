<template>
  <div class="body">
    <Preloader />
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    Preloader: () => import('./template/Preloader.vue'),
    Header: () => import('./template/Header.vue'),
    Footer: () => import('./template/Footer.vue'),
  }
})
export default class MainView extends Vue {}
</script>

<style scoped>
</style>
