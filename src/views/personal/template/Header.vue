<template>
  <header>
    <!-- Header Start -->
    <div class="header-area header-sticky">
      <div class="main-header">
        <div class="container">
          <div class="row align-items-center">
            <!-- logo -->
            <div class="col-xl-2 col-lg-2">
              <div class="logo">
                <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8">
              <!-- main-menu -->
              <div class="main-menu">
                <nav>
                  <ul id="navigation">
                    <li><a href="index.html">Trang chủ</a></li>
                    <li>
                      <a href="#">Tìm phòng trọ</a>
                      <ul class="submenu">
                        <li><a href="about.html">Phòng trọ</a></li>
                        <li><a href="services.html">Căn hộ</a></li>
                        <li><a href="blog.html">Nhà nguyên căn</a></li>
                        <li><a href="blog.html">Văn phòng</a></li>
                      </ul>
                    </li>
                    <li><a href="index.html">Cho thuê</a></li>
                    <li>
                      <a href="#">Về chúng tôi</a>
                      <ul class="submenu">
                        <li><a href="rooms.html">Giới thiệu</a></li>
                        <li><a href="elements.html">Liên lạc</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2">
              <!-- header-btn -->
              <div class="">
                <a href="#" class="btn">Đăng nhập</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header End -->
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style scoped>
ul li {
  text-align: left;
}
</style>
