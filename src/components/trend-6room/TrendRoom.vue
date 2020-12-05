<template>
  <div class="row">
    <div class="col-xl-4 col-lg-6 col-md-6" v-for="(item, index) in displayData" :key="index">
      <!-- Single Room -->
      <a :href="'/details-room/' + item.id" style="display:unset">
      <div class="single-room mb-50">
        <img src='../../assets/img/new.gif' class="new-gif img-fluid" v-if="item.isUptop"/>
        <div class="room-img">
          <a><img :src="item.image" alt=""/></a>
        </div>
        <div class="room-caption">
          <h4><a class="limited-label" style="cursor:pointer;color:red">{{ item.title }}</a></h4>
          <h4><a>{{item.contact}}</a></h4>
          <div class="per-night">
            <span><u>Diện tích</u>{{item.acreage}} <span>m2</span></span>
            <br>
            <span><u>VND</u>{{item.price}} <span>/ tháng</span></span>
            <br>
          </div>
        </div>
      </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { axiosCreator } from '@/base/customAxios';
import { AxiosInstance } from 'axios';
import Room from '@/base/domains/room';

@Component
export default class Trend6Room extends Vue {
  @Prop()
  province!: number;
  axios: AxiosInstance = axiosCreator();
  dataSearch: SearchValue = new SearchValue();
  dataList: Room[] = [];
  displayData: DisplayData[] = [];
  resData: DisplayData[] = [];
  created() {
    if(!this.province) {
      return;
    }
    this.dataSearch.province = this.province;
    this.axios.post<any>('/room/search-trend-room', this.dataSearch)
    .then((response: any) => {
      if (response && response.data) {
        this.dataList = response.data.content;
        this.resData = this.dataList.map(x => new DisplayData({
            id: x.id,
            title: x.title,
            price: x.priceMin == x.priceMax ? this.numberWithCommas(x.priceMin) : this.numberWithCommas(x.priceMin) + ' - ' +this.numberWithCommas(x.priceMax),
            acreage: x.acreageMin == x.acreageMax ? x.acreageMin.toString() : x.acreageMin + ' - ' + x.acreageMax,
            contact: x.address,
            image: x.image,
            isUptop: x.isUptop
          })
        );
        if (this.resData.length < 7) {
          this.displayData = this.resData;
        } else {
          this.displayData = this.resData.slice(0,6);
        }
      }
    });
  }

   numberWithCommas(x: any): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

</script>

<style scoped>
h4 {
  font-weight: bold;
}
h4 a:hover {
  color: #dca73a;
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
.limited-label {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
}
</style>
