.<template>
  <div class="screen-size" ref="screen-size" v-if="isShow">
    <!-- BizHeader -->
    <biz-header ref="header" screen-id="PIS002" pw=600 ph=475 @close="closeWindow" />
    <!-- BizContent -->
    <biz-content ref="biz-content"/>
    <!-- BizFooter -->
    <biz-footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { dialogTypes } from "@/base/enum/dialog-types";
import BaseHelper from '@/base/BaseHelper.vue';

@Component({
  components: {
    BizHeader: () => import('@/components/BaseBiz/BizHeader.vue'),
    BizContent: () => import('@/components/PIS002/CourseInformationContent.vue'),
    BizFooter: () => import('@/components/BaseBiz/BizFooter.vue')
  }
})
export default class CourseInformation extends BaseHelper {
  
}
</script>

<style>
.screen-size {
  width: 600px;
  height: 480px;
  position: absolute;
  z-index: 5;
  background-color: #ffffff;
  border: 2px solid #d3d3d3;
  text-align: center;
  border-radius: 5px;
}
</style>