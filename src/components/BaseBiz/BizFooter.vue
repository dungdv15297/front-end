.<template>

</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import BaseHelper from '@/base/BaseHelper.vue';

@Component({
  components: {
    Icons: () => import('@/components/Icons/Icons.vue')
  }
})
export default class BizHeader extends BaseHelper {
}
</script>
<style scoped>
</style>
