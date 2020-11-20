<template>
  <div ref="information" id="main">
    <div class="content text-left">
      <div class="row">
        <div class="col-md-8 col-lg-7 content-infor">
          <div class="row">
              <label class="title">{{ $t('information.updateInfor') }}</label>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label>{{ $t('information.accountCode') }}</label>
                <input type="text" class="form-control" :value="detailData.id" disabled>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>{{ $t('information.phone') }}</label>
                <input type="text" class="form-control" :value="detailData.phone" disabled>
              </div>
              
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label>{{ $t('information.fullName') }}</label>
                <input type="text" class="form-control" v-model="detailData.name">
              </div>
            </div>
            
            <div class="col-sm-6">
              <div class="form-group">
                <label>{{ $t('information.birthday') }}</label>
                <b-form-datepicker id="example-datepicker"
                  :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                  class="date-picker" v-model="detailData.birthday"></b-form-datepicker>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label>{{ $t('information.gender') }}</label>
                <b-form-radio-group
                  id="gender"
                  :options="genderOption"
                  v-model="detailData.gender">
                </b-form-radio-group>
              </div>
              
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>{{ $t('information.balance') }}</label>
                <input type="text" class="form-control" :value="detailData.balance" disabled>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <label>{{ $t('information.address') }}</label>
                <input type="text" class="form-control" v-model="detailData.address">
              </div>
              
            </div>
          </div>
          <div class="row">
            <div class="col-sm-7">
              <div class="form-group">
                <label>{{ $t('information.email') }}</label>
                <b-form-input v-model="detailData.email"
                  id="email"
                  type="text"
                  :state="valUpdateInfo.email.rule"
                  v-b-tooltip.hover.right.v-danger
                  :title="$t(valUpdateInfo.email.msg())"
                  class="form-control"></b-form-input>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="form-group">
                <label>{{ $t('information.updated') }}</label>
                <input type="text" class="form-control" :value="detailData.updated" disabled>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-10 col-lg-6">
              <a href="#" class="btn" style="width: 100%" @click="onClickUpdateInfor">{{ $t('information.update') }}</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-lg-5 content-infor">
          <div class="row mt-20">
            <img class="avatar m-auto" :src="avatar" style="cursor:pointer;" @click="openImgUpload">
            <input type="file" ref="file-input" accept=".jpg,.png,.jpeg" :value="imageValue" style="display:none" @change="uploadImage"/> 
          </div>
          <div class="row">
            <label class="m-auto" style="font-size:x-large;color:#f96332;">{{name}}</label>
          </div>
          <div class="row">
            <label class="m-auto">{{detailData.phone}}</label>
          </div>
          <div class="row">
            <a href="#" v-b-modal.modal-2 class="m-auto btn my-button">{{ $t('information.updatePassword') }}</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Dialog Đổi mật khẩu -->
    <b-modal id="modal-2" @hidden="resetModal" style="min-width:280px;" size="md" centered hide-footer no-close-on-backdrop>
      <template v-slot:modal-title>
        <strong style="font-family:'Noto Serif'">{{ $t('information.updatePassword') }}</strong>
      </template>
      <div class="container" style="font-family:'Noto Serif'">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <!-- Username -->
            <b-form-group :label="$t('information.username')" label-for="username">
              <b-form-input id="username" :value="updateAccount.username" readonly></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-sm-12">
            <!-- Old password -->
            <b-form-group :label="$t('information.oldPass')" label-for="password">
              <b-form-input v-model="updateAccount.password"
                id="password"
                type="password"
                :state="valChangePass.password.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(valChangePass.password.msg())"></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <!-- New password -->
            <b-form-group :label="$t('information.newPass')" label-for="newPassword">
              <b-form-input v-model="updateAccount.newPassword"
                id="newPassword"
                type="password"
                :state="valChangePass.newPassword.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(valChangePass.newPassword.msg())"></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-sm-12">
            <!-- Confirm new password -->
            <b-form-group :label="$t('information.confirmPass')" label-for="confirm">
              <b-form-input v-model="updateAccount.confirm"
                id="confirm"
                type="password"
                :state="valChangePass.confirm.rule"
                v-b-tooltip.hover.right.v-danger
                :title="$t(valChangePass.confirm.msg())"></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <a class="btn" href="#" style="width:100%" @click="onClickChangePass">{{ $t('information.btnPassword') }}</a>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { axiosCreator } from '@/base/customAxios';
