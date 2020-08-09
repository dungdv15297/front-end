<template>
  <div class="home">
    <HeaderNav />
    <img src="@/assets/PIS-logo.png" class="logo" />
    <SelectLanguage />
    <PageFooter />
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HelloWorld: () => import('@/components/HelloWorld/HelloWorld.vue'),
    SelectLanguage: () => import('@/components/SelectLanguage/SelectLanguage.vue'),
    PageFooter: () => import('@/components/PageFooter/PageFooter.vue'),
    HeaderNav: () => import('@/components/HeaderNav/HeaderNav.vue')
  }
})
export default class MainView extends Vue {
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: #ffecd6;
  background-image: linear-gradient(#e8e7e7, #f5e0a1);
}
.logo {
  opacity: 0.7;
  margin-left: auto;
	margin-right: auto;
	display: block;
}
</style>
