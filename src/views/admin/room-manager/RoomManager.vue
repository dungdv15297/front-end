<template>
  <div ref="roomManager" id="main">
    <div class="content">
      <div class="row title mt-20 mb-20">Quản lý tin đăng</div>
      <div class="row">
        <b-table
          striped
          hover
          responsive
          show-empty
          :empty-html="emptyHtml"
          :fields="fields"
          :items="items"
          :per-page="10"
        >
          <template #cell(actions)="row">
            <b-button variant="success" class="icon-success">
              <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
            </b-button>
            <b-button variant="danger" @click="onDelete(row.item)">
              <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
            </b-button>
          </template>
        </b-table>
      </div>
      <div class="row mb-40">
        <b-pagination 
          :total-rows="totalRows"
          :per-page="15"
          v-model="currentPage"
          size="sm" pills
          class="m-auto"/>
      </div>
    </div>

    <b-modal id="modal-delete" modal-class="modal-delete" static title="Xác nhận xóa" size="sm" centered no-close-on-backdrop>
      <label>Bạn có muốn xóa bản ghi này?</label>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { axiosCreator, axiosCreatorWithMultipart } from '@/base/customAxios';

@Component
export default class RoomManager extends Vue {
  @Prop()
  mini!: boolean;
  totalRows: number = 0;
  currentPage: number = 1;

  emptyHtml: string =
    '<span>Chưa có tin đăng. Click <a href="/room-add">vào đây</a> để đăng tin</span>';

  fields: any = [
    {
      key: "title",
      label: "Tiêu đề",
      sortable: true,
    },
    {
      key: "price",
      sortable: true,
      label: "Giá phòng",
    },
    {
      key: "acreage",
      sortable: true,
      label: "Diện tích",
    },
    {
      key: "address",
      label: "Địa chỉ",
      sortable: true,
    },
    {
      key: "last_uptop",
      sortable: true,
      label: "Ngày uptop",
    },
    {
      key: "endUpTop",
      sortable: true,
      label: "Hết hạn uptop",
    },
    {
      key: "actions",
      label: "",
    }
  ];

  items: any[] = [];

  @Watch("mini")
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["roomManager"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["roomManager"] as any).style.marginLeft = "250px";
    }
  }

  async created() {
    const axios = axiosCreator();
    await axios.get(`/room/getPageRoom?accountId=${this.$store.getters['accountId']}&page=${this.currentPage-1}&size=15`)
      .then(response => {
        if (response && response.data) {
          const data = response.data;
          this.totalRows = data.totalElements;
          this.items = data.content.map((x: any) => {
            return {
              title: x.title,
              price: x.priceMin===x.priceMax
                ? this.numberWithCommas(x.priceMin) + 'vnd'
                : `${this.numberWithCommas(x.priceMin)} - ${this.numberWithCommas(x.priceMax)} vnd`,
              acreage: x.acreageMin===x.acreageMax
                ? this.numberWithCommas(x.acreageMin) + 'm²'
                : `${this.numberWithCommas(x.acreageMin)} - ${this.numberWithCommas(x.acreageMax)} m²`,
              address: x.address,
              last_uptop: x.lastUpTop == null ? '' : this.$moment(x.lastUpTop as string).format('YYYY-MM-DD hh:mm:ss'),
              endUpTop: x.lastUpTop == null ? '' : this.$moment(x.lastUpTop as string).add(15,'days').format('YYYY-MM-DD hh:mm:ss')
            }
          });
        }
      })
  }

  onDelete(item: any) {
    this.$bvModal.show('modal-delete')
  }

  numberWithCommas(x: any): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
</script>

<style scoped>
.title {
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
  font-size: 1.5em;
  line-height: 1.3em;
}
.row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.row >>> .btn {
  background: none !important;
  color: #dc3545;
  padding: .375rem .75rem;
}
.row >>> .icon-success {
  background: none;
  color: #28a745;
  padding: .375rem .75rem;
}
#main >>> .modal-delete {
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}
#main >>> .modal-delete .btn {
  color: #fff !important;
  padding: 15px 15px;
  font-size: 13px
}
#main >>> .modal-delete .btn-secondary {
  background: #6c757d;
}
#main >>> .modal-delete .btn-secondary:hover {
  background: #919aa0;
}
#main >>> .modal-delete .btn-primary {
  background:#007bff;
}
#main >>> .modal-delete .btn-primary:hover {
  background:#005ab9;
}

</style>
