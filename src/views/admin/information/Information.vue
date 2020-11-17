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
  avatar = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMzaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzMiA3OS4xNTkyODQsIDIwMTYvMDQvMTktMTM6MTM6NDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1LjUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QThCRDhBQUFCOTUyMTFFN0JFMjdEQjkzNUY3OTk3NkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QThCRDhBQUJCOTUyMTFFN0JFMjdEQjkzNUY3OTk3NkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOEJEOEFBOEI5NTIxMUU3QkUyN0RCOTM1Rjc5OTc2QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOEJEOEFBOUI5NTIxMUU3QkUyN0RCOTM1Rjc5OTc2QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJ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';
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

  @Watch('avatarBase64')
  changeAvatarBase64() {
    if (this.avatarBase64.length <= 0) {
      return;
    }
    const id = this.$store.getters['accountId'];
    this.$bvModal.msgBoxConfirm(this.$t('information.updateAvatar').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
    .then(value => {
      if (value) {
        this.axios.post('/account/avatar', id)
          .then(() => {
            this.$bvModal.msgBoxOk(this.$t('masterTable.success').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
              .then(() => {
                this.getAvatar();
              })
          });
      }
    })
  }

  created() {
    const token = this.$store.getters['token'];
    const id = this.$store.getters['accountId'];
    if (!token && !id) {
      this.$router.push('/home');
    }
    this.getUserInformation(id);
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
        vm.avatar = event.target.result;
      };
      reader.onloadend = () => {
        const b64 = (reader as any).result.replace(/^data:.+;base64,/, "");
        vm.avatarBase64 = b64;
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
