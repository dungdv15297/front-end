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
                v-model="searchValue.type"
                :options="types"
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
                v-model="searchValue.province"
                :options="provinces"
              ></b-form-select>
            </div>
            <!-- Single Select Box -->
            <div class="single-select-box mb-30">
              <div class="boking-tittle">
                <span class="float-left">Quận huyện</span>
              </div>
              <b-form-select
                v-model="searchValue.district"
                class="nice-select"
                :options="districts"
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
import { Component, Prop, Vue } from "vue-property-decorator";
import SearchValue from './search-value';

@Component
export default class SearchRoom extends Vue {

  @Prop()
  fluid!: boolean;

  get container(): string {
    return this.fluid ? 'container-fluid' : 'container';
  }

  searchValue: SearchValue = new SearchValue();
  types: SelectType[] = [ new SelectType(0, '') ];
  provinces: SelectType[] = [ new SelectType(0, '') ];
  districts: SelectType[] = [ new SelectType(0, '') ];
  streets: SelectType[] = [ new SelectType(0, '') ];
  acreages: SelectType[] = [ new SelectType(0, '') ];
  prices: SelectType[] = [ new SelectType(0, '') ];

  created() {
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
