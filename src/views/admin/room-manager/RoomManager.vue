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
          :current-page="currentPage"
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
          :total-rows="100"
          :per-page="10"
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

@Component
export default class RoomManager extends Vue {
  @Prop()
  mini!: boolean;

  currentPage: number = 1;

  emptyHtml: string =
    '<span>Chưa có tin đăng. Click <a href="#"">vào đây</a> để đăng tin</span>';

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
      key: "updated",
      sortable: true,
      label: "Ngày cập nhật",
    },
    {
      key: "status",
      label: "Trạng thái",
      sortable: true,
    },
    {
      key: "last_uptop",
      sortable: true,
      label: "Lên TOP",
    },
    {
      key: "endUpTop",
      sortable: true,
      label: "Hết hạn TOP",
    },
    {
      key: "actions",
      label: "",
    }
  ];

  items: any = [
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu1",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
    {
      title: "Phòng khép kín ngõ 75 Hồ Tùng Mậu",
      price: 4000000,
      updated: "2020 10 10",
      status: "Up top",
      last_uptop: "2020 10 10",
      endUpTop: "2020 10 11",
    },
  ];

  @Watch("mini")
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["roomManager"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["roomManager"] as any).style.marginLeft = "250px";
    }
  }

  onDelete(item: any) {
    this.$bvModal.show('modal-delete')
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
