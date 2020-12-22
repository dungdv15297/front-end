<template>
<div ref="information" id="main">
  <div class="content">
    <div class="row">
      <div class="col-lg-2 col-md-3 col-sm-4 col-xs-5">
        <PieChart :labels="labels1" :background-color="backgroundColor1" :data="dataYear"/>
        <label>{{ chartYear }}</label>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-4 col-sm-2"></div>
      <div class="col-lg-2 col-md-3 col-sm-4 col-xs-5">
        <PieChart :labels="labels1" :background-color="backgroundColor1" :data="dataMonth"/>
        <label>{{ chartMonthYear }}</label>
      </div>
    </div>
    <TableProvince/>
    <Top3Province/>
    <ProvinceDetail/>
  </div>
</div>
</template>
 
<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { axiosCreator } from "@/base/customAxios";
import { DashboardInfor } from '@/base/response/dashboard-infor';
import { AxiosInstance } from "axios";
@Component({
  components: {
    BarChart: () => import('@/components/chart/BarChart.vue'),
    LineChart: () => import('@/components/chart/LineChart.vue'),
    PieChart: () => import('@/components/chart/PieChart.vue'),
    TableProvince: () => import('./TableProvince.vue'),
    Top3Province: () => import('./Top3Province.vue'),
    ProvinceDetail: () => import('./ProvinceDetail.vue')
  }
})
export default class Dashboard extends Vue {
  @Prop()
  mini!: boolean;

  axios: AxiosInstance = axiosCreator();

  @Watch('mini')
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["information"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["information"] as any).style.marginLeft = "250px";
    }
  }

  get chartYear(): string {
    return this.$t('dashboard.chartTitle').toString() + this.year;
  }

  get chartMonthYear(): string {
    return this.$t('dashboard.chartTitle').toString() + this.month + '-' + this.year;
  }

  label: string = '';
  labels1: string[] = [];
  backgroundColor1: string[] =[];

  dataYear: any[] = [];
  dataMonth: any[] = [];
  month: number = 0;
  year: number = 0;

  created() {
    this.label = 'label';
    this.labels1 = [this.$t('dashboard.unuptop').toString(), this.$t('dashboard.uptop').toString()];
    this.backgroundColor1 = ['#f87979', '#240BF3']

    this.axios.get<DashboardInfor>('room/dashboardInfor').then(response => {
      if (response && response.data) {
        const data = response.data;
        this.dataYear.push(data.notUptop);
        this.dataYear.push(data.uptop);
        this.dataMonth.push(data.monthNotUptop);
        this.dataMonth.push(data.monthUptop);
        this.month = new Date().getMonth();
        this.year = new Date().getFullYear();
      }
    })
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
