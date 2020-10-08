<template>
  <b-container fluid class="bg-gradient">
    <div class="header">
      <div class="button-header">
        <div class="button-r">
          <b-button class="button1">Đăng nhập</b-button>
          <b-button class="button1">Đăng ký</b-button>
          <b-button variant="primary" class="button">Đăng tin mới</b-button>
        </div>
      </div>
    </div>
    <div class="image">
      <b-img-lazy :src="require('@/assets/header.png')"></b-img-lazy>
    </div>
    <div class="content">
        <div class="nav-bar">
            <b-nav pills>
              <b-nav-item class="mg-5" active-class="active-class">Trang chủ</b-nav-item>
              <b-nav-item class="mg-5">Cho thuê phòng trọ</b-nav-item>
              <b-nav-item class="mg-5">Nhà cho thuê</b-nav-item>
              <b-nav-item class="mg-5">Cho thuê căn hộ</b-nav-item>
              <b-nav-item class="mg-5">Tìm người ở ghép</b-nav-item>
              <b-nav-item class="mg-5">Hướng dẫn</b-nav-item>
              <b-nav-item class="mg-5">Nạp tiền</b-nav-item>
              <b-nav-item class="mg-5" active-class="active-class">Bảng giá dịch vụ</b-nav-item>
            </b-nav>
        </div>
        <div class="search-combo">
          <b-row style="margin-left: 5px">
            <b-col>
              <label class="label-1r">Loại Tin</label>
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-col>
            <b-col>
              <label class="label-1r">Tỉnh thành</label>
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-col>
            <b-col>
              <label class="label-1r">Quận huyện</label>
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-col>
            <b-col>
              <label class="label-1r">Đường phố</label>
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-col>
            <b-col>
              <label class="label-1r">Khoảng giá</label>
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-col>
            <b-col>
              <label class="label-1r">Diện tích</label>
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-col>
            <b-col style="width: 20px;">
              <b-button class="btn-s">Lọc tin</b-button>
            </b-col>
          </b-row>
        </div>
        <div class="qc">
            <h3 style="font-weight: bold">Cho thuê phòng trọ, cho thuê nhà trọ, tìm phòng trọ</h3>
            <h5>Cho thuê phòng trọ, nhà trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, tìm phòng trọ nhanh, hiệu quả với hơn 70.000+ tin đăng và 2.000.000 lượt xem mõi tháng.</h5>
            <h3 style="font-weight: bold">Khu vực nổi bật</h3>
        </div>
        <div class="top-trend">
          <b-col>
              <a style="background: url(https://phongtro123.com/images/location_hcm.png) center no-repeat; background-size: cover;" href="#" class="top">
                <span class="text-city">Phòng trọ Hồ Chí Minh</span>
              </a>
          </b-col>
          <b-col>
              <a style="background: url(https://phongtro123.com/images/location_hn.png) center no-repeat; background-size: cover;" href="#" class="top">
              <span class="text-city">Phòng trọ Hà Nội</span></a>
          </b-col>
          <b-col>
              <a style="background: url(https://phongtro123.com/images/location_dn.png) center no-repeat; background-size: cover;" href="#" class="top">
              <span class="text-city">Phòng trọ Đà Nẵng</span></a>
          </b-col>
        </div>
        <div style="float: left; width: 100%">
          <h3 style="float: left; font-weight: bold;">Tin nổi bật</h3>
          <a class="my-news">Hiển thị tin của bạn tại đây?</a>
        </div>
    </div>
    <div class="footer">
        <h2 style="color: red; font-weight: bold;">Tại sao lại chọn PiHomee ?</h2>
        <span style="font-size: 20px;">Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng PiHomee.com tự hào 
          là trang web đứng top google về các từ khóa: <span style="font-weight: bold">cho thuê phòng trọ, nhà trọ,
          thuê nhà nguyên căn, cho thuê căn hộ, tìm người ở ghép...</span>
          Vì vậy tin của bạn đăng trên website sẽ tiếp cận được 
          với nhiều khách hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm chi phí hơn
        </span>
        <b-row style="margin-left:10px;">
            <b-col></b-col>
            <b-col style="margin-left: -5px">
              <span style="font-size: 25px; font-weight: bold;">20.000+</span>
            </b-col>
            <b-col></b-col>
            <b-col>
              <span style="font-size: 25px; font-weight: bold;">100.000+</span>
            </b-col>
            <b-col></b-col>
            <b-col>
              <span style="font-size: 25px; font-weight: bold;">500.000+</span>
            </b-col>
            <b-col></b-col>
            <b-col>
              <span style="font-size: 25px; font-weight: bold;">2.000.000+</span>
            </b-col>
            <b-col></b-col>
        </b-row>
        <b-row>
            <b-col></b-col>
            <b-col>
              <span style="font-size: 15px;">Thành viên</span>
            </b-col>
            <b-col></b-col>
            <b-col>
              <span style="font-size: 15px;">Tin đăng</span>
            </b-col>
            <b-col></b-col>
            <b-col>
              <span style="font-size: 15px;">lượt truy cập</span>
            </b-col>
            <b-col></b-col>
            <b-col>
              <span style="font-size: 15px;">lượt xem</span>
            </b-col>
            <b-col></b-col>
        </b-row>
        <b-row>
          <h2 style="color: red; 
                    font-weight: bold;
                    display: block;
                    margin-left: 90px;">Chúng tôi luôn mong đem đến hiệu quả tối đa cho khách hàng
            </h2>
        </b-row>
        <div class="image">
           <b-img-lazy :src="require('@/assets/footer.png')"></b-img-lazy>
        </div>
    </div>
  </b-container>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseHelper from "@/base/BaseHelper.vue";
