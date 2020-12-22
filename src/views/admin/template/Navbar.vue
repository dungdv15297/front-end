<template>
  <div ref="main" id="main">
    <div class="content">
      <div class="row">
        <div class="col-4" style="text-align:left">
          <a class="navbar-brand" href="/home">
            <img src="../../../assets/img/logo/logo.png" alt="" />
          </a>
        </div>
        <div class="col-8">
          <a v-b-modal.modal-account style="cursor: pointer;padding:25px;margin:auto;float:right">
            <img src="@/assets/img/team/3.png" class="avatar" />
          </a>
        </div>
      </div>
      <b-modal id="modal-account" size="md" hide-footer hide-header>

        <div class="container" style="font-family:'Noto Serif'">
          <div class="container" style="text-align:center">
            <strong>{{ accountDetail.name }}</strong>
          </div>
          <a class="dropdown-item inline-flex" href="#">
            <i class="material-icons">notifications_none</i>
            <i class="pl-10">{{$t('navbar.notice')}}</i>
          </a>
          <a class="dropdown-item inline-flex" href="#" @click="onSignOut">
            <i class="material-icons">exit_to_app</i>
            <i class="pl-10">{{$t('navbar.logout')}}</i>
          </a>
        </div>
      </b-modal>
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
          localStorage.setItem('isAdmin', response.data.role == 1 ? 'admin' : 'normal');
        }
      })
      .catch(error => {
        this.$store.dispatch('setToken', null);
        this.$store.dispatch('setAccountId', null);
        localStorage.removeItem('isAdmin');
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
.dropdown-item:hover {
  background: #dca73a;
}
</style>
