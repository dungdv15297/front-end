<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Dialog from '@/dialog/Dialog.vue';
import { shallowMount, mount, Wrapper } from '@vue/test-utils';
import i18n from '@/i18n/index';
import { dialogTypes } from "@/base/enum/dialog-types";
import store from '@/store';

@Component
export default class BaseHelper extends Vue {
  isShow = true;
  /** 
   * Open dialog
   */
  openDialog(type: string, message: string, callback?: Function) {
    try {
      const comp: Wrapper<Dialog> = mount(Dialog, { i18n });
      comp.setProps({
        type: type,
        message: message,
        callback: func
      });
      (window.document.getElementById('app') as HTMLElement).appendChild(comp.vm.$el);
      let vm = this;
      const router = (window.document.getElementById('app') as HTMLElement).children[0];
      router.classList.add('disabledAll');
      function func(result: boolean) {
        (window.document.getElementById('app') as HTMLElement).removeChild(comp.vm.$el);
        router.classList.remove('disabledAll');
        if (callback) {
          callback(result);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * open new window
   */
  openWindow(screenId: string, component: any, props?: any): void {
    try {
      // Render a component
      const comp: Wrapper<any> = mount(component, { i18n, store });
      comp.setProps({
        initParams: props
      });
      // Check screen has been opened or not
      const listScreen: any[] = this.$store.getters['listScreen'];
      const findComponent = listScreen.findIndex(compo => {
        return compo === screenId;
      })
      if (findComponent !== -1) {
        return this.openDialog(dialogTypes.WARNING, 'hasScreenBefore');
      }
      // Open component
      (window.document.getElementById('app') as HTMLElement).children[0].appendChild(comp.vm.$el);
      // Push component information to listScreen in Store
      listScreen.push(screenId);
      this.$store.dispatch('setListScreen', listScreen);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Close and remove window from store
   */
  
  closeWindow(screenId: string): void {
    this.isShow = false;
    let listScreen: any[] = this.$store.getters['listScreen'];
    listScreen = listScreen.filter(compo => compo !== screenId);
    this.$store.dispatch('setListScreen', listScreen);
  }

  print(ref: string): void {
    if (this.$refs[ref]) {
      const html = (this.$refs[ref] as HTMLElement);
      const newWindow = window.open('', 'newWindow', '""');
      (newWindow as Window).document.write(html.innerHTML);
      (newWindow as Window).focus();
      (newWindow as Window).print();
    } else {
      this.openDialog(dialogTypes.WARNING, 'cantPrint');
    }
  }

}

</script>

<style>
</style>