.<template>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Dialog from '@/dialog/Dialog.vue';

@Component({
  components: {
    Dialog
  }
})
export default class BaseHelper extends Vue{
  openDialog() {
    var comp = new Dialog().$mount();
    this.$el.appendChild(comp.$el);
  }
 
}
</script>

<style>
</style>