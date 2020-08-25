<template>
  <div class="biz-footer">
    <!-- <button @click="close"><Icons :icon="'printer'" :scale="1.3"/>aaa</button> -->
    <a href="#" @click="clear()"> {{ $t('button.clear') }} </a>
    <a href="#" @click="print()"> {{ $t('button.print') }} </a>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import BaseHelper from '@/base/BaseHelper.vue';

@Component({
  components: {
    Icons: () => import('@/components/Icons/Icons.vue')
  }
})
export default class BizHeader extends BaseHelper {
  clear(): void {
    (this.$parent.$refs['biz-content'] as any).clearComponent();
  }
}
</script>
<style scoped>
.biz-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ea7629;
  color: white;
  text-align: right;
}
a {
  font-size: 15px;
  margin-right: 10px;
}
a:hover {
  text-decoration: none;
  background-color: blanchedalmond;
}
</style>
