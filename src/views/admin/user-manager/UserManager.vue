<template>
  <div ref="roomManager" id="main">
    <div class="content">
      <div class="w-100">
        <div class="row title mt-20 mb-20">
          {{ $t("account.adminTitle") }}
          <b-button
            variant="success"
            class="icon-primary"
            @click="showModal(DialogMode.CREATE_PRICE)"
          >
            <b-icon icon="plus-circle" aria-hidden="true"></b-icon>
          </b-button>
        </div>
        <div class="row">
          <b-table
            striped
            hover
            responsive
            show-empty
            :empty-html="$t('account.empty')"
            :fields="adminField"
            :items="adminItems"
            :per-page="priceSize"
          >
            <template #cell(actions)="row">
              <b-button
                variant="success"
                class="icon-success"
                v-if="row.item.status !== 1"
                @click="activeUnLock(row.item.id)"
              >
                <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
              </b-button>
              <b-button
                variant="success"
                class="icon-success"
                v-if="row.item.status === 1"
                @click="activeLock(row.item.id)"
              >
                <b-icon icon="unlock-fill" aria-hidden="true"></b-icon>
              </b-button>
              <b-button
                v-if="row.item.status"
                variant="danger"
                @click="deleteAccount(row.item.id)"
              >
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
              </b-button>
            </template>
          </b-table>
        </div>
        <div class="row mb-40">
          <b-pagination
            size="sm"
            pills
            class="m-auto"
            :total-rows="priceTotal"
            :per-page="priceSize"
            v-model="priceCurrentPage"
          />
        </div>
      </div>

      <div class="w-100">
        <div class="row title mt-20 mb-20">
          {{ $t("account.userTitle") }}
        </div>
        <div class="row">
          <b-table
            striped
            hover
            responsive
            show-empty
            :empty-html="$t('account.empty')"
            :fields="userFields"
            :items="userItems"
            :per-page="acreSize"
          >
            <template #cell(actions)="row">
              <b-button
                variant="success"
                class="icon-success"
                v-if="row.item.status !== 1"
                @click="activeUnLock(row.item.id)"
              >
                <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
              </b-button>
              <b-button
                variant="success"
                class="icon-success"
                v-if="row.item.status === 1"
                @click="activeLock(row.item.id)"
              >
                <b-icon icon="unlock-fill" aria-hidden="true"></b-icon>
              </b-button>
              <b-button
                v-if="row.item.status"
                variant="danger"
                @click="deleteAccount(row.item.id)"
              >
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
              </b-button>
            </template>
          </b-table>
        </div>
        <div class="row mb-40">
          <b-pagination
            size="sm"
            pills
            class="m-auto"
            :total-rows="acreTotal"
            :per-page="acreSize"
            v-model="acreCurrentPage"
          />
        </div>
      </div>

      <b-modal id="modal" centered size="md" hide-footer no-close-on-backdrop>
        <template v-slot:modal-title>
          <strong style="font-family: 'Noto Serif'">{{ titleAdmin }}</strong>
        </template>
        <div class="container" style="font-family: 'Noto Serif'">
          <div class="row">
            <div class="col-12">
              <b-form-group :label="fullName" label-for="max">
                <b-form-input
                  v-model="dataDialog.fullname"
                  :state="validation.fullname.rule"
                  v-b-tooltip.hover.right.v-danger
                  :title="$t(validation.fullname.msg())"
                ></b-form-input>
              </b-form-group>
              <b-form-group :label="phoneNumber" label-for="max">
                <b-form-input
                  v-model="dataDialog.phone"
                  :state="validation.phone.rule"
                  v-b-tooltip.hover.right.v-danger
                  :title="$t(validation.phone.msg())"
                ></b-form-input>
              </b-form-group>
              <b-form-group :label="userName" label-for="min">
                <b-form-input
                  v-model="dataDialog.username"
                  :state="validation.username.rule"
                  v-b-tooltip.hover.right.v-danger
                  :title="$t(validation.username.msg())"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <b-form-group :label="passWord" label-for="max">
                <b-form-input
                  type="password"
                  v-model="dataDialog.password"
                  :state="validation.password.rule"
                  v-b-tooltip.hover.right.v-danger
                  :title="$t(validation.password.msg())"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <b-form-group :label="rePassWord" label-for="max">
                <b-form-input
                  type="password"
                  v-model="dataDialog.rePassword"
                  :state="validation.rePassword.rule"
                  v-b-tooltip.hover.right.v-danger
                  :title="$t(validation.rePassword.msg())"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <span
                v-html="rule"
                style="color: #7e7e7e; font-size: 14px; font-weight: 400"
              ></span>
            </div>
          </div>
          <div class="row" style="margin-top: 10px">
            <b-button variant="success" class="btn-dialog" @click="onSubmit">
              <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
              {{ $t("masterTable.submit") }}
            </b-button>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { axiosCreator } from "@/base/customAxios";
