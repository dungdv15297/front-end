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
    <search-room @search="onSearch" :fluid="true" :type="type" :province="province" :district="district" :acreage="acreage" :price="price"/>
    <!-- Trend Đà Nẵng Start -->
    <section class="room-area border-groove mt-5 pt-5" style="padding-bottom:40px;border-bottom:1px groove">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-xl-8">
            <!--font-back-tittle  -->
            <div class="font-back-tittle mb-45">
              <div class="archivment-front">
                <h3 v-if="!listTitle">Danh sách các phòng</h3>
                <h3 v-if="listTitle">Không có phòng được tìm thấy</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="(item, index) in displayData" :key="index">
            <!-- Single Room -->
            <div class="single-room mb-50" style="position:relative" @click="goToDetail(item.id)">
              <img src='../../../assets/img/new.gif' class="new-gif img-fluid" v-if="item.isUpTop"/>
              <div class="room-img">
                <a><img :src="item.image" alt=""/></a>
              </div>
              <div class="room-caption">
                <h4><a href="#" class="limited-label" style="color:red">{{ item.title }}</a></h4>
                <div class="per-night">
                  <label class="limited-label" style="color: #035699" v-b-tooltip.hover :title="item.contact">{{ item.contact }}</label>
                  <br>
                  <label class="left">Diện tích {{ item.acreage }} <label>m2</label></label>
                  <br>
                  <label class="left" style="color:#37a344">{{ item.price }} <label> vnd/tháng</label></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <b-pagination size="sm" pills class="m-auto"
            :total-rows="totalRows"
            :per-page="20"
            v-model="currentPage"/>
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
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { axiosCreator } from '@/base/customAxios';
import { AxiosInstance } from 'axios';
import Room from '@/base/domains/room';
import BaseDomain from '@/base/domains/base-domain';

@Component({
  components: {
    SearchRoom: () => import('@/components/search-room/SearchRoom.vue'),
    Trend6Room: () => import('@/components/trend-6room/TrendRoom.vue')
  }
})
export default class SearchPage extends Vue {
  @Prop()
  type!: number;
  @Prop()
  province!: number;
  @Prop()
  district!: number;
  @Prop()
  acreage!: number;
  @Prop()
  price!: number;

  totalRows: number = 0;
  currentPage: number = 1;
  @Watch('currentPage')
  currentPageChange(): void {
    this.onSearch();
  }

  get listTitle(): boolean {
    return this.displayData.length <= 0;
  }

  axios: AxiosInstance = axiosCreator();

  dataSearch: SearchValue = new SearchValue();

  dataList: Room[] = [];
  displayData: DisplayData[] = [];

  created() {
    if (!isNaN(this.type)) {
      this.dataSearch.type = this.type;
    }
    if (!isNaN(this.province)) {
      this.dataSearch.province = this.province;
    }
    if (!isNaN(this.district)) {
      this.dataSearch.district = this.district;
    }
    if (!isNaN(this.acreage)) {
      this.dataSearch.acreage = this.acreage;
    }
    if (!isNaN(this.price)) {
      this.dataSearch.price = this.price;
    }
    this.onSearch(this.dataSearch);
  }

  onSearch(data?: SearchValue) {
    if (!!data) {
      this.dataSearch.type = data.type;
      this.dataSearch.province = data.province;
      this.dataSearch.district = data.district;
      this.dataSearch.acreage = data.acreage;
      this.dataSearch.price = data.price;
      this.dataSearch.page = 0;
    } else {
      this.dataSearch.page = this.currentPage;
    }
    this.axios.post<any>('/room/search-room-any', this.dataSearch)
    .then((response: any) => {
      if (response && response.data) {
        this.dataList = response.data.content;
        this.totalRows = response.data.totalElements;
        this.displayData = this.dataList.map(x => new DisplayData({
            id: x.id,
            title: x.title,
            price: x.priceMin == x.priceMax ? this.numberWithCommas(x.priceMin) : this.numberWithCommas(x.priceMin) + ' - ' +this.numberWithCommas(x.priceMax),
            acreage: x.acreageMin == x.acreageMax ? x.acreageMin.toString() : x.acreageMin + ' - ' + x.acreageMax,
            contact: x.address,
            image: x.image,
            isUptop: false
          })
        );
      }
    });
  }

  goToDetail(id: string) {
    this.$router.push('/details-room/'+id);
  }

  numberWithCommas(x: any): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

class DisplayData {
  id: string = '';
  title: string = '';
  price: string = '';
  acreage: string = '';
  contact: string = '';
  image: string = '';
  isUptop: boolean = false;
  
  constructor(init?: DisplayData) {
    Object.assign(this, init);
  }
}

class SearchValue {
  type: number | null = null;
  province: number | null = null;
  district: number | null = null;
  street: number | null = null;
  acreage: number | null = null;
  price: number | null = null;
  page: number = 0;
  size: number = 20;
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
.new-gif {
  position: absolute;
  top: 10px;
  right: 0;
  z-index: 1;
  width: 70px;
}
.room-img {
  height: 260px;
}
</style>
