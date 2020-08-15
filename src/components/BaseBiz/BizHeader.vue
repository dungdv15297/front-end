.<template>
  <div ref="mydiv" id="mydiv">
    <div
      ref="mydivheader"
      id="mydivheader"
      @mousedown="dragMouseDown"
    >
      <span> {{ screenId }} </span>
      <span> {{ $t(`screen.${screenId}`) }} </span>
      <button @click="close"><Icons :icon="'x'" :scale="1.3"/></button>
    </div>
  </div>
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
  @Prop()
  screenId!: string;
  pos1 = 0;
  pos2 = 0;
  pos3 = 0;
  pos4 = 0;

  close() {
    this.$emit('close', this.screenId)
  }

  dragMouseDown(e: any) {
    e = e || window.event;
    e.preventDefault();
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    document.onmouseup = this.closeDragElement;
    document.onmousemove = this.elementDrag;
  }

  elementDrag(e: any) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    this.pos1 = this.pos3 - e.clientX;
    this.pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    // set the element's new position:
    (this.$refs['mydiv'] as any).style.top =
      (this.$refs['mydiv'] as any).offsetTop - this.pos2 + 'px';
    (this.$refs['mydiv'] as any).style.left =
      (this.$refs['mydiv'] as any).offsetLeft - this.pos1 + 'px';
  }

  closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
</script>
<style scoped>
#mydivheader {
  color: black;
}
button {
  background-color: #ea7629;
  border: 0px;
  margin: 0px 0px 0px 0px;
}
button:hover {
  background-color: blanchedalmond;
}
#mydiv {
  position: absolute;
  z-index: 5;
  background-color: #ea7629;
  border: 2px solid #d3d3d3;
  text-align: center;
  border-radius: 5px;
  left: 45%;
  top: 35%;
}
#mydivheader {
  text-align: left;
  padding: 5px 5px 5px 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: move;
  z-index: 6;
  color: #000000;
  border-bottom: 1px solid #ffffff;
}
</style>
