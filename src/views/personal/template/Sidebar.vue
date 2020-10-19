<template>
  <div id="sideBar">
    <div
      ref="mySidebar"
      class="sidebar"
      id="mySidebar"
      @mouseover="toggleSidebar"
      @mouseout="toggleSidebar"
    >
      <a href="#" class="inline-flex">
        <i class="material-icons">home</i>
        <span class="icon-text">Trang chủ</span>
      </a>

      <a href="#" class="inline-flex">
        <i class="material-icons">info</i>
        <span class="icon-text">Thông tin cá nhân</span>
      </a>

      <a href="#" class="inline-flex">
        <i class="material-icons">museum</i>
        <span class="icon-text">Quản lý phòng đăng</span>
      </a>

      <a href="#" class="inline-flex">
        <i class="material-icons">attach_money</i>
        <span class="icon-text">Nạp tiền tài khoản</span>
      </a>

      <a href="#" class="inline-flex">
        <i class="material-icons">exit_to_app</i>
        <span class="icon-text">Đăng xuất</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {
  mini: boolean = true;

  toggleSidebar() {
    if (this.mini) {
      (this.$refs["mySidebar"] as any).style.width = "250px";
      this.mini = false;
    } else {
      (this.$refs["mySidebar"] as any).style.width = "85px";
      this.mini = true;
    }
    this.$emit('toggleSidebar', this.mini);
  }
}
</script>

<style scoped>
</style>
