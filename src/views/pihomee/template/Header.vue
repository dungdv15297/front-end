<template>
  <header>
    <!-- Header Start -->
    <div class="header-area header-sticky">
      <div class="main-header">
        <div class="container">
          <div class="row align-items-center">
            <!-- logo -->
            <div class="col-xl-2 col-lg-2">
              <div class="logo">
                <a href="/home"><img src="assets/img/logo/logo.png" alt=""/></a>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8">
              <!-- main-menu -->
              <div class="main-menu f-right d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li><a href="/home">{{ $t('header.homepage') }}</a></li>
                    <li>
                      <a href="#">{{ $t('header.searchRoom') }}</a>
                      <ul class="submenu">
                        <li><a href="about.html">{{ $t('header.room') }}</a></li>
                        <li><a href="services.html">{{ $t('header.apartment') }}</a></li>
                        <li><a href="blog.html">{{ $t('header.house') }}</a></li>
                        <li><a href="blog.html">{{ $t('header.office') }}</a></li>
                      </ul>
                    </li>
                    <li><a href="/room-add">{{ $t('header.post') }}</a></li>
                    <li>
                      <a href="#">{{ $t('header.aboutUs') }}</a>
                      <ul class="submenu">
                        <li><a href="/about">{{ $t('header.introduce') }}</a></li>
                        <li><a href="/contact">{{ $t('header.contact') }}</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2">
              <!-- header-btn -->
              <div>
                <a v-if="isShowLogin" href="/login" class="btn">{{ $t('header.signin') }}</a>
                <span v-if="!isShowLogin">
                  <a href="/personal" class="account" v-b-tooltip.top :title="helloUser">
                    <span class="material-icons">person</span>
                  </a>
                  <a href="#" @click="onClickSignOut" v-b-tooltip.top :title="$t('header.signout')" class="material-icons">exit_to_app</a>
                </span>
              </div>
            </div>
            <!-- Mobile Menu -->
            <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header End -->
  </header>
</template>

<script lang="ts">
import { axiosCreator } from '@/base/customAxios';
import AccountDetailResponse from '@/base/response/account-detail-response';
import { AxiosInstance } from 'axios';
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  accountDetail: AccountDetailResponse = new AccountDetailResponse();
  get isShowLogin(): boolean {
    return this.accountDetail.name === '';
  }
  get helloUser(): string {
    return this.$t('header.hello').toString() + ' ' + this.accountDetail.name;
  }
  API = {
    byToken: 'account/byToken',
    logout: 'account/logout'
  }

  mounted() {
    if (!!this.$store.getters['token']) {
      this.getAccountDetailInfo();
    }
  }

  getAccountDetailInfo(): void {
    const axios: AxiosInstance = axiosCreator();
    axios.get<AccountDetailResponse>(this.API.byToken)
      .then(response => {
        if (response && response.data) {
          this.accountDetail = response.data;
          this.$store.dispatch('setAccountId', response.data.id);
        }
      })
      .catch(error => {
        this.$store.dispatch('setToken', null);
        this.$store.dispatch('setAccountId', null);
      });
  }

  onClickSignOut(): void {
    const axios: AxiosInstance = axiosCreator();
    const token = this.$store.getters['token'];
    axios.post(this.API.logout).then(() => {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setAccountId', null);
      this.$router.go(0);
    });
  }

}
</script>

<style scoped>
ul li {
  text-align: left;
}
.account {
  color: #dca73a;
  margin-right: 10px;
}
.account:hover {
  color: #fd7e14;
  font-weight: 400;
  font-size: 16px;
}
</style>
