<template>
  <div id="sideBar">
    <div
      ref="mySidebar"
      class="sidebar"
      id="mySidebar"
      @mouseover="toggleSidebar"
      @mouseout="toggleSidebar"
    >
      <a href="/home" class="inline-flex">
        <i class="material-icons">home</i>
        <span class="icon-text">Trang chủ</span>
      </a>

      <a href="/manager/user-manager" class="inline-flex">
        <i class="material-icons">info</i>
        <span class="icon-text">Quản lý tài khoản</span>
      </a>

      <a href="/personal" class="inline-flex">
        <i class="material-icons">info</i>
        <span class="icon-text">Thông tin cá nhân</span>
      </a>

      <a href="/room-manager" class="inline-flex">
        <i class="material-icons">museum</i>
        <span class="icon-text">Quản lý phòng đăng</span>
      </a>

      <a href="/room-add" class="inline-flex">
        <i class="material-icons">post_add</i>
        <span class="icon-text">Cho thuê phòng</span>
      </a>

      <a href="/payment" class="inline-flex">
        <i class="material-icons">attach_money</i>
        <span class="icon-text">Nạp tiền tài khoản</span>
      </a>

      <a href="/manager/master-table" class="inline-flex">
        <i class="material-icons">menu_book</i>
        <span class="icon-text">Giá & diện tích</span>
      </a>

      <a href="#" class="inline-flex" @click="onSignOut">
        <i class="material-icons">exit_to_app</i>
        <span class="icon-text">Đăng xuất</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { axiosCreator } from '@/base/customAxios';
import { AxiosInstance } from 'axios';
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

  onSignOut(): void {
    const axios: AxiosInstance = axiosCreator();
    const token = this.$store.getters['token'];
    axios.post('account/logout').then(() => {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setAccountId', null);
      this.$router.push('/home');
    });
  }
}
</script>

<style scoped>
</style>
