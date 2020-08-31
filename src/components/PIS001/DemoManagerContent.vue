.<template>
  <div class="content">
    <div class="border-box">
      <dl class="wmax">
        <dd>Input1</dd>
        <pis-input v-model="conditions.demo" :error="error.demo"/>
        <dd>Input2</dd>
        <pis-input v-model="conditions.demo2" :error="error.demo2"/>
        <button class="pis-btn pis-btn-blue" @click="demoValidate">Test</button>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { dialogTypes } from "@/base/enum/dialog-types";
import BaseHelper from '@/base/BaseHelper.vue';
import Conditions from './conditions';
import * as validate from './validations';

@Component({
  components: {
    PisInput: () => import('@/components/BaseBiz/PisInput.vue')
  }
})
export default class DemoManagerContent extends BaseHelper {
  error: any = {};
  conditions: Conditions = new Conditions();

  created() {
  }
  
  demoValidate(): void {
    this.error = validate.validation(this.conditions);
    if (this.error.isValid()) {
      this.openDialog(dialogTypes.INFORMATION, 'Hợp lý thực sự');
    }
  }

  clearComponent(): void {
    this.conditions = new Conditions();
  }
}
</script>

<style scoped>
.wmax {
  width: 1000px;
}
</style>