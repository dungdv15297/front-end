<template>
  <!-- Booking Room Start-->
  <div class="booking-area">
    <div :class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="booking-wrap d-flex justify-content-between align-items-center"
          >
            <!-- Loại phòng -->
            <div class="single-select-box mb-30 mr-10">
              <div class="boking-tittle">
                <span class="float-left">Loại phòng</span>
              </div>
              <b-form-select
                class="nice-select"
                v-model="selectedTypeOfRoom"
                :options="typeOfRoom"
              ></b-form-select>
            </div>
            <!-- Single Select Box -->
            <div class="single-select-box mb-30">
              <!-- select out date -->
              <div class="boking-tittle">
                <span class="float-left">Tỉnh thành</span>
              </div>
              <b-form-select
                class="nice-select"
                v-model="provinceSelected"
                :options="provinceOptions"
              ></b-form-select>
            </div>
            <!-- Single Select Box -->
            <div class="single-select-box mb-30">
              <div class="boking-tittle">
                <span class="float-left">Quận huyện</span>
              </div>
              <b-form-select
                v-model="districtSelected"
                class="nice-select"
                :options="districtOptions"
              ></b-form-select>
            </div>
            <!-- Single Select Box -->
            <div class="single-select-box mb-30">
              <div class="boking-tittle">
                <span class="float-left">Diện tích</span>
              </div>
              <b-form-select
                v-model="searchValue.acreage"
                class="nice-select"
                :options="acreages"
              ></b-form-select>
            </div>
            <!-- Single Select Box -->
            <div class="single-select-box mb-30">
              <div class="boking-tittle">
                <span class="float-left">Giá</span>
              </div>
              <b-form-select
                v-model="searchValue.price"
                class="nice-select"
                :options="prices"
              ></b-form-select>
            </div>
            <!-- Single Select Box -->
            <div class="single-select-box mb-30">
              <a class="btn select-btn float-left mt-45" style="font-weight:bold;color:white" @click="emitData">Tìm kiếm</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Booking Room End-->
</template>

<script lang='ts'>
import { axiosCreator } from '@/base/customAxios';
import { TypeOfRoom } from '@/base/enum/type-of-room';
import Options from '@/base/options';
import DistrictResponse from '@/base/response/district-response';
import ProvinceResponse from '@/base/response/province-response';
import WardResponse from '@/base/response/ward-response';
import { AxiosInstance } from 'axios';
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import SearchValue from './search-value';

@Component
export default class SearchRoom extends Vue {

  @Prop()
  fluid!: boolean;

  get container(): string {
    return this.fluid ? 'container-fluid' : 'container';
  }

  searchValue: SearchValue = new SearchValue();
  acreageSelected: any = null;
  acreageOptions: SelectType[] = [ new SelectType(0, '') ];
  priceSelected: any = null;
  priceOptions: SelectType[] = [ new SelectType(0, '') ];

  defaultOption: Options = new Options({
    value: null,
    text: this.$t("roomadd.defaultOption").toString(),
  });
  typeOfRoom: Options[] = [
    this.defaultOption,
    new Options({
      value: TypeOfRoom.MOTEL_ROOM,
      text: this.$t("roomadd.roomType1").toString(),
    }),
    new Options({
      value: TypeOfRoom.MOTEL_ROOM,
      text: this.$t("roomadd.roomType2").toString(),
    }),
    new Options({
      value: TypeOfRoom.MOTEL_ROOM,
      text: this.$t("roomadd.roomType3").toString(),
    }),
    new Options({
      value: TypeOfRoom.MOTEL_ROOM,
      text: this.$t("roomadd.roomType4").toString(),
    }),
  ];

  provinceSelected: any = null;
  provinceOptions: Options[] = [];
  districtSelected: any = null;
  districtOptions: Options[] = [this.defaultOption];
  wardSelected: any = null;
  wardOptions: Options[] = [this.defaultOption];
  selectedTypeOfRoom: any = null;

  @Watch("provinceSelected")
  onChangeProvinceSelected() {
    if (this.provinceSelected === null) {
      this.districtOptions = [this.defaultOption];
      this.districtSelected = null;
      return;
    }
    this.axios
      .get<DistrictResponse[]>(
        `/district/getByProvinceId?provinceId=${this.provinceSelected}`
      )
      .then((res) => {
        if (res && res.data) {
          this.districtOptions = res.data.map(
            (x) =>
              new Options({
                value: x.id,
                text: x.prefix + " " + x.name,
              })
          );
          this.districtOptions.unshift(this.defaultOption);
        }
      })
      .finally(() => (this.districtSelected = null));
  }

  @Watch("districtSelected")
  onChangeDistrictSelected() {
    if (this.districtSelected === null) {
      this.wardOptions = [this.defaultOption];
      this.wardSelected = null;
      return;
    }
    this.axios
      .get<WardResponse[]>(
        `/ward/getByDistrictAndProvince?districtId=${this.districtSelected}&provinceId=${this.provinceSelected}`
      )
      .then((res) => {
        if (res && res.data) {
          this.wardOptions = res.data.map(
            (x) =>
              new Options({
                value: x.id,
                text: x.prefix + " " + x.name,
              })
          );
          this.wardOptions.unshift(this.defaultOption);
        }
      })
      .finally(() => (this.wardSelected = null));
  }

  axios: AxiosInstance = axiosCreator();

  created() {
    this.axios.get<ProvinceResponse[]>("province/getAll").then((res) => {
      if (res && res.data) {
        this.provinceOptions = res.data.map(
          (x) =>
            new Options({
              value: x.id,
              text: x.name,
            })
        );
        this.provinceOptions.unshift(this.defaultOption);
      }
    });
  }

  emitData() {
    this.$emit('search', this.searchValue);
  }
}

class SelectType {
  value: number = 0;
  text: string = '';

  constructor(value: number, text?: string) {
    this.value = value;
    this.text = !!text ? text : '--------';
  }
}
</script>

<style scoped>
.booking-wrap {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.booking-area {
  max-width: 1400px;
  margin: auto;
}
</style>
