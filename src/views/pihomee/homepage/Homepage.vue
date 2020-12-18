<template>
  <main>
    <div class="slider-area">
      <div class="slider-active dot-style">
        <div class="single-slider hero-overly slider-height d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-xl-9">
                <div class="h1-slider-caption">
                  <h1 data-animation="fadeInUp" data-delay=".4s">{{$t('searchpage.fadeInUp')}}</h1>
                  <h3 data-animation="fadeInDown" data-delay=".4s">{{$t('searchpage.fadeInDown')}}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="!!accountId">
      <suggestion />
    </div>
    <!-- Trend Hà Nội Start -->
    <section class="room-area border-groove mt-5 pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8">
            <!--font-back-tittle  -->
            <div class="font-back-tittle mb-45">
              <div class="archivment-front">
                <h3>{{$t('homepage.topHN')}}</h3>
              </div>
            </div>
          </div>
        </div>
        <!-- 6 room in top of condition -->
        <trend-6-room :province="2"/>
        <div class="row justify-content-center">
          <div class="room-btn pt-70">
            <a href="/room?province=2" class="btn view-btn1"
              >{{$t('homepage.viewmore')}} <i class="ti-angle-right"></i>
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
                <h3>{{$t('homepage.topHCM')}}</h3>
              </div>
            </div>
          </div>
        </div>
        <trend-6-room :province="1"/>
        <div class="row justify-content-center">
          <div class="room-btn pt-70">
            <a href="/room?province=1" class="btn view-btn1"
              >{{$t('homepage.viewmore')}} <i class="ti-angle-right"></i>
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
                <h3>{{$t('homepage.topDN')}}</h3>
              </div>
            </div>
          </div>
        </div>
        <trend-6-room :province="3"/>
        <div class="row justify-content-center">
          <div class="room-btn pt-70">
            <a href="/room?province=3"  class="btn view-btn1"
              >{{$t('homepage.viewmore')}} <i class="ti-angle-right"></i>
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
              <h2>{{$t('searchpage.pihomee')}}</h2>
              <div class="caption-details">
                <p class="pera-dtails">
                  {{$t('searchpage.peradtails')}}
                </p>
                <p>
                  {{$t('searchpage.line1')}}
                  {{$t('searchpage.line2')}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Make customer End-->

    <!-- Testimonial Start -->
    <div class="border-groove testimonial-area t-padding">
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
                  <h3 class="archivment-back"></h3>
                </div>
                <!-- Testimonial Content -->
                <div class="testimonial-caption text-center">
                  <p>
                    {{ $t("about.textcmt") }}
                  </p>
                  <!-- Rattion -->
                  <div class="testimonial-ratting">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="rattiong-caption">
                    <span
                      >{{ $t("about.textUser") }},
                      <span>{{ $t("about.textRole") }}</span>
                    </span>
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
    Suggestion: () => import('@/components/suggestion/Suggestion.vue'),
    SearchRoom: () => import('@/components/search-room/SearchRoom.vue'),
    Trend6Room: () => import('@/components/trend-6room/TrendRoom.vue')
  }
})

export default class Homepage extends Vue {

  get accountId(): string {
    return this.$store.getters['accountId'];
  }

   moreRoom(province: number){
    this.$router.push('/room?province=' + province);
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
}
.slider-height {
  min-height: 400px !important;
}
</style>
