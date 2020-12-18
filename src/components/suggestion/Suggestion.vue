<template>
  <div class="row">
    <div class="col-xl-2 col-lg-2 col-md-3" v-for="(item, index) in displayData" :key="index" style="margin:auto">
      <!-- Single Room -->
      <a :href="'/details-room/' + item.id" style="display:unset">
        <div class="single-room mb-50" style="cursor:pointer;position:relative">
          <img src='../../assets/img/new.gif' class="new-gif img-fluid" v-if="item.isUptop"/>
          <div class="room-img">
            <a style="cursor:pointer;"><img :src="item.image" alt="" style="height:200px; background-size:cover"/></a>
          </div>
          <div class="room-caption">
            <h4><a class="limited-label" style="cursor:pointer;color:red" v-b-tooltip.hover :title="item.title">{{ item.title }}</a></h4>
            <div class="per-night">
              <label class="limited-label" style="color: #035699" v-b-tooltip.hover :title="item.contact">{{ item.contact }}</label>
              <br>
              <label class="left limited-label">{{$t('suggestion.acreage')}} {{ item.acreage }} <label>{{$t('suggestion.m2')}}</label></label>
              <br>
              <label class="left limited-label" style="color:#37a344">{{ item.price }} <label> {{$t('suggestion.price')}}</label></label>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { axiosCreator } from "@/base/customAxios";
import Room from "@/base/domains/room";
import { AxiosInstance } from "axios";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Suggestion extends Vue {
  accountId: string = '';
  displayData: DisplayData[] = [];
  
  axios: AxiosInstance = axiosCreator();
  dataList: Room[] = [];
  
  created() {
    this.accountId = this.$store.getters['accountId'];
    this.onSearch();
  }

  onSearch() {
    this.axios.post<any>('/room/suggestion', this.accountId)
    .then((response: any) => {
      if (response && response.data) {
        this.dataList = response.data.content;
        this.displayData = this.dataList.map(x => new DisplayData({
            id: x.id,
            title: x.title,
            price: x.priceMin == x.priceMax ? this.numberWithCommas(x.priceMin) : this.numberWithCommas(x.priceMin) + ' - ' +this.numberWithCommas(x.priceMax),
            acreage: x.acreageMin == x.acreageMax ? x.acreageMin.toString() : x.acreageMin + ' - ' + x.acreageMax,
            contact: x.address,
            image: x.image,
            isUptop: x.isUptop
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
</script>

<style scoped>
h4 {
  font-weight: bold;
}
h4 a:hover {
  color: #dca73a;
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
  right: 0px;
  z-index: 1;
  width: 70px;
}
</style>
