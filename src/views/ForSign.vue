<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <SelectLanguage />
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HelloWorld: () => import('@/components/HelloWorld/HelloWorld.vue'),
    SelectLanguage: () => import('@/components/language/SelectLanguage.vue')
  }
})
export default class ForSign extends Vue {
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
}
</style>
