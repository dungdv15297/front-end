<template>
  <div class="hello">
    <button @click="open">{{ $t('hello') }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BaseHelper from '@/base/BaseHelper.vue';

@Component
export default class HelloWorld extends BaseHelper {

  open() {
    this.openDialog('confirm', 'hello', (result: boolean) => {
      if(result) {
        alert('We say YES');
      } else {
        alert('We say NO!!');
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
