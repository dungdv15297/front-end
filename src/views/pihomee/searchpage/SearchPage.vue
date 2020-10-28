<template>
  <main>
    <div class="slider-area" style="height:250px">
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
    <search-room @search="onSearch" :fluid="true"/>
    <!-- Trend Đà Nẵng Start -->
    <section class="room-area border-groove mt-5 pt-5" style="padding-bottom:40px;border-bottom:1px groove">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-xl-8">
            <!--font-back-tittle  -->
            <div class="font-back-tittle mb-45">
              <div class="archivment-front">
                <h3>Danh sách các phòng</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <!-- Single Room -->
            <div class="single-room mb-50">
              <div class="room-img">
                <a><img src="assets/img/rooms/room1.jpg" alt=""/></a>
              </div>
              <div class="room-caption">
                <h4><a href="rooms.html" class="limited-label">Số 7 Hồ Tùng Mậu, Cầu Giấy</a></h4>
                <div class="per-night">
                  <span><u>Diện tích</u>30 <span>m2</span></span>
                  <br>
                  <span><u>VND</u>5.000.000 <span>/ tháng</span></span>
                  <br>
                  <span><u>Liên hệ</u>0397304591 <span></span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <!-- Single Room -->
            <div class="single-room mb-50">
              <div class="room-img">
                <a><img src="assets/img/rooms/room1.jpg" alt=""/></a>
              </div>
              <div class="room-caption">
                <h4><a href="rooms.html" class="limited-label">Số 7 Hồ Tùng Mậu, Cầu Giấy</a></h4>
                <div class="per-night">
                  <span><u>Diện tích</u>30 <span>m2</span></span>
                  <br>
                  <span><u>VND</u>5.000.000 <span>/ tháng</span></span>
                  <br>
                  <span><u>Liên hệ</u>0397304591 <span></span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <!-- Single Room -->
            <div class="single-room mb-50">
              <div class="room-img">
                <a><img src="assets/img/rooms/room1.jpg" alt=""/></a>
              </div>
              <div class="room-caption">
                <h4><a href="rooms.html" class="limited-label">Số 7 Hồ Tùng Mậu, Cầu Giấy</a></h4>
                <div class="per-night">
                  <span><u>Diện tích</u>30 <span>m2</span></span>
                  <br>
                  <span><u>VND</u>5.000.000 <span>/ tháng</span></span>
                  <br>
                  <span><u>Liên hệ</u>0397304591 <span></span></span>
                </div>
              </div>
            </div>
          </div>


          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <!-- Single Room -->
            <div class="single-room mb-50">
              <div class="room-img">
                <a><img src="assets/img/rooms/room1.jpg" alt=""/></a>
              </div>
              <div class="room-caption">
                <h4><a href="rooms.html" class="limited-label">Số 7 Hồ Tùng Mậu, Cầu Giấy</a></h4>
                <div class="per-night">
                  <span><u>Diện tích</u>30 <span>m2</span></span>
                  <br>
                  <span><u>VND</u>5.000.000 <span>/ tháng</span></span>
                  <br>
                  <span><u>Liên hệ</u>0397304591 <span></span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <!-- Single Room -->
            <div class="single-room mb-50">
              <div class="room-img">
                <a><img src="assets/img/rooms/room1.jpg" alt=""/></a>
              </div>
              <div class="room-caption">
                <h4><a href="rooms.html" class="limited-label">Số 7 Hồ Tùng Mậu, Cầu Giấy</a></h4>
                <div class="per-night">
                  <span><u>Diện tích</u>30 <span>m2</span></span>
                  <br>
                  <span><u>VND</u>5.000.000 <span>/ tháng</span></span>
                  <br>
                  <span><u>Liên hệ</u>0397304591 <span></span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <!-- Single Room -->
            <div class="single-room mb-50">
              <div class="room-img">
                <a><img src="assets/img/rooms/room1.jpg" alt=""/></a>
              </div>
              <div class="room-caption">
                <h4><a href="rooms.html" class="limited-label">Số 7 Hồ Tùng Mậu, Cầu Giấy</a></h4>
                <div class="per-night">
                  <span><u>Diện tích</u>30 <span>m2</span></span>
                  <br>
                  <span><u>VND</u>5.000.000 <span>/ tháng</span></span>
                  <br>
                  <span><u>Liên hệ</u>0397304591 <span></span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <!-- Single Room -->
            <div class="single-room mb-50">
              <div class="room-img">
                <a><img src="assets/img/rooms/room1.jpg" alt=""/></a>
              </div>
              <div class="room-caption">
                <h4 v-b-tooltip.hover title="Số 7 Hồ Tùng Mậu, Cầu Giấy">
                  <a href="rooms.html" class="limited-label">Số 7 Hồ Tùng Mậu, Cầu Giấy</a>
                </h4>
                <div class="per-night">
                  <span><u>Diện tích</u>30 <span>m2</span></span>
                  <br>
                  <span><u>VND</u>5.000.000 <span>/ tháng</span></span>
                  <br>
                  <span><u>Liên hệ</u>0397304591 <span></span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

      <!-- Pagination here -->

      </div>
    </section>
    <!-- Trend Đà Nẵng End -->

    <!-- Make customer Start-->
    <section class="make-customer-area customar-padding fix">
      <div class="container-fluid">
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
                <p class="pera-dtails pr-0">
                  Website hàng đầu về tìm và cho thuê phòng trọ tại Việt Nam
                </p>
                <p class="pr-0">
                  Pihomee tự hào là trang web hàng đầu trong việc tìm kiếm cũng như đưa tin cho thuê phòng trọ tại Việt Nam.
                  Chúng tôi sẽ giúp bạn có sự lựa chọn hợp lý trong lựa chọn phòng, cũng như cho thuê phòng trọ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w100vw"></section>
    <!-- Make customer End-->
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
export default class SearchPage extends Vue {
  dataSearch: SearchValue = new SearchValue();

  onSearch(data: SearchValue) {
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
  background-image: url('../../../assets/img/hero/roomspage_hero.jpg');
  min-height: 200px !important;
}
main >>> .nice-select {
  height: unset;
  line-height: unset;
  width: 160px;
}
main >>> .select-btn {
  padding: 20px 50px;
}
.single-room h4 {
  font-family: 'Noto Serif', serif !important;
}
.single-room u {
  font-family: 'Noto Serif', serif !important;
}
.limited-label {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
}
</style>
