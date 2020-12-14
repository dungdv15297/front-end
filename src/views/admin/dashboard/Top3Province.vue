<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info"> {{title}} </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="row">
            <div class="col-12" style="margin-bottom: 30px" v-for="(item, index) in dataBarChart" :key="index">
              <BarChart :labels="item.labels" :datasets="item.datasets"/>
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
import { Top3Provinces } from '@/base/response/top3-provinces';
@Component({
  components: {
    BarChart: () => import('@/components/chart/BarChart.vue')
  }
})
export default class Top3Province extends Vue {
  axios = axiosCreator();
  get title() {
    return '3 tỉnh có nhiều phòng nhất năm ' + new Date().getFullYear();
  }
  dataBarChart: DataBarChart[] = [];

  created() {
    this.axios.get<Top3Provinces[]>("/room/top3Province")
    .then(response => {
      if (response && response.data) {
        this.dataBarChart = response.data.map(item => {
          const data = new DataBarChart();
          data.labels = item.labels;
          data.datasets = [
            {
              label: item.provinceName,
              backgroundColor: '#f87979',
              data: item.data
            }
          ];
          return data;
        });
      }
    })
  }
}

class DataBarChart {
  labels: string[] = [];
  datasets: any[] = [];
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
