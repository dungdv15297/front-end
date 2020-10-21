<template>
  <div ref="information" id="main">
    <div class="content text-left">
      <div class="row">
        <div class="col-md-8 col-lg-7 content-infor">
          <div class="row">
              <label class="title">Sửa thông tin cá nhân</label>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label>Mã tài khoản</label>
                <input type="text" class="form-control" :value="detailData.id" disabled>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>Số điện thoại</label>
                <input type="text" class="form-control" :value="detailData.phone" disabled>
              </div>
              
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label>Họ và tên</label>
                <input type="text" class="form-control" v-model="detailData.name">
              </div>
            </div>
            
            <div class="col-sm-6">
              <div class="form-group">
                <label>Ngày sinh</label>
                <b-form-datepicker id="example-datepicker" class="date-picker"></b-form-datepicker>
                <!-- <input type="text" class="form-control"> -->
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <label>Giới tính</label>
                <b-form-radio-group
                  id="gender"
                  :options="genderOption"
                  v-model="detailData.gender">
                </b-form-radio-group>
              </div>
              
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <label>Địa chỉ</label>
                <input type="text" class="form-control" v-model="detailData.address">
              </div>
              
            </div>
          </div>
          <div class="row">
            <div class="col-sm-7">
              <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" v-model="detailData.email">
              </div>
              
            </div>
            <div class="col-sm-5">
              <div class="form-group">
                <label>Cập nhật lần cuối</label>
                <input type="text" class="form-control" :value="detailData.updated" disabled>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-10 col-lg-6">
              <a href="#" class="btn" style="width: 100%">Cập nhật thông tin</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-lg-5 content-infor">
          <div class="row mt-20">
            <img class="avatar m-auto" src="../../../assets/img/mike.jpg" alt="">
          </div>
          <div class="row">
            <label class="m-auto" style="font-size:x-large;color:#f96332;">{{name}}</label>
          </div>
          <div class="row">
            <label class="m-auto">{{detailData.phone}}</label>
          </div>
          <div class="row">
            <a href="#" v-b-modal.modal-2 class="m-auto change-pass">Đổi mật khẩu</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Dialog Đổi mật khẩu -->
    <b-modal id="modal-2" style="min-width:280px;" size="md" centered hide-footer no-close-on-backdrop>
      <template v-slot:modal-title>
        <strong style="font-family:'Noto Serif'">Đổi mật khẩu</strong>
      </template>
      <div class="container" style="font-family:'Noto Serif'">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <!-- Username -->
            <b-form-group label="Tài khoản" label-for="username">
              <b-form-input id="username" :value="updateAccount.username" readonly></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-sm-12">
            <!-- Old password -->
            <b-form-group label="Mật khẩu cũ" label-for="password">
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
            <b-form-group label="Mật khẩu mới" label-for="newPassword">
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
            <b-form-group label="Mật khẩu mới" label-for="confirm">
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
          <a class="btn" href="#" style="width:100%" @click="onClickChangePass">Đổi mật khẩu</a>
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
    update: '/account/update'
  };
  name: string = '';

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
    // const token = this.$store.getters['token'];
    // const id = this.$store.getters['accountId'];
    // if (!token && !id) {
    //   this.$router.push('/home');
    // }
    // this.getUserInformation(id);
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
</style>
