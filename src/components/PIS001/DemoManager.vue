.<template>
  <div v-if="isShow">
    <BizHeader screen-id="PIS001" @close="closeWindow" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { dialogTypes } from "@/base/enum/dialog-types";
import BaseHelper from '@/base/BaseHelper.vue';

@Component({
  components: {
    BizHeader: () => import('@/components/BaseBiz/BizHeader.vue')
  }
})
export default class DemoManager extends BaseHelper {
  isShow = true;
  closeWindow() {
    this.isShow = false;
  }
}
</script>

<style>

</style>