<template>
  <main>
    <div class="slider-area" style="height:250px">
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
    <search-room @search="onSearch" :fluid="true" :type="type" :province="province" :district="district" :acreage="acreage" :price="price"/>
    <!-- Result list -->
    <section class="room-area border-groove mt-5 pt-5" style="padding-bottom:40px;border-bottom:1px groove">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-xl-8">
            <!--font-back-tittle  -->
            <div class="font-back-tittle mb-45">
              <div class="archivment-front">
                <h3 v-if="!listTitle">{{$t('searchpage.listTitle')}}</h3>
                <h3 v-if="listTitle">{{$t('searchpage.nonlistTitle')}}</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="(item, index) in displayData" :key="index">
            <!-- Single Room -->
            <a :href="'/details-room/' + item.id" style="display:unset">
              <div class="single-room mb-50" style="cursor:pointer;position:relative">
                <img src='../../../assets/img/new.gif' class="new-gif img-fluid" v-if="item.isUptop"/>
                <div class="room-img">
                  <a style="cursor:pointer;">
                    <img :src="item.image" style="height:230px; background-size:cover" v-if="item.status==1" alt=""/>
                    <img :src="rentedImg" style="height:230px; background-size:cover" v-if="item.status==2"/>
                  </a>
                </div>
                <div class="room-caption">
                  <h4><a class="limited-label" style="cursor:pointer;color:red">{{ item.title }}</a></h4>
                  <div class="per-night">
                    <label class="limited-label" style="color: #035699" v-b-tooltip.hover :title="item.contact">{{ item.contact }}</label>
                    <br>
                    <label class="left limited-label">{{$t('searchpage.acreage')}} {{ item.acreage }} <label>{{$t('searchpage.m2')}}</label></label>
                    <br>
                    <label class="left limited-label" style="color:#37a344">{{ item.price }} <label> {{$t('searchpage.price')}}</label></label>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="row">
          <b-pagination size="sm" pills class="m-auto"
            :total-rows="totalRows"
            @change="onSearchPage"
            :per-page="12"
            v-model="currentPage"/>
        </div>

      <!-- Pagination here -->

      </div>
    </section>
    <!-- Result List -->

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
              <h2>{{$t('searchpage.pihomee')}}</h2>
              <div class="caption-details">
                <p class="pera-dtails pr-0">
                  {{$t('searchpage.peradtails')}}
                </p>
                <p class="pr-0">
                  {{$t('searchpage.line1')}}
                  {{$t('searchpage.line2')}}
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

  rentedImg = 'data:image/png;base64,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';

  totalRows: number = 0;
  currentPage: number = 1;

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

  get accountId(): string {
    return this.$store.getters['accountId'];
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
      this.dataSearch.page = this.currentPage - 1;
    }
    this.dataSearch.accountId = this.accountId;
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
            isUptop: x.isUptop,
            status: x.status
          })
        );
      }
    });
  }

  onSearchPage(page: number) {
    this.currentPage = page;
    this.onSearch();
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
  status: number = 1;
  
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
  accountId: string | null = null;
  page: number = 0;
  size: number = 12;
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
