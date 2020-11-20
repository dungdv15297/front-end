<template>
  <div ref="main" id="main">
    <div class="content">
      <nav class="navbar navbar-expand-md navbar-light">
        <a class="navbar-brand" href="/home">
          <img src="../../../assets/img/logo/logo.png" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="material-icons"> menu </span>
        </button>
        <div class="collapse navbar-collapse row" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto"></ul>
          <form class="form-inline my-2 my-lg-0">
            <div class="row">
              <div class="dropdown">
                <a
                  href="#"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="@/assets/img/team/3.png" class="avatar" />
                </a>
                <span style="font-family: cursive; margin-left: 10px"
                  ><strong>{{ accountDetail.name }}</strong></span
                >
                <div
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item inline-flex" href="#">
                    <i class="material-icons">notifications_none</i>
                    <i class="pl-10">Thông báo</i>
                  </a>
                  <a class="dropdown-item inline-flex" href="#" @click="onSignOut">
                    <i class="material-icons">exit_to_app</i>
                    <i class="pl-10">Đăng xuất</i>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang='ts'>
import { axiosCreator } from '@/base/customAxios';
import AccountDetailResponse from '@/base/response/account-detail-response';
import { AxiosInstance } from 'axios';
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  @Prop()
  mini!: boolean;

  accountDetail: AccountDetailResponse = new AccountDetailResponse();

  @Watch("mini")
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["main"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["main"] as any).style.marginLeft = "250px";
    }
  }

  created() {
    const axios: AxiosInstance = axiosCreator();
    axios.get<AccountDetailResponse>('account/byToken')
      .then(response => {
        if (response && response.data) {
          this.accountDetail = response.data;
          this.$store.dispatch('setAccountId', response.data.id);
        }
      })
      .catch(error => {
        this.$store.dispatch('setToken', null);
        this.$store.dispatch('setAccountId', null);
        this.$router.push('/login');
      });
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
.search-box {
  padding: 0.2rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 10rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
