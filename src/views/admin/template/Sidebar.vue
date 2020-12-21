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
        <span class="icon-text">{{$t('sidebar.home')}}</span>
      </a>

      <a href="/dashboard" class="inline-flex" v-if="isAdmin">
        <i class="material-icons">dashboard</i>
        <span class="icon-text">{{$t('sidebar.dashboard')}}</span>
      </a>

      <a href="/personal" class="inline-flex">
        <i class="material-icons">info</i>
        <span class="icon-text">{{$t('sidebar.infor')}}</span>
      </a>

      <a href="/room-manager" class="inline-flex" v-if="!isAdmin">
        <i class="material-icons">museum</i>
        <span class="icon-text">{{$t('sidebar.room')}}</span>
      </a>

      <a href="/manager/user-manager" class="inline-flex" v-if="isAdmin">
        <i class="material-icons">people</i>
        <span class="icon-text">{{$t('sidebar.account')}}</span>
      </a>

      <a href="/room-add" class="inline-flex" v-if="!isAdmin">
        <i class="material-icons">post_add</i>
        <span class="icon-text">{{$t('sidebar.rent')}}</span>
      </a>

      <a href="/payment" class="inline-flex" v-if="!isAdmin">
        <i class="material-icons">attach_money</i>
        <span class="icon-text">{{$t('sidebar.payment')}}</span>
      </a>

      <a href="/manager/master-table" class="inline-flex" v-if="isAdmin">
        <i class="material-icons">menu_book</i>
        <span class="icon-text">{{$t('sidebar.master')}}</span>
      </a>

      <a href="#" class="inline-flex" @click="onSignOut">
        <i class="material-icons">exit_to_app</i>
        <span class="icon-text">{{$t('sidebar.logout')}}</span>
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


  get isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'admin';
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
