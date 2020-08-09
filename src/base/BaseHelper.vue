.<template>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Dialog from '@/dialog/Dialog.vue';
import { shallowMount, mount, Wrapper } from '@vue/test-utils';
import ListComp from '@/base/list-components';
import i18n from '@/i18n/index';

@Component({
  components: {
    Dialog
  }
})
export default class BaseHelper extends Vue {
  /** 
   * Open dialog
   */
  openDialog(type: string, message: string, callback?: Function) {
    const comp: Wrapper<Dialog> = shallowMount(Dialog, { i18n });
    comp.setProps({
      type: type,
      message: message,
      callback: func
    });
    this.$root.$el.appendChild(comp.vm.$el);
    let vm = this;
    function func(result: boolean) {
      vm.$root.$refs['router'];
      vm.$root.$el.removeChild(comp.vm.$el);
      if (callback) {
        callback(result);
      }
    }
  }

  /**
   * open new window
   */
  openWindow(screenCode: string, props?: any, callback?: Function ): void {
    // ListComp.screenCode
  }
}

export enum types {
  INFORMATION = 'information',
  CONFIRM = 'confirm',
  WARNING = 'warning'
}

</script>

<style>
</style>