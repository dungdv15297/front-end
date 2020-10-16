<template>
  <b-container fluid style="min-width: 500px">
    <b-container fluid>
      <b-row class="rowNav">
        <!-- Left -->
        <b-col style="max-width: 300px; min-width: 200px">
          <!-- Logo -->
          <router-link class="router-link" :to="{ path: '/' }">
            <span>{{ $t("personal.home") }}</span>
          </router-link>
        </b-col>

        <!-- Right -->
        <b-col>
          <b-container fluid style="text-align: left">
            <router-link class="router-link" :to="{ path: '/' }">
              <span>{{ $t("personal.homepage") }}</span>
            </router-link>
            <router-link class="router-link" :to="{ path: '/' }">
              <span>{{ $t("personal.room") }}</span>
            </router-link>
            <router-link class="router-link" :to="{ path: '/' }">
              <span>{{ $t("personal.house") }}</span>
            </router-link>
          </b-container>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid>
      <!-- Account detail -->
      <b-row>
        <!-- Left -->
        <b-col style="max-width: 300px; min-width: 200px; height: 100vh" class="colUser">
          <b-container fluid>
            <!-- Logo User-->
            <b-row style="margin-top: 20px">
              <b-col md="4">
                <b-img
                  src="https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png"
                  alt="user"
                  width="60px"
                  height="60px"
                >
                </b-img>
              </b-col>
              <b-col md="8">
                <strong style="margin-left: 15px; font-size: 18px; color: black">
                  <span id="name">{{ detailData.name }}</span>
                </strong>
                <p>
                  <span id="phone" style="margin-left: 15px; color: black; white-space: nowrap">{{ detailData.phone }}</span>
                </p>
              </b-col>
            </b-row>
            <b-row>
              <h6 style="color: black">
                {{ $t('personal.balance') }} <strong>{{ detailData.balance }}</strong>
              </h6>
            </b-row>
            <b-row> <b-button variant="danger">{{ $t('personal.post') }}</b-button> </b-row
            ><br />
            <!-- Navbar -->
            <b-row>
              <b-list-group style="text-align: left; width: 350px">
                <b-list-group-item href="#">
                  <span style="margin-right: 5px" class="h5 mb-2">
                    <b-icon icon="file-earmark-text"></b-icon>
                  </span>
                  {{ $t('personal.news') }}
                </b-list-group-item>
                <b-list-group-item href="#">
                  <span style="margin-right: 5px" class="h5 mb-2">
                    <b-icon icon="pencil-square"></b-icon>
                  </span>
                  {{ $t('personal.infor') }}
                </b-list-group-item>
                <b-list-group-item href="#">
                  <span style="margin-right: 5px" class="h5 mb-2">
                    <b-icon icon="calendar4"></b-icon>
                  </span>
                  {{  $t('personal.payment') }}
                </b-list-group-item>
                <b-list-group-item href="#" @click="onClickSignOut">
                  <span style="margin-right: 5px" class="h5 mb-2">
                    <b-icon icon="box-arrow-right"></b-icon>
                  </span>
                  {{ $t('personal.signout') }}
                </b-list-group-item>
              </b-list-group>
            </b-row>
          </b-container>
        </b-col>

        <!-- Right -->
        <b-col>
          <!-- Personal Infor -->
          <b-container fluid>
            <b-row class="title">{{ $t('personal.title') }}</b-row>
            <b-row class="text-left">
              <b-col class="mw-200 bold">{{ $t('personal.name') }}</b-col>
              <b-col class="ml-20">{{ detailData.name }}</b-col>
            </b-row>
            <b-row class="text-left">
              <b-col class="mw-200 bold">{{ $t('personal.birthday') }}</b-col>
              <b-col class="ml-20">{{ detailData.birthday }}</b-col>
            </b-row>
            <b-row class="text-left">
              <b-col class="mw-200 bold">{{ $t('personal.gender') }}</b-col>
              <b-col class="ml-20">{{ $t(`gender.${detailData.gender}`) }}</b-col>
            </b-row>
            <b-row class="text-left">
              <b-col class="mw-200 bold">{{ $t('personal.address') }}</b-col>
              <b-col class="ml-20">{{ detailData.address }}</b-col>
            </b-row>
            <b-row class="text-left">
              <b-col class="mw-200 bold">{{ $t('personal.email') }}</b-col>
              <b-col class="ml-20">{{ detailData.email }}</b-col>
            </b-row>
            <b-row class="text-left">
              <b-col class="mw-200 bold">{{ $t('personal.phone') }}</b-col>
              <b-col class="ml-20">{{ detailData.phone }}</b-col>
            </b-row>
            <b-row class="text-left">
              <b-col class="mw-200 bold">{{ $t('personal.updated') }}</b-col>
              <b-col class="ml-20">{{ detailData.updated }}</b-col>
            </b-row>
            <b-row class="text-left">
              <b-button variant="primary" v-b-modal.modal-1 style="width: 100%; margin-top: 15px">{{ $t('personal.edit') }}</b-button>
            </b-row>
          </b-container>
          <!-- Account -->
          <b-container fluid>
            <b-row class="title">{{ $t('personal.accountTitle') }}</b-row>
            <b-row class="text-left">
              <b-col class="mw-200 bold">{{ $t('personal.username') }}</b-col>
              <b-col class="ml-20">{{ detailData.username }}</b-col>
            </b-row>
            <b-row class="text-left">
              <b-col class="mw-200 bold">{{ $t('personal.updated') }}</b-col>
              <b-col class="ml-20">{{ detailData.updatedAc }}</b-col>
            </b-row>
            <b-row class="text-left">
              <b-button variant="primary" v-b-modal.modal-2 style="width: 100%; margin-top: 15px">{{ $t('personal.changePass') }}</b-button>
            </b-row>
          </b-container>
        </b-col>
        <!-- Modal update information -->
        <b-modal id="modal-1" centered size="lg" hide-footer no-close-on-backdrop>
          <template v-slot:modal-title>
            <strong>{{ $t('personal.updateInfor') }}</strong>
          </template>
          <b-container fluid>
            <b-form-group label-cols="4" label-cols-lg="2" :label="$t('personal.name')" label-for="input-name">
              <b-form-input v-model="detailData.name"></b-form-input>
            </b-form-group>

            <b-form-group label-cols="4" label-cols-lg="2" :label="$t('personal.birthday')" label-for="input-birthday">
              <b-form-datepicker id="birthday"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                locale="en"
                v-model="detailData.birthday">
              </b-form-datepicker>
            </b-form-group>

            <b-form-group label-cols="4" label-cols-lg="2" style="border: none" :label="$t('personal.gender')" label-for="radio-gender">
              <b-form-radio-group
                id="gender"
                :options="genderOption"
                v-model="detailData.gender">
              </b-form-radio-group>
            </b-form-group>

            <b-form-group label-cols="4" label-cols-lg="2" :label="$t('personal.address')" label-for="input-default">
              <b-form-input id="adress" v-model="detailData.address"></b-form-input>
            </b-form-group>

            <b-form-group label-cols="4" label-cols-lg="2" :label="$t('personal.email')" label-for="input-default">
              <b-form-input
                id="email"
                placeholder="nguyenvana@gmail.com"
                v-model="detailData.email">
              </b-form-input>
            </b-form-group>

            <b-form-group label-cols="4" label-cols-lg="2" :label="$t('personal.phone')" label-for="input-default">
              <b-form-input id="phone" v-model="detailData.phone"></b-form-input>
            </b-form-group>
            <b-button variant="primary" style="width: 100%; margin-top: 15px" @click="onClickUpdateInfor">{{ $t('personal.update') }}</b-button>
          </b-container>
        </b-modal>
        <!-- Modal change pass -->
        <b-modal id="modal-2" size="md" centered hide-footer no-close-on-backdrop>
          <template v-slot:modal-title>
            <strong>{{ $t('personal.changePass') }}</strong>
          </template>
          <b-container fluid>
            <!-- Username -->
            <b-form-group label-cols="5" :label="$t('personal.username')" label-for="input-name">
              <b-form-input id="username" :value="updateAccount.username" readonly></b-form-input>
            </b-form-group>
            <!-- Old password -->
            <b-form-group label-cols="5" :label="$t('personal.password')" label-for="input-name">
              <b-form-input v-model="updateAccount.password"
                type="password"
                :state="valChangePass.password.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(valChangePass.password.msg())"></b-form-input>
            </b-form-group>
            <!-- New password -->
            <b-form-group label-cols="5" :label="$t('personal.newPass')" label-for="input-name">
              <b-form-input v-model="updateAccount.newPassword"
                type="password"
                :state="valChangePass.newPassword.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(valChangePass.newPassword.msg())"></b-form-input>
            </b-form-group>
            <!-- Confirm new password -->
            <b-form-group label-cols="5" :label="$t('personal.confirm')" label-for="input-name">
              <b-form-input v-model="updateAccount.confirm"
                type="password"
                :state="valChangePass.confirm.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(valChangePass.confirm.msg())"></b-form-input>
            </b-form-group>
            <b-row class="text-left">
              <b-button variant="primary" style="width: 100%; margin-top: 15px" @click="onClickChangePass">{{ $t('personal.submit') }}</b-button>
            </b-row>
          </b-container>
        </b-modal>
      </b-row>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { axiosCreator } from '@/base/customAxios';
