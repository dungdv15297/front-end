<template>
  <div class="row">
    <div class="col-xl-4 col-lg-6 col-md-6">
      <!-- Single Room -->
      <div class="single-room mb-50">
        <div class="room-img">
          <a><img src="assets/img/rooms/room1.jpg" alt=""/></a>
        </div>
        <div class="room-caption">
          <h4><a href="rooms.html">Số 7 Hồ Tùng Mậu, Cầu Giấy</a></h4>
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
    <div class="col-xl-4 col-lg-6 col-md-6">
      <!-- Single Room -->
      <div class="single-room mb-50">
        <div class="room-img">
          <a href="rooms.html"
            ><img src="assets/img/rooms/room2.jpg" alt=""
          /></a>
        </div>
        <div class="room-caption">
          <h4><a href="rooms.html">Classic Double Bed</a></h4>
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
    <div class="col-xl-4 col-lg-6 col-md-6">
      <!-- Single Room -->
      <div class="single-room mb-50">
        <div class="room-img">
          <a href="rooms.html">
            <img src="assets/img/rooms/room3.jpg" alt=""
          /></a>
        </div>
        <div class="room-caption">
          <h4><a href="rooms.html">Classic Double Bed</a></h4>
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
    <div class="col-xl-4 col-lg-6 col-md-6">
      <!-- Single Room -->
      <div class="single-room mb-50">
        <div class="room-img">
          <a href="rooms.html"
            ><img src="assets/img/rooms/room4.jpg" alt=""
          /></a>
        </div>
        <div class="room-caption">
          <h4><a href="rooms.html">Classic Double Bed</a></h4>
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
    <div class="col-xl-4 col-lg-6 col-md-6">
      <!-- Single Room -->
      <div class="single-room mb-50">
        <div class="room-img">
          <a href="rooms.html"
            ><img src="assets/img/rooms/room5.jpg" alt=""
          /></a>
        </div>
        <div class="room-caption">
          <h4><a href="rooms.html">Classic Double Bed</a></h4>
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
    <div class="col-xl-4 col-lg-6 col-md-6">
      <!-- Single Room -->
      <div class="single-room mb-50">
        <div class="room-img">
          <a href="rooms.html">
            <img src="assets/img/rooms/room6.jpg" alt=""
          /></a>
        </div>
        <div class="room-caption">
          <h4><a href="rooms.html">Classic Double Bed</a></h4>
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Trend6Room extends Vue {
  @Prop()
  province!: string;

  created() {
    // Gọi api lấy thông tin 6 phòng trên top của tỉnh thành phố
  }
}
</script>

<style scoped>
h4 {
  font-weight: bold;
}
h4 a:hover {
  color: #dca73a;
}
</style>
