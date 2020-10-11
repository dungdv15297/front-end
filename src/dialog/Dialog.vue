.<template>
  <!-- Draggable DIV -->
  <div class="full-size">
    <div ref="mydiv" id="mydiv">
      <!-- Confirm dialog -->
      <div class="dialog" v-if="isConfirmDialog">
        <div
          ref="mydivheader"
          id="mydivheader"
          :class="bgColorCss"
          @mousedown="dragMouseDown"
        >
          <Icons :icon="'exclamation-triangle-fill'" :scale="1.3"/>
          <span>{{ $t('dialog.confirm') }}</span>
        </div>
        <dl class="dialog-content">{{ $t(`message.${message}`) }}</dl>
        <dl class="dialog-footer">
          <button class="btn-confirm" @click="onClickYes">{{ $t('dialog.yes') }}</button>
          <button class="btn-confirm" @click="onClickNo">{{ $t('dialog.no') }}</button>
        </dl>
      </div>

      <!-- Warning dialog -->
      <div class="dialog" v-if="isWarningDialog">
        <div
          ref="mydivheader"
          id="mydivheader"
          :class="bgColorCss"
          @mousedown="dragMouseDown"
        >
          <Icons :icon="'exclamation-triangle-fill'" :scale="1.3"/>
          <span>{{ $t('dialog.warning') }}</span>
        </div>
        <dl class="dialog-content">{{ $t(`message.${message}`) }}</dl>
        <dl class="dialog-footer">
          <button class="btn-warning" @click="onClickYes">{{ $t('dialog.ok') }}</button>
        </dl>
      </div>

      <!-- Information dialog -->
      <div class="dialog" v-if="isInforDialog">
        <div
          ref="mydivheader"
          id="mydivheader"
          :class="bgColorCss"
          @mousedown="dragMouseDown"
        >
          <Icons :icon="'info-circle-fill'" :scale="1.3"/>
          <span>{{ $t('dialog.infor') }}</span>
        </div>
        <dl class="dialog-content">{{ $t(`message.${message}`) }}</dl>
        <dl class="dialog-footer">
          <button class="btn-infor" @click="onClickYes">{{ $t('dialog.ok') }}</button>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { dialogTypes } from "@/base/enum/dialog-types";

@Component({
  components: {
    Icons: () => import('@/components/icons/Icons.vue')
  }
})
export default class Dialog extends Vue {
  @Prop()
  type!: string;
  @Prop()
  message!: string;
  @Prop()
  callback!: Function;

  // Position of dialog
  pos1 = 0;
  pos2 = 0;
  pos3 = 0;
  pos4 = 0;

  mounted() {
    const screentW = window.innerWidth;
    const screentH = window.innerHeight;
    if (this.$refs['mydiv']) {
      const compW = (this.$refs['mydiv'] as any);
      const subW = (screentW - 300)/2;
      const subH = (screentH - 300)/2;
      (this.$refs['mydiv'] as any).style.top = subH + 'px';
      (this.$refs['mydiv'] as any).style.left = subW + 'px';
    }
  }

  get bgColorCss(): string {
    return this.type === dialogTypes.CONFIRM
      ? 'dialog-confirm-title'
      : this.type === dialogTypes.INFORMATION
      ? 'dialog-infor-title'
      : this.type === dialogTypes.WARNING
      ? 'dialog-warning-title'
      : '';
  }

  get isConfirmDialog(): boolean {
    return this.type === dialogTypes.CONFIRM;
  }
  get isInforDialog(): boolean {
    return this.type === dialogTypes.INFORMATION;
  }
  get isWarningDialog(): boolean {
    return this.type === dialogTypes.WARNING;
  }

  onClickYes() {
    this.callback(true);
  }

  onClickNo() {
    this.callback(false);
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
span {
  margin: 10px;
}
.full-size {
  position: relative;
  background-color: rgba(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
}
#mydiv {
  position: absolute;
  z-index: 9;
  background-color: #f1f1f1;
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
  z-index: 10;
  color: #fff;
  border-bottom: 1px solid black;
}
.dialog-confirm-title {
  background-color: #17a2b8!important;
  font-weight: bold;
  width: 300px;
}
.dialog-warning-title {
  background-color: #ffc107!important;
  font-weight: bold;
  width: 300px;
}
.dialog-infor-title {
  background-color: #28a745!important;
  font-weight: bold;
  width: 300px;
}
.dialog-content {
  border-bottom: 1px solid black;
  margin: 10px 0px 0px 0px;
  padding: 10px 10px 20px 10px;
}
.dialog-footer {
  display: inline-flex;
  margin: 0px 0px 0px 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.btn-confirm {
  border: 1px solid #f1f1f1;
  padding: 5px 0px 5px 0px;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  width: 150px;
}
.btn-confirm:hover {
  background-color: #17a2b8!important;
  border: 1px solid;
  color: #fff;
}
.btn-warning,
.btn-infor {
  border: 1px solid #f1f1f1;
  padding: 5px 0px 5px 0px;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  width: 300px;
  background-color: #f1f1f1;
}
.btn-warning:hover {
  width: 300px;
  background-color: #ffc107!important;
}
.btn-infor:hover {
  width: 300px;
  background-color: #28a745!important;
}
dl {
  position: unset;
}
</style>