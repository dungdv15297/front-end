.<template>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Dialog from '@/dialog/Dialog.vue';
import { shallowMount, mount, Wrapper } from '@vue/test-utils';

@Component({
  components: {
    Dialog
  }
})
export default class BaseHelper extends Vue {
  defaultDialog = {
    yes: this.$t('dialog.yes').toString(),
    no: this.$t('dialog.no').toString(),
    infor: this.$t('dialog.infor').toString()
  }
  comp: Wrapper<Dialog> = mount(Dialog)
  
  /** 
   * Open dialog
   */
  openDialog(type: string, message: string, callback: Function) {
    this.comp.setProps({
      type: types.CONFIRM,
      message: message,
      title: '',
      default: this.defaultDialog,
      callback: func
    });
    this.$root.$el.appendChild(this.comp.vm.$el);
    let vm = this;
    function func(result: boolean) {
      vm.$root.$refs['router'];
      debugger
      vm.$root.$el.removeChild(vm.comp.vm.$el);
      callback(result);
    }
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