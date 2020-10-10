<template>
<b-container fluid>
  <!-- Header buttonn -->
  <b-container fluid class="inline-item bg-color-top">
    <b-container>
      <b-row class="float-right">
        <b-col>
          <b-button class="m5">Đăng nhập</b-button>
          <b-button class="m5">Đăng ký</b-button>
          <b-button variant="primary" class="m5">Đăng tin mới</b-button>
        </b-col>  
      </b-row>
    </b-container>
  </b-container>
  <!-- Logo -->
  <b-container>
    <b-row>
      <b-col>
        <b-img class="logo-size" :src="require('@/assets/logo.png')"></b-img>
      </b-col>
    </b-row>
  </b-container>
  <!-- Navbar -->
  <b-container fluid class="bg-color-nav">
    <b-container>
      <b-row>
        <b-col>
          <b-navbar toggleable="md" type="dark">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="pi-navbar">
                <b-nav-item>Trang chủ</b-nav-item>
                <b-nav-item>Cho thuê phòng trọ</b-nav-item>
                <b-nav-item>Nhà cho thuê</b-nav-item>
                <b-nav-item>Cho thuê căn hộ</b-nav-item>
                <b-nav-item>Tìm người ở ghép</b-nav-item>
                <b-nav-item>Hướng dẫn</b-nav-item>
                <b-nav-item>Nạp tiền</b-nav-item>
                <b-nav-item>Bảng giá dịch vụ</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
  <!-- search-content -->
  <b-container class="bg-color-search">
    <b-row class="text-left">
      <b-col>
        <label class="label-1r ellipsis">Loại Tin</label>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col>
        <label class="label-1r ellipsis">Tỉnh thành</label>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col>
        <label class="label-1r ellipsis">Quận huyện</label>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col>
        <label class="label-1r ellipsis">Đường phố</label>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col>
        <label class="label-1r ellipsis">Khoảng giá</label>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col>
        <label class="label-1r ellipsis">Diện tích</label>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col>
        <label class="label-1r" style="width: 100%"></label>
        <b-button class="btn-search">Lọc tin</b-button>
      </b-col>
    </b-row>
  </b-container>
  <!-- Top trend -->
  <b-container>
    <b-row>
      <h5 class="font-weight-bolder">Cho thuê phòng trọ, cho thuê nhà trọ, tìm phòng trọ</h5>
      <h6>Website đăng tin cho thuê phòng trọ, tìm phòng trọ nhanh, hiệu quả với sự tin tưởng của người dùng</h6>
    </b-row>
    <b-row class="justify-content-center">
      <h4 class="font-weight-bolder">❖ Top 3 khu vực nổi bật ❖</h4>
    </b-row>
    <b-row>
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
    </b-row>
  </b-container>
  <!-- Content -->
  <b-container>
    <b-row>
      <b-col>
        <span>
          <label class="news">Tin nổi bật</label>
          <label class="news">
            <a href="" class="my-news">Hiển thị tin của bạn tại đây?</a>
          </label>
        </span>
      </b-col>
    </b-row>
  </b-container>

  <!-- Footer -->
  <b-container>
    
  </b-container>
</b-container>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseHelper from "@/base/BaseHelper.vue";
import RegisterData from "@/views/register/register-data";

@Component
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
.btn-search {
  background: #f1bd00;
  color: #000000;
}
.btn-search:hover {
  background: #ffc800;
}
.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bg-color-search {
  background: #ffdc9a;
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px;
}
.bg-color-search label {
  margin-bottom: 0;
}
.bg-color-nav {
  background: #563d7c;
}
.bg-color-nav a {
  color: #ffffff !important;
  border-left: 1px groove;
  line-height: 30px;
}
.bg-color-nav .navbar {
  padding: 0 !important;
}
.bg-color-nav a:hover {
  background: #007bff;
}
.bg-color-top {
  background: #f1f1f1;
}
.inline-item {
  display: inline-block;
}
.pi-navbar {
  color: white;
  margin: auto;
}
.logo-size {
  width: 200px;
}
.m5 {
  margin: 5px;
}
.title {
  font-size: 2rem !important;
  font-weight: bold;
  font-family: cursive;
}
.top {
  width: 100%;
  height: 150px;
  float: left;
  display: block;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
}
.text-city {
  font-weight: bold;
  font-size: 1.5rem;
  color: #ffffff;
}
.news {
  float: left;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
}
.my-news {
  font-size: 12px;
  color: #fd5757;
}
.my-news:hover {
  text-decoration: none;
  color: #ff0000;
}
</style>