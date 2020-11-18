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
            <div class="single-select-box mb-30 m-auto">
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
            <div class="single-select-box mb-30 m-auto">
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
            <div class="single-select-box mb-30 m-auto">
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
            <div class="single-select-box mb-30 m-auto">
              <div class="boking-tittle">
                <span class="float-left">Diện tích</span>
              </div>
              <b-form-select
                v-model="acreageSelected"
                class="nice-select"
                :options="acreageOptions"
              ></b-form-select>
            </div>
            <!-- Single Select Box -->
            <div class="single-select-box mb-30 m-auto">
              <div class="boking-tittle">
                <span class="float-left">Giá</span>
              </div>
              <b-form-select
                v-model="priceSelected"
                class="nice-select"
                :options="priceOptions"
              ></b-form-select>
            </div>
            <!-- Single Select Box -->
            <div class="single-select-box mb-30 m-auto">
              <a
                class="btn select-btn float-left mt-45"
                style="font-weight: bold; color: white"
                @click="emitData"
                >Tìm kiếm</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Booking Room End-->
</template>

<script lang='ts'>
import { axiosCreator } from "@/base/customAxios";
import { TypeOfRoom } from "@/base/enum/type-of-room";
import Options from "@/base/options";
import DistrictResponse from "@/base/response/district-response";
import ProvinceResponse from "@/base/response/province-response";
import WardResponse from "@/base/response/ward-response";
import { AxiosInstance } from "axios";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import SearchValue from "./search-value";

@Component
export default class SearchRoom extends Vue {
  @Prop()
  fluid!: boolean;

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

  get container(): string {
    return this.fluid ? "container-fluid" : "container";
  }

  searchValue: SearchValue = new SearchValue();
  acreageSelected: any = null;
  acreageOptions: SelectType[] = [new SelectType(0, "")];
  priceSelected: any = null;
  priceOptions: SelectType[] = [new SelectType(0, "")];

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
      value: TypeOfRoom.APARTMENMT,
      text: this.$t("roomadd.roomType2").toString(),
    }),
    new Options({
      value: TypeOfRoom.HOUSE,
      text: this.$t("roomadd.roomType3").toString(),
    }),
    new Options({
      value: TypeOfRoom.OFFICE,
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
  isStart = true;

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

  async created() {
    await this.axios.get<ProvinceResponse[]>("province/getAll").then((res) => {
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
    this.getAllAcreage();
    this.getAllPrice();
  }

  updated() {
    if (this.isStart && !isNaN(this.type) && this.typeOfRoom.findIndex(x => x.value == this.type)>=0) {
      this.selectedTypeOfRoom = this.type;
    }
    if (this.isStart && !isNaN(this.province) && this.provinceOptions.findIndex(x => x.value == this.province)>=0) {
      this.provinceSelected = this.province;
    }
    if (this.isStart && !isNaN(this.district) && this.districtOptions.findIndex(x => x.value == this.district)>=0) {
      this.districtSelected = this.district;
    }
    if (this.isStart && !isNaN(this.acreage) && this.acreageOptions.findIndex(x => x.value == this.acreage)>=0) {
      this.acreageSelected = this.acreage;
    }
    if (this.isStart && !isNaN(this.price) && this.priceOptions.findIndex(x => x.value == this.price)>=0) {
      this.priceSelected = this.price;
    }
    this.isStart = false;
  }

  getAllAcreage() {
    this.axios
      .get<any[]>("/master/acreage-range/getAll")
      .then((response) => {
        if (response && response.data) {
          this.acreageOptions = response.data.map(
            (x) =>
              new Options({
                value: x.id,
                text: `${x.min} - ${x.max}m²`,
              })
          );
          this.acreageOptions.unshift(this.defaultOption);
        }
      })
      .catch((error) =>
        this.$bvModal.msgBoxOk(error, {
          buttonSize: "sm",
          okVariant: "danger",
          centered: true,
          noCloseOnBackdrop: true,
        })
      );
  }

  getAllPrice() {
    this.axios
      .get<any[]>('/master/price-range/getAll')
      .then((response) => {
        this.priceOptions = response.data.map(
            (x) =>
              new Options({
                value: x.id,
                text: `${this.numberWithCommas(x.min)} - ${this.numberWithCommas(x.max)} vnd`
              })
          );
          this.priceOptions.unshift(this.defaultOption);
      })
      .catch((error) =>
        this.$bvModal.msgBoxOk(error, {
          buttonSize: "sm",
          okVariant: "danger",
          centered: true,
          noCloseOnBackdrop: true,
        })
      );
  }

  emitData() {
    this.searchValue = new SearchValue({
      type: this.selectedTypeOfRoom,
      province: this.provinceSelected,
      district: this.districtSelected,
      acreage: this.acreageSelected,
      price: this.priceSelected
    })
    this.$emit("search", this.searchValue);
  }

  numberWithCommas(x: any): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

class SelectType {
  value: number = 0;
  text: string = "";

  constructor(value: number, text?: string) {
    this.value = value;
    this.text = !!text ? text : "--------";
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
