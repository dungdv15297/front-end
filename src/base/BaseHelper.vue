.<template>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Dialog from '@/dialog/Dialog.vue';
import { shallowMount, mount, Wrapper } from '@vue/test-utils';
import i18n from '@/i18n/index';
import store from '@/store'

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
    const router = this.$root.$children[0].$children[0].$el;
    router.classList.add('disabledAll');
    function func(result: boolean) {
      vm.$root.$el.removeChild(comp.vm.$el);
      router.classList.remove('disabledAll');
      if (callback) {
        callback(result);
      }
    }
  }

  /**
   * open new window
   */
  openWindow(component: any, props?: any): void {
    const comp: Wrapper<any> = shallowMount(component, { i18n, store });
    comp.setProps({
      initParams: props
    });
    this.$parent.$el.appendChild(comp.vm.$el);
    const listScreen: any[] = this.$store.getters['listScreen'];
    listScreen.push(comp.vm.$el);
    this.$store.dispatch('setListScreen', listScreen);
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