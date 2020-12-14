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
                <a href="/home"><img src="data:image/png;base64,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" alt=""/></a>
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
                        <li><a href="/room?type=0">{{ $t('header.room') }}</a></li>
                        <li><a href="/room?type=1">{{ $t('header.apartment') }}</a></li>
                        <li><a href="/room?type=2">{{ $t('header.house') }}</a></li>
                        <li><a href="/room?type=3">{{ $t('header.office') }}</a></li>
                        <li><a href="/room">{{ $t('header.custom') }}</a></li>
                      </ul>
                    </li>
                    <li v-if="!isAdmin"><a href="/room-add">{{ $t('header.post') }}</a></li>
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

  isAdmin = false;

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
          this.isAdmin = response.data.role === 1;
          localStorage.setItem('isAdmin', response.data.role === 1 ? 'admin' : 'normal');
        }
      })
      .catch(error => {
        this.$store.dispatch('setToken', null);
        this.$store.dispatch('setAccountId', null);
        localStorage.removeItem('isAdmin');
      });
  }

  onClickSignOut(): void {
    const axios: AxiosInstance = axiosCreator();
    const token = this.$store.getters['token'];
    axios.post(this.API.logout).then(() => {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setAccountId', null);
      localStorage.removeItem('isAdmin');
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