import RegisterData from "@/views/register/register-data";

@Component({
  components: {
    SelectLanguage: () =>
      import("@/components/SelectLanguage/SelectLanguage.vue"),
  },
})
export default class HomePage extends Vue {
  registerData: RegisterData = new RegisterData();
  options: Array<string> = ['Vĩnh Phúc', 'Hà Nội', 'Hải Dương'];
  selected: string = '';
  created() {}

  onClickRegister(): void {
    // TODO
    debugger;
  }
}
</script>
<style scoped>
.content {
  width: 1024px;
  margin: 0 auto;
  background-color: white;
}
.title {
  font-size: 2rem !important;
  font-weight: bold;
  font-family: cursive;
}
.bg-gradient {
  width: 100%;
  height: 100vh;
}
.btn-register {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 121, 93, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.btn-register:hover {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(14, 182, 140, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
}
.text-small {
  font-size: small;
}
.lagre {
  font-size: larger;
  font-weight: bold;
  font-family: cursive;
}
.cl-white {
  color: whitesmoke;
}
.cl-white:hover {
  color: aqua;
}
a:hover {
  text-decoration: none;
}
.fl-left {
  float: left;
}

.button-r {
  float: right;
}
.button-header {
  width: 100%;
  height: 50px;
  background-color: #dcdcdc;
}
.image {
  margin-top: 10px;
}
.button1 {
  width: 95px;
  margin-left: 10px;
}
.button {
  margin-left: 10px;
}
.nav-bar {
  width: 100%;
  height: 50px;
  background-color: #00CED1;
}
.mg-5 {
  margin-top: 5px;
}
.active-class {
  background-color:red;
}
.search-combo {
  width: auto;
  background-color:#EEE8AA;
  height: 100px;
}
.label-1r {
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
}
.btn-s {
  margin-top: 30px;
}
.qc {
  float: left;
}
.text {
width: 150px;
height: 150px;
}
.top {
    height: 150px;
    width: 30%;
    margin-right: 2%;
    float: left;
    display: block;
    box-sizing: border-box;
    border-radius: 5px;
    overflow: hidden;
}
.text-city {
  font-weight: bold;
  font-size: 2rem;
  color: #dcdcdc;
}
.top-trend {
  margin-left: 50px;
}
.my-news {
  margin-top: 15px;
  float: left;
  margin-left: 30px;
}
.footer {
  width: 1024px;
  height: 500px;
  border-top: 1px black;
  background-color: #ededed;
  float: left;
  margin-left: 310px;
}
</style>