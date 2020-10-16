<template>
  <b-container fluid>
    <!-- Header buttonn -->
    <b-container fluid class="inline-item bg-color-top">
        <b-container>
        <b-row class="float-right">
            <b-col>
              <label v-if="accountDetail.name !== ''">
                <b-dropdown v-if="accountDetail.name !== ''" id="dropdown-1" :text="accountDetail.name" class="m-md-2">
                  <b-dropdown-item class="activeCss" @click="onClickGoManager">{{ $t('views.managerAccount') }}</b-dropdown-item>
                  <b-dropdown-item class="activeCss" @click="onClickSignOut">{{ $t('views.signout') }}</b-dropdown-item>
                </b-dropdown>
              </label>
              <b-button v-if="accountDetail.name === ''" class="m5" size="sm" @click="openSignInPage">{{ $t('views.signin') }}</b-button>
              <b-button v-if="accountDetail.name === ''" class="m5" size="sm" @click="openSignUpPage">{{ $t('views.signup') }}</b-button>
              <b-button variant="primary" size="sm" class="m5">{{ $t('views.news') }}</b-button>
              <select-language />
            </b-col>  
        </b-row>
        </b-container>
    </b-container>
    <!-- Logo -->
    <b-container>
        <b-row>
        <b-col>
            <b-img class="logo-size" :src="require('@/assets/logo.png')"></b-img>
        </b-col>
        </b-row>
    </b-container>
    <!-- Navbar -->
    <b-container id="navbarId" fluid class="bg-color-nav">
        <b-container>
        <b-row>
            <b-col>
            <b-navbar toggleable="md" type="dark">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="pi-navbar">
                    <b-nav-item>Trang chủ</b-nav-item>
                    <b-nav-item>Cho thuê phòng trọ</b-nav-item>
                    <b-nav-item>Nhà cho thuê</b-nav-item>
                    <b-nav-item>Cho thuê căn hộ</b-nav-item>
                    <b-nav-item>Tìm người ở ghép</b-nav-item>
                    <b-nav-item>Hướng dẫn</b-nav-item>
                    <b-nav-item>Nạp tiền</b-nav-item>
                    <b-nav-item>Bảng giá dịch vụ</b-nav-item>
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
            </b-col>
        </b-row>
        </b-container>
    </b-container>
    <!-- search-content -->
    <b-container class="bg-color-search">
        <b-row class="text-left">
        <b-col>
            <label class="label-1r ellipsis">Loại Tin</label>
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
        <b-col>
            <label class="label-1r ellipsis">Tỉnh thành</label>
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
        <b-col>
            <label class="label-1r ellipsis">Quận huyện</label>
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
        <b-col>
            <label class="label-1r ellipsis">Đường phố</label>
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
        <b-col>
            <label class="label-1r ellipsis">Khoảng giá</label>
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
        <b-col>
            <label class="label-1r ellipsis">Diện tích</label>
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
        <b-col>
            <label class="label-1r" style="width: 100%"></label>
            <b-button class="btn-search">Lọc tin</b-button>
        </b-col>
        </b-row>
    </b-container>

    <!-- Router views -->
    <transition>
        <router-view></router-view>
    </transition>
    
    <!-- Footer -->
    <b-container fluid class="footer">
        <b-row class="justify-content-center"> KÊNH THÔNG TIN TÌM NHÀ TRỌ PHÒNG TRỌ TẠI VIỆT NAM </b-row>
        <b-row class="justify-content-center"> Email: lienhe@pihomee.vn - Hỗ trợ: 0123456789 </b-row>
        <b-row class="justify-content-center"> PiHomee Team - Copyright © 2020 piihomee </b-row>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AccountDetailResponse from '@/base/response/account-detail-response';
import { axiosCreator } from '@/base/customAxios';
import { dialogTypes } from '@/base/enum/dialog-types';
import BaseHelper from '@/base/BaseHelper.vue';
import Account from '@/base/domains/account';
import { AxiosInstance } from 'axios';

@Component({
  components: {
    SelectLanguage: () => import('@/components/language/SelectLanguage.vue'),
    PageFooter: () => import('@/components/pagefooter/PageFooter.vue'),
    HeaderNav: () => import('@/components/headernav/HeaderNav.vue')
  }
})
export default class Views extends BaseHelper {
  options: Array<string> = ['Vĩnh Phúc', 'Hà Nội', 'Hải Dương'];
  selected: string = '';
  accountDetail: AccountDetailResponse = new AccountDetailResponse();

  API = {
    byToken: 'account/byToken'
  }

  created() {}

  mounted() {
    const navbar = document.getElementById('navbarId') as any;
    const sticky = navbar.offsetTop;
    window.onscroll = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
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
          this.openDialog(dialogTypes.WARNING, error.response.data.errorCode);
        }
      });
  }

  openSignInPage(): void {
    const home = btoa('home');
    this.$router.push({ path: `/login?from=${home}`});
  }

  openSignUpPage(): void {
    this.$router.push({ path: '/register' });
  }

  onClickGoManager(): void {
    this.$router.push({ path: '/personal' });
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
.float-right >>>.activeCss:hover {
  background: #faebd7;
}
.btn-search {
  background: #f1bd00;
  color: #000000;
}
.btn-search:hover {
  background: #ffc800;
}
.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bg-color-search {
  background: #ffdc9a;
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px;
}
.bg-color-search label {
  margin-bottom: 0;
}
.bg-color-nav {
  background: #563d7c;
}
.bg-color-nav a {
  color: #ffffff !important;
  border-left: 1px groove;
  line-height: 30px;
}
.bg-color-nav .navbar {
  padding: 0 !important;
}
.bg-color-nav a:hover {
  background: #007bff;
}
.bg-color-top {
  background: #f1f1f1;
}
.inline-item {
  display: inline-block;
}
.pi-navbar {
  color: white;
  margin: auto;
}
.logo-size {
  width: 200px;
}
.m5 {
  margin: 5px;
}
.title {
  font-size: 2rem !important;
  font-weight: bold;
  font-family: cursive;
}
.top {
  width: 100%;
  height: 150px;
  float: left;
  display: block;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
}
.text-city {
  font-weight: bold;
  font-size: 1.5rem;
  color: #ffffff;
}
.news {
  float: left;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
}
.my-news {
  font-size: 12px;
  color: #fd5757;
}
.my-news:hover {
  text-decoration: none;
  color: #ff0000;
}
.footer {
  background: #f1f1f1;
  padding: 10px;
  margin: 10px;
  border-top: 1px groove;
}
.sticky {
  position: fixed;
  top: 0;
  z-index: 1000000;
}
.m-md-2 >>> .btn {
  background: none;
  color: #000000;
  font-weight: bold;
  border: none;
}

.m-md-2 >>> li:hover {
  background: red !important;
}
</style>