import AccountDetail from '@/base/domains/account-detail';
import AccountDetailResponse from '@/base/response/account-detail-response';
import PasswordChangeRequest from '@/base/request/password-change-request';
import { validationUpdateInfor, validationChangePass } from './validation-rules';
@Component
export default class PersonalInfor extends Vue {
  axios = axiosCreator();
  API = {
    byId: '/account/getById',
    logout: '/account/logout',
    update: '/account/update'
  };

  updateAccount: PasswordChangeRequest = new PasswordChangeRequest();
  detailData: AccountDetail = new AccountDetail();

  isValUpdateInfo: boolean = false;
  get valUpdateInfo(): any {
    return !this.isValUpdateInfo ? validationUpdateInfor() : validationUpdateInfor(this.detailData);
  }

  isValChangePass: boolean = false;
  get valChangePass(): any {
    return !this.isValChangePass ? validationChangePass() : validationChangePass(this.updateAccount);
  }

  genderOption = [
    { text: this.$t('gender.0'), value: 0 },
    { text: this.$t('gender.1'), value: 1 },
    { text: this.$t('gender.2'), value: 2 }
  ];

  created() {
    const token = this.$store.getters['token'];
    const id = this.$store.getters['accountId'];
    if (!token && !id) {
      this.$router.push('/home');
    }
    this.getUserInformation(id);
  }