import { AxiosInstance } from "axios";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import accountDetail from "@/base/domains/account-detail";
import RegisterRequest from "./register-admin";
import AuthResponse from "@/base/response/auth-response";
import * as validate from "./validation-rules";
@Component
export default class MasterTable extends Vue {
  @Prop()
  mini!: boolean;

  DialogMode = DialogMode;

  dialogMode: number = DialogMode.CREATE_PRICE;
  readonly titleAdmin = this.$t("account.createAdmin").toString();
  readonly userName = this.$t("account.userName").toString();
  readonly passWord = this.$t("account.passWord").toString();
  readonly fullName = this.$t("account.fullName").toString();
  readonly phoneNumber = this.$t("account.phoneNumber").toString();
  readonly rePassWord = this.$t("account.rePassWord").toString();
  readonly rule = this.$t("account.rule").toString();

  adminField: any = [
    {
      key: "username",
      sortable: true,
      label: this.$t("account.userName").toString(),
    },
    { key: "name", sortable: true, label: this.$t("account.name").toString() },
    {
      key: "address",
      sortable: true,
      label: this.$t("account.address").toString(),
    },
    {
      key: "phone",
      sortable: true,
      label: this.$t("account.phone").toString(),
    },
    {
      key: "email",
      sortable: true,
      label: this.$t("account.email").toString(),
    },
    { key: "actions" },
  ];
  adminItems: any[] = [];
  priceTotal: number = 0;
  priceSize: number = 10;
  priceCurrentPage: number = 1;

  userFields: any = [
    {
      key: "username",
      sortable: true,
      label: this.$t("account.userName").toString(),
    },
    { key: "name", sortable: true, label: this.$t("account.name").toString() },
    {
      key: "address",
      sortable: true,
      label: this.$t("account.address").toString(),
    },
    {
      key: "phone",
      sortable: true,
      label: this.$t("account.phone").toString(),
    },
    {
      key: "email",
      sortable: true,
      label: this.$t("account.email").toString(),
    },
    { key: "actions" },
  ];
  userItems: any[] = [];
  acreTotal: number = 0;
  acreSize: number = 10;
  acreCurrentPage: number = 1;
  dataDialog: RegisterRequest = new RegisterRequest();
  isValidate: boolean = false;

  get validation(): any {
    return !this.isValidate
      ? validate.validation()
      : validate.validation(this.dataDialog);
  }
  axios: AxiosInstance = axiosCreator();
  @Watch("priceCurrentPage")
  findPricePage(): void {
    this.getAllUserAdmin();
  }

  @Watch("acreCurrentPage")
  findAcreaPage(): void {
    this.getAllUser();
  }

  created() {
    this.getAllUserAdmin();
    this.getAllUser();
  }

  getAllUserAdmin(): void {
    this.axios
      .get<any>(`/account/getByRole?role=1`)
      .then((response) => {
        if (response && response.data) {
          this.adminItems = response.data;
        }
      })
      .catch((error) =>
        this.$bvModal.msgBoxOk(error, {
          buttonSize: "sm",
          okVariant: "danger",
          centered: true,
          noCloseOnBackdrop: true,
        })
      );
  }

  getAllUser(): void {
    this.axios
      .get<any>(`/account/getByRole?role=0`)
      .then((response) => {
        if (response && response.data) {
          this.userItems = response.data;
        }
      })
      .catch((error) =>
        this.$bvModal.msgBoxOk(error, {
          buttonSize: "sm",
          okVariant: "danger",
          centered: true,
          noCloseOnBackdrop: true,
        })
      );
  }

