<template>
  <div class="content">
    <!-- slider Area Start-->
    <div class="slider-area">
      <div
        class="single-slider hero-overly slider-height2 d-flex align-items-center"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-11 offset-xl-1 offset-lg-1 offset-md-1">
              <div class="hero-caption">
                <span>{{ $t("detailsRoom.title1") }}</span>
                <h2>{{ $t("detailsRoom.title2") }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="contact-section">
      <div class="container">
        <!-- form -->
        <div class="row">
          <div class="col-12">
            <h2 class="contact-title">{{ detailData.title }}</h2>
          </div>
          <div class="col-lg-8">
            <table cellpadding="7" id="info">
              <tbody>
                <tr>
                  <td class="nameT">Địa chỉ:</td>
                  <td colspan="3">
                    <span>{{ detailData.address }}</span>
                  </td>
                </tr>
                <tr>
                  <td class="nameT">Khu vực:</td>
                  <td colspan="3">
                    <span>{{ detailArea }}</span>
                  </td>
                </tr>
                <tr>
                  <td class="nameT">Loại phòng cho thuê:</td>
                  <td colspan="3">
                    <span>{{ typeOfRoom }}</span>
                  </td>
                </tr>
                <tr>
                  <td class="nameT">Người đăng:</td>
                  <td colspan="3">
                    <span>{{ detailData.createdBy }}</span>
                  </td>
                </tr>
                <tr>
                  <td class="nameT">Điện thoại:</td>
                  <td colspan="3">
                    <h4 style="color: green; font-weight: bold">
                      <li>
                        <a rel="nofollow" :href="`tel:${detailData.phone}`">
                            {{ detailData.phone }}
                        </a>
                      </li>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td class="nameT">Diện tích:</td>
                  <td colspan="3">
                    <span>{{ detailAcreage }}</span>
                  </td>
                </tr>
                <tr>
                  <td class="nameT">Giá cho thuê:</td>
                  <td>
                    <span style="color: red">{{ detailPrice }}</span>
                  </td>
                </tr>
                <tr>
                  <td class="nameT">Ngày đăng:</td>
                  <td>
                    <span>{{ detailData.createdDate | moment('YYYY-MM-DD')  }}</span>
                  </td>
                </tr>
                <tr>
                  <td class="nameT">Cập nhật lần cuối:</td>
                  <td colspan="3">
                    <span>{{ detailData.updatedDate | moment('YYYY-MM-DD')  }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <!-- Mo ta -->
            <div class="discription">
              <div style="margin-top: 10px; margin-left: 10px">
                <p><strong>Thông tin mô tả</strong></p>
                <span style="white-space:pre-wrap;" v-html="detailData.description"></span>
                <p>---------------------------------------------------</p>
                <p>
                  Điện thoại liên hệ :
                  <span style="color: red">
                    <a rel="nofollow" :href="`tel:${detailData.phone}`">
                      {{ detailData.phone }}
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <br />
            <!-- ảnh -->
            <div class="picture">
              <p><strong>Hình ảnh</strong></p>
              <div class="slidePic">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div :class="`carousel-item ${index == 0 ? 'active' : ''}`" v-for="(item, index) in detailData.pictures" :key="index">
                      <img
                        class="d-block w-100"
                        :src="item"
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <br />
            <!-- map -->
            <div class="d-sm-block mb-5 pb-4 mapgg">
              <p><strong>Bản đồ</strong></p>
              <google-map
                :hidden-search="true"
                :draggable="false"
                :static-center="{
                  lat: latitude,
                  lng: longtitude,
                }"
              />
            </div>
          </div>
          <div class="col-lg-3 offset-lg-1">
            <div class="media contact-info">
              <span class="contact-info__icon"><i class="ti-home"></i></span>
              <div class="media-body">
                <h3>{{ $t("detailsRoom.text1") }}</h3>
                <p>{{ $t("detailsRoom.text2") }}</p>
              </div>
            </div>
            <div class="media contact-info">
              <span class="contact-info__icon"><i class="ti-tablet"></i></span>
              <div class="media-body">
                <h3>+84 987654321</h3>
                <p>{{ $t("detailsRoom.text3") }}</p>
              </div>
            </div>
            <div class="media contact-info">
              <span class="contact-info__icon"><i class="ti-email"></i></span>
              <div class="media-body">
                <h3>support@colorlib.com</h3>
                <p>{{ $t("detailsRoom.text4") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w100vw"></section>
  </div>
</template>
 
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { axiosCreator } from "@/base/customAxios";
import { AxiosInstance } from "axios";
import Room from "@/base/domains/room";
import { TypeOfRoom } from "@/base/enum/type-of-room";
@Component({
  components: {
    GoogleMap: () => import("@/components/map/GoogleMap.vue"),
  },
})
export default class DetailsRoom extends Vue {
  @Prop()
  id!: string;

  get staticCenter(): any {
    console.log(this.detailData.latitude)
    return {
      lat: this.detailData.latitude,
      lng: this.detailData.longtitude,
    };
  }

  get latitude(): number {
    return this.detailData.latitude;
  }
   
  get longtitude(): number {
    return this.detailData.longtitude;
  }

  get detailPrice(): string {
    return this.detailData.priceMin == this.detailData.priceMax
      ? this.numberWithCommas(this.detailData.priceMin) + 'vnd'
      : this.numberWithCommas(this.detailData.priceMin) + 'vnd - ' + this.numberWithCommas(this.detailData.priceMax) + 'vnd';
  }

  get detailArea(): string {
    const district = this.detailData.district;
    const province = this.detailData.province;
    if (district && province) {
      return `${district.prefix} ${district.name}, ${province.name}`;
    }
    return "";
  }

  get detailAcreage(): string {
    return this.detailData.priceMin == this.detailData.priceMax
      ? this.numberWithCommas(this.detailData.acreageMin) + 'm²'
      : this.numberWithCommas(this.detailData.acreageMin) + 'm² - ' + this.numberWithCommas(this.detailData.acreageMax) + 'm²';
  }

  get typeOfRoom(): string {
    const typeOfRoom = this.detailData.typeOfRoom;
    if (typeOfRoom == TypeOfRoom.MOTEL_ROOM) {
      return this.$t("roomadd.roomType1").toString();
    }
    if (typeOfRoom == TypeOfRoom.APARTMENMT) {
      return this.$t("roomadd.roomType2").toString();
    }
    if (typeOfRoom == TypeOfRoom.HOUSE) {
      return this.$t("roomadd.roomType3").toString();
    }
    if (typeOfRoom == TypeOfRoom.OFFICE) {
      return this.$t("roomadd.roomType4").toString();
    }
    return "";
  }

  axios: AxiosInstance = axiosCreator();

  detailData: Room = new Room();

  created() {
    this.axios.post<any>("/room/details-room", this.id).then((response) => {
      if (response && response.data) {
        this.detailData = response.data;
        console.log(this.detailData);
      }
    });
  }

  numberWithCommas(x: any): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
</script>

<style scoped>
.single-slider {
  background-image: url("../../../assets/img/hero/contact_hero.jpg");
  background-size: cover;
}
.hero-caption {
  text-align: left;
}
.contact-title {
  text-align: left;
}
.media-body {
  text-align: left;
}
table,
tr,
td {
  border: 2px solid rgba(100, 100, 100, 0.521);
  text-align: left;
}
table {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
.nameT {
  font-weight: bold;
  background-color: rgba(197, 197, 197, 0.363);
}
.discription {
  border: 2px solid rgba(100, 100, 100, 0.521);
  width: 100%;
  height: auto;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
}
.picture {
  width: 100%;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
}
.slidePic {
  width: 100%;
  height: auto;
  border: 2px solid rgba(100, 100, 100, 0.521);
}
.mapgg {
  text-align: left;
}
.mapgg >>> .vue-map-container {
  height: 400px !important;
}
</style>