import AccountDetail from '@/base/domains/account-detail';
import PasswordChangeRequest from '@/base/request/password-change-request';
import AccountDetailResponse from '@/base/response/account-detail-response';
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { validationUpdateInfor, validationChangePass } from './validation-rules';

@Component
export default class Sidebar extends Vue {
  @Prop()
  mini!: boolean;

  axios = axiosCreator();
  API = {
    byId: '/account/getById',
    logout: '/account/logout',
    update: '/account/update',
    updateByUser: '/account/detail/updateByUser'
  };
  name: string = '';
  avatar = '';
  avatarBase64 = '';
  imageValue = '';

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

  @Watch("mini")
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["information"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["information"] as any).style.marginLeft = "250px";
    }
  }

  created() {
    const token = this.$store.getters['token'];
    const id = this.$store.getters['accountId'];
    if (!token && !id) {
      this.$router.push('/home');
    }
    this.getUserInformation(id);
    this.getAvatar(id);
  }

  getUserInformation(id: string): void {
    this.axios.post<AccountDetailResponse>(this.API.byId, id)
      .then(response => {
        if (response && response.data) {
          this.detailData = new AccountDetail(response.data)
          this.detailData.birthday = this.$moment(this.detailData.birthday).format('YYYY-MM-DD');
          this.detailData.updated = this.$moment(this.detailData.updated).format('YYYY-MM-DD');
          this.detailData.updatedAc = this.$moment(this.detailData.updatedAc).format('YYYY-MM-DD');
          this.updateAccount.username = this.detailData.username;
          this.name = this.detailData.name;
        }
      })
      .catch(() => this.$router.push({path: '/home'}));
  }

  getAvatar(id: string) {
    this.axios.post<string>('/account/avatar', id)
    .then(response => {
      this.avatar = response.data;
    })
  }
  
  onClickUpdateInfor(): void {
    this.isValUpdateInfo = true;
    if (!this.valUpdateInfo.isValid()) {
      return;
    }
    this.isValUpdateInfo = false;
    const detail = this.detailData;
    detail.birthday = new Date(this.detailData.birthday).toISOString();
    this.axios.post<string>(this.API.updateByUser, detail).then(response =>
      this.$bvModal.msgBoxOk(this.$t('message.hasBeenUpdated').toString(), {
        size: 'sm',
        buttonSize: 'sm',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true,
        noCloseOnBackdrop: true
      })
      .then(() => this.getUserInformation(response.data))
    )
    .catch(error =>
      this.$bvModal.msgBoxOk(error, {
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true,
        noCloseOnBackdrop: true
      })
    )
  }

  resetModal(): void {
    this.updateAccount.password = '';
    this.updateAccount.newPassword = '';
    this.updateAccount.confirm = '';
    this.isValChangePass = false;
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

  openImgUpload() {
    (this.$refs["file-input"] as any).click();
  }

  uploadImage(input: any): void {
    if (input.target.files && input.target.files[0]) {
      const vm = this;
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(input.target.files[0]);
      reader.onload = (event: any) => {
        this.$bvModal.msgBoxConfirm(this.$t('information.updateAvatar').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
          .then(value => {
            if (value) {
              vm.avatar = event.target.result;
              const b64 = (reader as any).result.replace(/^data:.+;base64,/, "");
              vm.avatarBase64 = b64;
              const id = this.$store.getters['accountId'];
              vm.axios.post('/account/update-avatar?id='+id, vm.avatarBase64)
                .then(() => {
                  vm.$bvModal.msgBoxOk(this.$t('masterTable.success').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
                });
            }
          })
      };
    }
  }
}
</script>

<style scoped>
.change-pass {
  color: #dca73a;
}
.change-pass:hover {
  color: #d46600;
}
.form-control {
  border-radius: 10rem !important;
  margin-bottom: 30px;
}
.btn {
  border-radius: 10rem;
  margin-bottom: 30px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
.row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.content-infor {
  border-radius: 0.1875rem;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
}
.title {
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
  font-size: 1.5em;
  line-height: 1.3em;
}
.date-picker >>> .btn {
  background: transparent;
  color: #212529;
  padding: .375rem .75rem;
}
.my-button {
  padding: 15px 30px;
}
</style>