  showModal(mode: number, data?: any): void {
    this.dialogMode = mode;
    if (!!data) {
      this.dataDialog = data;
    }
    this.dataDialog = new RegisterRequest();
    this.$bvModal.show("modal");
  }

  onSubmit(): void {
    this.isValidate = true;
    console.log(this.dataDialog);
    if (!this.validation.isValid()) {
      return;
    }
    this.isValidate = false;
    const body: RegisterRequest = new RegisterRequest({
      fullname: this.dataDialog.fullname,
      phone: this.dataDialog.phone,
      username: this.dataDialog.username,
      password: this.dataDialog.password,
      rePassword: this.dataDialog.rePassword,
    });

    const axios = axiosCreator();
    axios
      .post<AuthResponse>("account/register", body)
      .then((response) => {
        if (response && response.data && response.data.jwt) {
          const token: string = response.data.jwt;
          this.$store.dispatch("setToken", token);

          this.$bvModal.msgBoxOk(this.$t("header.successful").toString(), {
            title: this.$t("header.success").toString(),
            size: "sm",
            buttonSize: "sm",
            okVariant: "success",
            headerClass: "p-2 border-bottom-0",
            footerClass: "p-2 border-top-0",
            centered: true,
            noCloseOnBackdrop: true,
          }).then(() => {
              this.$bvModal.hide('modal');
              this.getAllUserAdmin();
            });
        }
      })
      .catch((error) => {
        if (
          !!error.response &&
          !!error.response &&
          !!error.response.data.errorCode
        ) {
          this.validation.username.rule = false;
          this.validation.username.firstRule = false;
        }
      });
  }

  deleteAccount(id: String): void {
    const accountId = this.$store.getters['accountId'];
    if (accountId == id) {
      this.$bvModal.msgBoxOk(this.$t("account.cantDelete").toString(), {
        buttonSize: "sm",
        okVariant: "danger",
        centered: true,
        noCloseOnBackdrop: true,
      })
      return;
    }
    this.$bvModal
      .msgBoxConfirm(this.$t("account.confirm3").toString(), {
        buttonSize: "sm",
        okVariant: "success",
        centered: true,
        noCloseOnBackdrop: true,
      })
      .then((value) => {
        if (value) {
          this.axios.post("/account/deleteById", id).then(() => {
            this.$bvModal
              .msgBoxOk(this.$t("account.delSuccess").toString(), {
                buttonSize: "sm",
                okVariant: "success",
                centered: true,
                noCloseOnBackdrop: true,
              })
              .then(() => {
                this.getAllUserAdmin();
                this.getAllUser();
              });
          });
        }
      });
  }

  deleteAcreage(acreage: Range): void {
    this.$bvModal
      .msgBoxConfirm(this.$t("account.confirm3").toString(), {
        buttonSize: "sm",
        okVariant: "success",
        centered: true,
        noCloseOnBackdrop: true,
      })
      .then((value) => {
        if (value) {
          this.axios
            .post("/master/acreage-range/delete", acreage.id)
            .then(() => {
              this.$bvModal
                .msgBoxOk(this.$t("masterTable.success").toString(), {
                  buttonSize: "sm",
                  okVariant: "success",
                  centered: true,
                  noCloseOnBackdrop: true,
                })
                .then(() => {
                  // this.getAllAcre();
                });
            });
        }
      });
  }

  activePrice(price: Range) {
    this.$bvModal
      .msgBoxConfirm(this.$t("masterTable.confirm2").toString(), {
        buttonSize: "sm",
        okVariant: "success",
        centered: true,
        noCloseOnBackdrop: true,
      })
      .then((value) => {
        if (value) {
          this.axios.post("/master/price-range/active", price).then(() => {
            this.$bvModal
              .msgBoxOk(this.$t("masterTable.success").toString(), {
                buttonSize: "sm",
                okVariant: "success",
                centered: true,
                noCloseOnBackdrop: true,
              })
              .then(() => {
                // this.getAllPrice();
              });
          });
        }
      });
  }

