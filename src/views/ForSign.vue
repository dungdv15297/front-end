<template>
  <div class="home">
    <HeaderNav />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
export default class ForSign extends Vue {
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: #ffecd6;
}
</style>
