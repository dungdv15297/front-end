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
                <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8">
              <!-- main-menu -->
              <div class="main-menu">
                <nav>
                  <ul id="navigation">
                    <li><a href="index.html">Trang chủ</a></li>
                    <li>
                      <a href="#">Tìm phòng trọ</a>
                      <ul class="submenu">
                        <li><a href="about.html">Phòng trọ</a></li>
                        <li><a href="services.html">Căn hộ</a></li>
                        <li><a href="blog.html">Nhà nguyên căn</a></li>
                        <li><a href="blog.html">Văn phòng</a></li>
                      </ul>
                    </li>
                    <li><a href="index.html">Cho thuê</a></li>
                    <li>
                      <a href="#">Về chúng tôi</a>
                      <ul class="submenu">
                        <li><a href="/about">Giới thiệu</a></li>
                        <li><a href="/contact">Liên lạc</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2">
              <!-- header-btn -->
              <div>
                <a v-if="isShowLogin" href="/login" class="btn">Đăng nhập</a>
                <span v-if="!isShowLogin">
                  <a href="/personal" class="account" v-b-tooltip.hover title="Xin chào Dũng">
                    <span class="material-icons">person</span>
                  </a>
                  <a href="#" @click="onClickSignOut" v-b-tooltip.hover title="Đăng xuất" class="material-icons">exit_to_app</a>
                </span>
              </div>
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

  API = {
    byToken: 'account/byToken'
  }

  mounted() {
    if (!!this.$store.getters['token']) {
      this.getAccountDetailInfo();
    }
  }

  async getAccountDetailInfo(): Promise<void> {
    const axios: AxiosInstance = axiosCreator();
    await axios.get<AccountDetailResponse>(this.API.byToken)
      .then(response => {
        if (response && response.data) {
          this.accountDetail = response.data;
          this.$store.dispatch('setAccountId', response.data.id);
        }
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.errorCode) {
          this.$store.dispatch('setToken', null);
          this.$store.dispatch('setAccountId', null);
        }
      });
  }

  onClickSignOut(): void {
    const token = this.$store.getters['token'];
    if (!!token) {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setAccountId', null);
    }
    this.$router.go(0);
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
