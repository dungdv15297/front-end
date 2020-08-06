.<template>
  <!-- Draggable DIV -->
  <div class="full-size">
    <div ref="mydiv" id="mydiv">
      <!-- Confirm dialog -->
      <div v-if="isConfirmDialog">
        <div ref="mydivheader" id="mydivheader" @mousedown="dragMouseDown">{{ titleDialog }}</div>
        <p>Move</p>
        <p>this</p>
        <p>DIV</p>
        <div class="button" @click="closeHandle">{{ defaultText.yes }}</div>
        <div class="button" @click="closeHandle">{{ defaultText.no }}</div>
      </div>

      <!-- Warning dialog -->
      <div v-if="isWarningDialog">
        <div ref="mydivheader" id="mydivheader" @mousedown="dragMouseDown">{{ titleDialog }}</div>
        <p>Move</p>
        <p>this</p>
        <p>DIV</p>
        <div class="button" @click="closeHandle">{{ defaultText.infor }}</div>
      </div>

      <!-- Information dialog -->
      <div v-if="isInforDialog">
        <div ref="mydivheader" id="mydivheader" @mousedown="dragMouseDown">{{ titleDialog }}</div>
        <p>Move</p>
        <p>this</p>
        <p>DIV</p>
        <div class="button" @click="closeHandle">{{ defaultText.infor }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { dialogTypes } from "@/base/enum/dialog-types";
import defaultDialog from "@/base/domains/default-dialog";

@Component
export default class Dialog extends Vue {
  @Prop()
  type!: string;
  @Prop()
  message!: string;
  @Prop()
  title!: string;
  @Prop()
  callback!: Function;
  @Prop()
  default!: defaultDialog;
  pos1 = 0;
  pos2 = 0;
  pos3 = 0;
  pos4 = 0;

  get defaultText(): defaultDialog {
    return this.default ? this.default : new defaultDialog();
  }
  get titleDialog(): string {
    return this.title ? this.title : "";
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
  deleteAccount(): void {
    this.callbackFn();
  }

  closeHandle() {
    this.callbackFn();
  }

  callbackFn(): void {
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
    (this.$refs["mydiv"] as any).style.top =
      (this.$refs["mydiv"] as any).offsetTop - this.pos2 + "px";
    (this.$refs["mydiv"] as any).style.left =
      (this.$refs["mydiv"] as any).offsetLeft - this.pos1 + "px";
  }

  closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
</script>

<style>
.full-size {
  position: relative;
  background-color:rgba(0, 0, 0);
  background-color:rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
}
#mydiv {
  position: absolute;
  z-index: 9;
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  text-align: center;
  left: 50%;
  top: 35%;
}

#mydivheader {
  padding: 10px;
  cursor: move;
  z-index: 10;
  background-color: #2196f3;
  color: #fff;
}
</style>