.<template>
  <div class="screen-size" ref="screen-size" v-if="isShow">
    <biz-header ref="header" screen-id="PIS001" pw=800 ph=800 @close="closeWindow" />
    <div ref="print">
      <table style="width:100%">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
    </div>
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
    BizFooter: () => import('@/components/BaseBiz/BizFooter.vue')
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