  activeAcreage(acreage: Range) {
    this.$bvModal
      .msgBoxConfirm(this.$t("masterTable.confirm2").toString(), {
        buttonSize: "sm",
        okVariant: "success",
        centered: true,
        noCloseOnBackdrop: true,
      })
      .then((value) => {
        if (value) {
          this.axios.post("/master/acreage-range/active", acreage).then(() => {
            this.$bvModal
              .msgBoxOk(this.$t("masterTable.success").toString(), {
                buttonSize: "sm",
                okVariant: "success",
                centered: true,
                noCloseOnBackdrop: true,
              })
              .then(() => {
                // this.getAllAcre();
              });
          });
        }
      });
  }

  activeLock(id: String) {
    const accountId = this.$store.getters['accountId'];
    if (accountId == id) {
      this.$bvModal.msgBoxOk(this.$t("account.cantLock").toString(), {
        buttonSize: "sm",
        okVariant: "danger",
        centered: true,
        noCloseOnBackdrop: true,
      })
      return;
    }
    this.$bvModal
      .msgBoxConfirm(this.$t("account.confirm1").toString(), {
        buttonSize: "sm",
        okVariant: "success",
        centered: true,
        noCloseOnBackdrop: true,
      })
      .then((value) => {
        if (value) {
          this.axios.post(`/account/updateStatus?id=${id}`, 2).then(() => {
            this.$bvModal
              .msgBoxOk(this.$t("account.lockSuccess").toString(), {
                buttonSize: "sm",
                okVariant: "success",
                centered: true,
                noCloseOnBackdrop: true,
              })
              .then(() => {
                this.getAllUser();
                this.getAllUserAdmin();
              });
          });
        }
      });
  }

  activeUnLock(id: String) {
    this.$bvModal
      .msgBoxConfirm(this.$t("account.confirm2").toString(), {
        buttonSize: "sm",
        okVariant: "success",
        centered: true,
        noCloseOnBackdrop: true,
      })
      .then((value) => {
        if (value) {
          this.axios.post(`/account/updateStatus?id=${id}`, 1).then(() => {
            this.$bvModal
              .msgBoxOk(this.$t("account.unLockSuccess").toString(), {
                buttonSize: "sm",
                okVariant: "success",
                centered: true,
                noCloseOnBackdrop: true,
              })
              .then(() => {
                this.getAllUser();
                this.getAllUserAdmin();
              });
          });
        }
      });
  }

  @Watch("mini")
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["roomManager"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["roomManager"] as any).style.marginLeft = "250px";
    }
  }
}

enum DialogMode {
  CREATE_PRICE = 1,
  UPDATE_PRICE = 2,
  CREATE_ACREAGE = 3,
  UPDATE_ACREAGE = 4,
}

interface Range {
  id: number | null;
  min: number;
  max: number;
  status: number | string;
}
</script>

<style scoped>
.title {
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
  font-size: 1.5em;
  line-height: 1.3em;
}
.row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.row >>> .btn {
  background: none !important;
  color: #dc3545;
  padding: 0.375rem 0.75rem;
}
.row >>> .btn-dialog {
  background: none;
  color: #009222;
  padding: 0.375rem 0.75rem;
}
.row >>> .btn-dialog:hover {
  background: none;
  color: #09b903;
  padding: 0.375rem 0.75rem;
}
.row >>> .icon-success {
  background: none;
  color: #28a745;
  padding: 0.375rem 0.75rem;
}
.row >>> .icon-primary {
  background: none;
  color: #176edf;
  padding: 0.375rem 0.75rem;
}
#main >>> .modal-delete {
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}
#main >>> .modal-delete .btn {
  color: #fff !important;
  padding: 15px 15px;
  font-size: 13px;
}
#main >>> .modal-delete .btn-secondary {
  background: #6c757d;
}
#main >>> .modal-delete .btn-secondary:hover {
  background: #919aa0;
}
#main >>> .modal-delete .btn-primary {
  background: #007bff;
}
#main >>> .modal-delete .btn-primary:hover {
  background: #005ab9;
}
</style>
