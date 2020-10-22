<template>
  <main>
    <div class="slider-area">
      <div class="slider-active dot-style">
        <div class="single-slider hero-overly slider-height d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-xl-9">
                <div class="h1-slider-caption">
                  <h1 data-animation="fadeInUp" data-delay=".4s">rent a house for you</h1>
                  <h3 data-animation="fadeInDown" data-delay=".4s">Houses & Rooms</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <search-room @searchContent="searchContent"/>
    <!-- Trend Hà Nội Start -->
    <section class="room-area border-groove mt-5 pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8">
            <!--font-back-tittle  -->
            <div class="font-back-tittle mb-45">
              <div class="archivment-front">
                <h3>Top phòng Hà Nội</h3>
              </div>
            </div>
          </div>
        </div>
        <!-- 6 room in top of condition -->
        <trend-6-room />
        <div class="row justify-content-center">
          <div class="room-btn pt-70">
            <a href="#" class="btn view-btn1"
              >View more <i class="ti-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Trend Hà Nội End -->

    <!-- Trend Hồ Chí Minh Start -->
    <section class="room-area border-groove mt-5 pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8">
            <!--font-back-tittle  -->
            <div class="font-back-tittle mb-45">
              <div class="archivment-front">
                <h3>Top phòng Hồ Chí Minh</h3>
              </div>
            </div>
          </div>
        </div>
        <trend-6-room />
        <div class="row justify-content-center">
          <div class="room-btn pt-70">
            <a href="#" class="btn view-btn1"
              >View more <i class="ti-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Trend Hồ Chí Minh End -->

    <!-- Trend Đà Nẵng Start -->
    <section class="room-area border-groove mt-5 pt-5" style="padding-bottom:40px;border-bottom:1px groove;">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8">
            <!--font-back-tittle  -->
            <div class="font-back-tittle mb-45">
              <div class="archivment-front">
                <h3>Top phòng Đà Nẵng</h3>
              </div>
            </div>
          </div>
        </div>
        <trend-6-room />
        <div class="row justify-content-center">
          <div class="room-btn pt-70">
            <a href="#" class="btn view-btn1"
              >View more <i class="ti-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Trend Đà Nẵng End -->

    <!-- Make customer Start-->
    <section class="make-customer-area customar-padding fix">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-xl-5 col-lg-6">
            <div class="customer-img mb-120">
              <img
                src="assets/img/customer/customar1.png"
                class="customar-img1"
                alt=""
              />
              <img
                src="assets/img/customer/customar2.png"
                class="customar-img2"
                alt=""
              />
            </div>
          </div>
          <div class="col-xl-4 col-lg-4">
            <div class="customer-caption">
              <h2>Pihomee</h2>
              <div class="caption-details">
                <p class="pera-dtails">
                  Website hàng đầu về tìm và cho thuê phòng trọ tại Việt Nam
                </p>
                <p>
                  Pihomee tự hào là trang web hàng đầu trong việc tìm kiếm cũng như đưa tin cho thuê phòng trọ tại Việt Nam.
                  Chúng tôi sẽ giúp bạn có sự lựa chọn hợp lý trong lựa chọn phòng, cũng như cho thuê phòng trọ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Make customer End-->

    <!-- Testimonial Start -->
    <div class="testimonial-area testimonial-padding border-groove mt-5 pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-9 col-lg-9 col-md-9">
            <div class="h1-testimonial-active">
              <!-- Single Testimonial -->
              <div class="single-testimonial pt-65">
                <!-- Testimonial tittle -->
                <div class="font-back-tittle mb-105">
                  <div class="archivment-front">
                    <img src="assets/img/logo/testimonial.png" alt="" />
                  </div>
                </div>
                <!-- Testimonial Content -->
                <div class="testimonial-caption text-center">
                  <p>
                    Trước khi biết Pihomee, mình phải tốn nhiều công sức và chi phí cho việc đăng tin cho thuê:
                     từ việc phát tờ rơi, dán giấy, và đăng lên các website khác nhưng hiệu quả không cao.
                      Từ khi biết Pihomee, mình đã thử đăng tin lên và đánh giá hiệu quả khá cao
                       trong khi chi phí khá thấp, không còn tình trạng phòng trống kéo dài.
                  </p>
                  <div class="testimonial-ratting">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="rattiong-caption">
                    <span>Đàm Văn Dũng, <span>Chủ phòng</span> </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Testimonial End -->
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    SearchRoom: () => import('@/components/search-room/SearchRoom.vue'),
    Trend6Room: () => import('@/components/trend-6room/TrendRoom.vue')
  }
})
export default class Homepage extends Vue {
  dataSearch: SearchValue = new SearchValue();

  searchContent(data: SearchValue) {
    this.dataSearch = data;
  }
}

class SearchValue {
  type: number = 0;
  province: number = 0;
  district: number = 0;
  street: number = 0;
  acreage: number = 0;
  price: number = 0;
}
</script>

<style scoped>
.border-groove {
  border-top: 1px groove;
}
.single-slider {
  background-image: url('./roomspage_hero.jpg');
}
</style>
