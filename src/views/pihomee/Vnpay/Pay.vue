<template>
<div class="content">


    <!-- slider Area End-->
    <section class="contact-section">
            <div class="container">

    

                <div class="row">
                    <div class="col-12">
                        <h2 class="title">Nạp Tiền Tài Khoản</h2>
                    </div>

                    <div class="col-lg-3 offset-lg-1">
                        <h5 class="contact-title">Giá</h5>
                          <div> 
                            <b-form-group class="radioPrice" > 
                            <b-form-radio  v-model = "select"  name = "some-radios"  value = "10000" > 10 000 VND </b-form-radio><br>
                            <b-form-radio  v-model = "select"  name = "some-radios"  value = "20000" > 20 000 VND </b-form-radio> <br>
                            <b-form-radio  v-model = "select"  name = "some-radios"  value = "50000" > 50 000 VND</b-form-radio> <br>
                            <b-form-radio  v-model = "select"  name = "some-radios"  value = "100000" > 100 000 VND </b-form-radio><br>
                            <b-form-radio  v-model = "select"  name = "some-radios"  value = "200000" > 200 000 VND </b-form-radio> <br>
                            <b-form-radio  v-model = "select"  name = "some-radios"  value = "500000" > 500 000 VND</b-form-radio><br>
                            <b-form-radio  v-model = "select"  name = "some-radios"  value = "1000000" > 1 000 000 VND </b-form-radio> <br>
                            <b-form-radio  v-model = "select"  name = "some-radios"  value = "2000000" > 2 000 000 VND</b-form-radio><br>
                            <b-form-radio  v-model = "select"  name = "some-radios"  value = "5000000" > 5 000 000 VND</b-form-radio>
                            </b-form-group >
                        </div > 
                    </div>
                    <div class="col-lg-8">
                        <h5 class="contact-title">Chi tiết giao dịch</h5><hr>
                        <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                            <div class="row">
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="form-group">
                                                <span>Giá chọn</span>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="form-group">
                                                <span>{{select}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="form-group">
                                              <span>Phương thức thanh toán</span>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="form-group">
                                                <span>Thanh toán bằng VNPay</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <span>Chọn ngân hàng thanh toán</span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <div>
                                            <b-form-select v-model="selected" :options="options"></b-form-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class="button button-contactForm boxed-btn" @click="onClickPay">Xử lý thanh toán</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    <!-- ================ contact section end ================= -->
    
    <!-- section content hiển thị 100% width -->
    <section class="w100vw"></section>
</div>
</template>
 
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { axiosCreator } from "@/base/customAxios";
import router from '@/router';
import AccountDetailResponse from '@/base/response/account-detail-response';
@Component({

})
export default class Contact extends Vue {
 public select = '';
 public options = ["Ngân hàng test"];
 public selected = '';
axios = axiosCreator();
  API = {
    pay: "/pay/checkout",
    byId: '/account/getById',
    updateByUser: '/account/detail/updateByUser'
  };
  created() {
    const id = this.$store.getters['accountId'];
    if(window.location.search !== ''){
      const data = window.location.search.split('vnp_ResponseCode=')[1].substring(0,2);
      if(data === '00'){
        debugger;
        const amount = window.location.search.split('vnp_Amount=')[1].split('&vnp_BankCode')[0];
         this.axios.post<AccountDetailResponse>(this.API.byId, id)
        .then(response => {
            if (response && response.data) {
                const AccountDetail = response.data;
                AccountDetail.balance = AccountDetail.balance + parseInt(amount)/100;
                this.axios.post<string>(this.API.updateByUser, AccountDetail).then(response =>{
                    if(response && response.data){
                        window.alert('Thanh toan thanh cong');
                    }
                });
            }
      })
      } else {
          window.alert("Thanh toan that bai hihi")
      }

    }
  }
  onClickPay() {
    let param = {
        amount: this.select,
        bank: this.selected
    }
    this.axios.post<string>(this.API.pay, param).then((res: any) => {
      let link = res.data;
      window.location.href = link;
    });
  }
}

</script> 

<style scoped>


.contact-title{
    text-align: left;
}
 
.title{
    text-align: left;
    font-weight: 2rem;
}
.media-body{
    text-align: left;
}
.radioPrice{
    text-align: left;
    
}
.form-group{
    text-align: left;
}

</style>
