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

    <!-- <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info">Thống kê chi tiết tỉnh/thành phố</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" visible accordion="my-accordion-2" role="tabpanel">
          <b-card-body>
            <div class="row">
              <div class="col-md-2 col-sm-6">
                <b-form-group :label="'Tỉnh/Thành phố'" label-align="left">
                  <b-form-select
                    size="md"
                    v-model="selectedTypeOfRoom"
                    :options="['Hà nội']"
                  ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-1 col-sm-6">
                <b-form-group :label="'Năm'" label-align="left">
                  <b-form-select
                    size="md"
                    v-model="selectedTypeOfRoom"
                    :options="['2020']"
                  ></b-form-select>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <BarChart :labels="labelsHN" :datasets="datasets2"/>
              </div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div> -->
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
    return 'Thống kê phòng năm ' + this.year;
  }

  get chartMonthYear(): string {
    return 'Thống kê phòng tháng ' + this.month + '-' + this.year;
  }

  labels: string[] = [];
  label: string = '';
  backgroundColor: string[] | string = [];
  data: any[] = [];
  data1: any[] = [];
  data2: any[] = [];
  labels1: string[] = [];
  backgroundColor1: string[] =[];
  labelsHCM: string[] = [];
  labelsHN: string[] = [];
  labelsDN: string[] = [];
  priceFields:any[] = [
    { key: "id", sortable: true, label: 'Mã' },
    { key: "min", sortable: true, label: 'Tỉnh/Thành phố' },
    { key: "max", sortable: true, label: 'Đang uptop' },
    { key: "status", sortable: true, label: 'Không uptop' },
  ]
  priceItems: any[] = [];
  priceSize: number = 10;
  datasets: any[] = [];
  datasets2: any[] = [];
  datasetss: any[] = [];
  datasetsss: any[] = [];

  dataYear: any[] = [];
  dataMonth: any[] = [];
  month: number = 0;
  year: number = 0;

  created() {
    this.label = 'label';
    this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.backgroundColor = '#f87979';
    this.data = [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11];
    this.data2 = [[40,20], [20,40]]
    this.labels1 = ['Không uptop', 'Đang uptop'];
    this.backgroundColor1 = ['#f87979', '#240BF3']
    this.data1 = [40, 60];
    this.labelsHCM = ['Bình Chánh', 'Bình Tân', 'Bình Thạnh', 'Cần Giờ', 'Củ Chi', 'Gò Vấp', 'Hóc Môn', 'Nhà Bè', 'Phú Nhuận', 'Quận 1', 'Quận 10', 'Quận 11', 'Quận 12']
    this.labelsHN = ['Ba Đình', 'Ba Vì', 'Bắc Từ Liêm', 'Cầu Giấy', 'Chương Mỹ', 'Đan Phượng', 'Đông Anh', 'Đống Đa', 'Gia Lâm', 'Hà Đông', 'Hai Bà Trưng', 'Hoài Đức', 'Hoàn Kiếm', 'Hoàng Mai', 'Long Biên', 'Nam Từ Liêm', 'Phú Xuyên'];
    this.labelsDN = ['Cẩm Lệ', 'Hải Châu', 'Hòa Vang', 'Hoàng Sa', 'Liên Chiểu', 'Ngũ Hành Sơn', 'Sơn Trà', 'Thanh Khê', 'Bàu Bàng'];
    this.axios.post('/room/top3')
    this.datasets = [
      {
        label: 'Hồ Chí Minh',
        backgroundColor: this.backgroundColor,
        data: this.data
      }
    ];
    this.datasetss = [
      {
        label: 'Hà Nội',
        backgroundColor: this.backgroundColor,
        data: this.data
      }
    ];
    this.datasetsss = [
      {
        label: 'Đà Nẵng',
        backgroundColor: this.backgroundColor,
        data: this.data
      }
    ];
    this.datasets2 = [
      {
        label: 'Uptop',
        backgroundColor: '#f87979',
        data: this.data
      },
      {
        label: 'Không uptop',
        backgroundColor: '#240BF3',
        data: this.data
      }
    ];

    this.axios.get<DashboardInfor>('room/dashboardInfor').then(response => {
      if (response && response.data) {
        const data = response.data;
        this.dataYear.push(data.notUptop);
        this.dataYear.push(data.uptop);
        this.dataMonth.push(data.monthNotUptop);
        this.dataMonth.push(data.monthUptop);
        this.month = data.month;
        this.year = data.year;
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
