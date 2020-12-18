<template>
  <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info">{{$t('provinceDetail.title')}}</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" visible accordion="my-accordion-2" role="tabpanel">
          <b-card-body>
            <div class="row">
              <div class="col-md-2 col-sm-6">
                <b-form-group :label="$t('provinceDetail.province')" label-align="left">
                  <b-form-select
                    size="md"
                    v-model="selectedProvince"
                    :options="provinceOptions"
                    @change="getDetail"
                  ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-1 col-sm-6">
                <b-form-group :label="$t('provinceDetail.year')" label-align="left">
                  <b-form-select
                    size="md"
                    v-model="selectedYear"
                    :options="yearOptions"
                    @change="getDetail"
                  ></b-form-select>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <BarChart :labels="labels" :datasets="datasets" ref="provinceDetail"/>
              </div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { axiosCreator } from "@/base/customAxios";
import ProvinceResponse from "@/base/response/province-response";
import Options from "@/base/options";
import { ProvinceDetailRes } from '@/base/response/province-detail';
@Component({
  components: {
    BarChart: () => import('@/components/chart/BarChart.vue')
  }
})
export default class ProvinceDetail extends Vue {
  page: number = 1;
  axios = axiosCreator();
  provinceOptions: Options[] = [];
  selectedProvince = 1;
  yearOptions: Options[] = [];
  selectedYear: number = 0;
  labels: string[] = [];
  datasets: any[] = [];

  async created() {
    const thisYear = new Date().getFullYear();
    this.selectedYear = thisYear;
    for (let i = thisYear; i >= thisYear - 4; i--) {
      this.yearOptions.push(new Options({
        value: i,
        text: i.toString()
      }));
    }
    await this.getAllProvince();
  }

  mounted() {
    this.getDetail();
  }

  async getAllProvince() {
    this.axios.get<ProvinceResponse[]>("province/getAll").then((res) => {
      if (res && res.data) {
        this.provinceOptions = res.data.map(
          (x) =>
            new Options({
              value: x.id,
              text: x.name,
            })
        );
      }
    });
  }

  getDetail() {
    this.labels = [];
    this.datasets = [];
    this.axios.get<ProvinceDetailRes>(`room/provinceDetail?provinceId=${this.selectedProvince}&year=${this.selectedYear}`)
    .then(response => {
      if (response && response.data) {
        const data = response.data;
        this.labels = data.labels;
        this.datasets = [
          {
            label: this.$t('provinceDetail.uptop').toString(),
            backgroundColor: '#f87979',
            data: data.uptop
          },
          {
            label: this.$t('provinceDetail.unuptop').toString(),
            backgroundColor: '#240BF3',
            data: data.unuptop
          }
        ];
      }
    })
    .then(() => !!this.$refs['provinceDetail'] ? (this.$refs['provinceDetail'] as any).reRender() : '');
  }
}
</script>

<style scoped>
.btn {
  color: black !important;
  text-align: left;
  background-color: unset !important;
  background: unset !important;
}
</style>
