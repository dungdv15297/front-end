<template>
  <div ref="payment" id="main">
    <div class="content">
      <!-- slider Area End-->
      <section class="contact-section">
        <div class="container">
          <div class="row left">
            <div class="col-12">
              <h2 class="title">{{$t('payment.choose')}}</h2>
            </div>

            <div class="col-lg-3 offset-lg-1">
              <div>
                <b-form-group class="radioPrice">
                  <b-form-radio
                    v-model="vnpayData.amount"
                    name="some-radios"
                    value="10000"
                    :state="validation.amount.rule"
                    v-b-tooltip.hover.right.v-danger
                    :title="validation.amount.msg()"
                  >
                    10 000 VND </b-form-radio
                  ><br />
                  <b-form-radio
                    v-model="vnpayData.amount"
                    name="some-radios"
                    value="20000"
                  >
                    20 000 VND
                  </b-form-radio>
                  <br />
                  <b-form-radio
                    v-model="vnpayData.amount"
                    name="some-radios"
                    value="50000"
                  >
                    50 000 VND</b-form-radio
                  >
                  <br />
                  <b-form-radio
                    v-model="vnpayData.amount"
                    name="some-radios"
                    value="100000"
                  >
                    100 000 VND </b-form-radio
                  ><br />
                  <b-form-radio
                    v-model="vnpayData.amount"
                    name="some-radios"
                    value="200000"
                  >
                    200 000 VND
                  </b-form-radio>
                  <br />
                  <b-form-radio
                    v-model="vnpayData.amount"
                    name="some-radios"
                    value="500000"
                  >
                    500 000 VND</b-form-radio
                  ><br />
                  <b-form-radio
                    v-model="vnpayData.amount"
                    name="some-radios"
                    value="1000000"
                  >
                    1 000 000 VND
                  </b-form-radio>
                  <br />
                  <b-form-radio
                    v-model="vnpayData.amount"
                    name="some-radios"
                    value="2000000"
                  >
                    2 000 000 VND</b-form-radio
                  ><br />
                  <b-form-radio
                    v-model="vnpayData.amount"
                    name="some-radios"
                    value="5000000"
                  >
                    5 000 000 VND</b-form-radio
                  >
                </b-form-group>
              </div>
            </div>
            <div class="col-lg-8">
              <h5 class="contact-title">{{$t('payment.detail')}}</h5>
              <hr />
              <form
                class="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                novalidate="novalidate"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-8">
                        <div class="form-group">
                          <span>{{$t('payment.option')}}</span>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="form-group">
                          <span>{{ vnpayData.amount }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-8">
                        <div class="form-group">
                          <span>{{$t('payment.method')}}</span>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="form-group">
                          <span>{{$t('payment.vnpay')}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <span>{{$t('payment.bank')}}</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <div>
                        <b-form-select
                          v-model="vnpayData.bank"
                          :options="options"
                        ></b-form-select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <button
                    type="button"
                    class="button button-contactForm boxed-btn"
                    @click="onClickPay"
                  >
                    {{$t('payment.process')}}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <!-- ================ contact section end ================= -->
    </div>
  </div>
</template>
 
<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { axiosCreator } from "@/base/customAxios";
import VNpayData from "./vn-pay"
import router from "@/router";
import AccountDetailResponse from "@/base/response/account-detail-response";
import * as validate from './validation-rules';
@Component({})
export default class Contact extends Vue {
  @Prop()
  mini!: boolean;
  
  get options(): any[] {
    return [
      {value:"", text: this.$t('payment.blank').toString() },
      {value:"NCB", text: this.$t('payment.ncb').toString() },
      {value:"SACOMBANK", text: this.$t('payment.sacombank').toString() },
      {value:"EXIMBANK", text: this.$t('payment.eximbank').toString() },
      {value:"MSBANK", text: this.$t('payment.msb').toString() },
      {value:"VIETINBANK", text: this.$t('payment.viettinbank').toString() },
      {value:"VIETCOMBANK", text: this.$t('payment.vietcombank').toString() },
      {value:"VPBANK", text: this.$t('payment.vpbank').toString() },
      {value:"VISA", text: this.$t('payment.visa').toString() }
    ];
  }
  public vnpayData: VNpayData = new VNpayData();
  public isValidate = false;
  @Watch("mini")
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["payment"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["payment"] as any).style.marginLeft = "250px";
    }
  }

  axios = axiosCreator();
  API = {
    pay: "/pay/checkout",
    byId: "/account/getById",
    updateByUser: "/account/detail/updateByUser",
  };

  created() {
    const id = this.$store.getters["accountId"];
    if (window.location.search !== "") {
      const data = window.location.search
        .split("vnp_ResponseCode=")[1]
        .substring(0, 2);
      if (data === "00") {
        const amount = window.location.search
          .split("vnp_Amount=")[1]
          .split("&vnp_BankCode")[0];
        this.axios
          .post<AccountDetailResponse>(this.API.byId, id)
          .then((response) => {
            if (response && response.data) {
              const AccountDetail = response.data;
              AccountDetail.balance =
                AccountDetail.balance + parseInt(amount) / 100;
              this.axios
                .post<string>(this.API.updateByUser, AccountDetail)
                .then((response) => {
                  if (response && response.data) {
                    this.$bvModal.msgBoxOk(this.$t("pay.success").toString(), {
                      buttonSize: "sm",
                      okVariant: "success",
                      centered: true,
                      noCloseOnBackdrop: true,
                    });
                  }
                });
            }
          });
      } else {
        this.$bvModal.msgBoxOk(this.$t("pay.fail").toString(), {
          buttonSize: "sm",
          okVariant: "danger",
          centered: true,
          noCloseOnBackdrop: true,
        });
      }
    }
  }

  get validation(): any {
    return !this.isValidate ? validate.validation() : validate.validation(this.vnpayData);
  }

  onClickPay() {
    this.isValidate = true;
    if (!this.validation.isValid()) {
      this.$bvModal.msgBoxOk(this.$t("pay.choose").toString(), {
          buttonSize: "sm",
          okVariant: "success",
          centered: true,
          noCloseOnBackdrop: true,
        });
      return;
    }
    let param = {
      amount: this.vnpayData.amount,
      bank: this.vnpayData.bank,
    };
    this.axios.post<string>(this.API.pay, param).then((res: any) => {
      let link = res.data;
      window.location.href = link;
    });
  }
}
</script> 

<style scoped>
.contact-title {
  text-align: left;
}

.title {
  text-align: left;
  font-weight: 2rem;
}
.media-body {
  text-align: left;
}
.radioPrice {
  text-align: left;
}
.form-group {
  text-align: left;
}
</style>
