<template>
  <b-container fluid>
    <!-- Toptrend -->
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
      <!-- Room content -->
      <b-row>
        <span>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          a <br>
          
        </span>
      </b-row>
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

  mounted() {
    const navbar = document.getElementById('navbarId') as any;
    const sticky = navbar.offsetTop;
    window.onscroll = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
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
.footer {
  background: #f1f1f1;
  padding: 10px;
  margin: 10px;
  border-top: 1px groove;
}
.sticky {
  position: fixed;
  top: 0;
  z-index: 1000000;
}
</style>