  mounted() {}

  getUserInformation(id: string): void {
    this.axios.post<AccountDetailResponse>(this.API.byId, id)
      .then(response => {
        if (response && response.data) {
          this.detailData = new AccountDetail(response.data)
          this.detailData.birthday = this.$moment(this.detailData.birthday).format('YYYY-MM-DD');
          this.detailData.updated = this.$moment(this.detailData.updated).format('YYYY-MM-DD');
          this.detailData.updatedAc = this.$moment(this.detailData.updatedAc).format('YYYY-MM-DD');
          this.updateAccount.username = this.detailData.username;
        }
      })
      .catch(() => this.$router.push({path: '/home'}));
  }
  
  onClickUpdateInfor(): void {
    this.isValUpdateInfo = true;
    if (!this.valUpdateInfo.isValid()) {
      return;
    }
    this.$bvModal.hide('modal-1');
  }

  onClickChangePass(): void {
    this.isValChangePass = true;
    if (!this.valChangePass.isValid()) {
      return;
    }
    this.axios.post(this.API.update, this.updateAccount)
      .then(response => {
        this.$bvModal.msgBoxOk(this.$t('message.MSG003').toString(), {
          title: this.$t('message.success').toString(),
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          centered: true
        }).then(() => {
          this.$bvModal.hide('modal-2');
          this.getUserInformation(this.detailData.id);
        })
      })
      .catch(err => {
        this.$bvModal.msgBoxOk(this.$t(`message.${err.response.data.responseCode}`).toString(), {
          title: this.$t('message.error').toString(),
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          centered: true
        })
      })
  }

  async onClickSignOut(): Promise<void> {
    await this.axios.post<void>(this.API.logout)
      .then(response => {
        this.$store.dispatch('setToken', null);
        this.$store.dispatch('setAccountId', null);
      });

    this.$router.push({ path: '/home' })
  }

}
</script>

<style scoped>
.rowNav {
  white-space: nowrap;
  background-color: rgb(151, 151, 214);
  line-height: 30px;
  color: #fff;
}
.colUser {
  background-color: rgba(44, 44, 44, 0.055);
  border-right: 1px solid rgba(29, 29, 29, 0.11);
}
.text-left {
  text-align: left;
  padding: 10px;
  padding-left: 20px;
  font-size: 1.2rem;
}
.mw-200 {
  min-width: 200px;
  max-width: 200px;
}
.ml-20 {
  margin-left: 20px;
}
.title {
  margin-top: 20px;
  padding: 10px;
  padding-left: 20px;
  border-bottom: 1px solid rgba(29, 29, 29, 0.11);
  background: rgba(44, 44, 44, 0.055);
  font-size: 1.5rem;
  font-weight: bolder;
}
.bold {
  font-weight: bold;
}
.router-link {
  line-height: 3;
  text-align: left;
  font-size: 1rem;
  font-family: cursive;
  margin-right: 30px;
}
.router-link:hover {
  text-decoration: none;
  font-weight: bolder;
}
#modal-2
#modal-1 {
  min-width: 500px;
}
</style>
