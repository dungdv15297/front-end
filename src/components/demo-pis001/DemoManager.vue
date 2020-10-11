.<template>
  <div class="screen-size" ref="screen-size" v-if="isShow">
    <biz-header ref="header" screen-id="PIS001" pw=800 ph=800 @close="closeWindow" />
    <biz-content ref="biz-content"/>
    <biz-footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { dialogTypes } from "@/base/enum/dialog-types";
import BaseHelper from '@/base/BaseHelper.vue';

@Component({
  components: {
    BizHeader: () => import('@/components/basebiz/BizHeader.vue'),
    BizContent: () => import('@/components/demo-pis001/DemoManagerContent.vue'),
    BizFooter: () => import('@/components/basebiz/BizFooter.vue')
  }
})
export default class DemoManager extends BaseHelper {
  
}
</script>

<style>
.screen-size {
  width: 800px;
  height: 800px;
  position: absolute;
  z-index: 5;
  background-color: #ffffff;
  border: 2px solid #d3d3d3;
  text-align: center;
  border-radius: 5px;
}
</style>