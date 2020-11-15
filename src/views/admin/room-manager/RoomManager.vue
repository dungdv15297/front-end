<template>
  <div ref="roomManager" id="main">
    <div class="content">
      <div class="row title mt-20 mb-20">{{ $t('roomManager.titleR') }}</div>
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
            <b-button variant="success" class="icon-success" @click="showModal( row.item)">
              <b-icon  icon="pencil-square" aria-hidden="true"></b-icon>
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
    
    <b-modal id="modal" size="xl" @hidden="resetModal" centered static title= "Update room details"  hide-footer no-close-on-backdrop >

      <div class="container" style="font-family:'Noto Serif'">
        <div class="row">
              <div class="col-md-3">
                <b-form-group :label="$t('roomManager.province')" label-align="left">
                  <b-form-select size="md" ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-3">
                <b-form-group :label="$t('roomManager.district')" label-align="left">
                  <b-form-select size="md" ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-3">
                <b-form-group :label="$t('roomManager.ward')" label-align="left">
                  <b-form-select size="md" ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-3">
                <b-form-group :label="$t('roomManager.street')" label-align="left">
                  <b-form-select size="md" ></b-form-select>
                </b-form-group>
              </div>
        </div>
        <div class="row">
              <div class="col-md-3">
                <b-form-group :label="$t('roomManager.typeroom')" label-align="left">
                  <b-form-select size="md" ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-9">
                <b-form-group :label="$t('roomManager.title')" label-align="left">
                  <b-form-input size="md"></b-form-input>
                </b-form-group>               
              </div>
            </div>
        <div class="row">
            <div class="col-sm-12">
              <b-form-group :label="$t('roomManager.content')" label-align="left">
                <b-form-textarea v-model="description" rows="4" max-rows="20"></b-form-textarea>
              </b-form-group>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-md-3">
              <b-form-group :label="$t('roomManager.minprice')" label-align="left">
                <b-input-group size="md" :append="$t('roomadd.money')">
                  <b-form-input v-model="minPrice" trim type="number"></b-form-input>
                </b-input-group>
              </b-form-group>
            </div>
            <div class="col-sm-12 col-md-3">
              <b-form-group :label="$t('roomManager.maxprice')" label-align="left">
                <b-input-group size="md" :append="$t('roomadd.money')">
                  <b-form-input v-model="minPrice" trim type="number"></b-form-input>
                </b-input-group>
              </b-form-group>
            </div>
            <div class="col-sm-12 col-md-3">
              <b-form-group :label="$t('roomManager.minacreage')" label-align="left">
                <b-input-group size="md" :append="$t('roomadd.money')">
                  <b-form-input v-model="minPrice" trim type="number"></b-form-input>
                </b-input-group>
              </b-form-group>
            </div>
            <div class="col-sm-12 col-md-3">
              <b-form-group :label="$t('roomManager.maxacreage')" label-align="left">
                <b-input-group size="md" :append="$t('roomadd.money')">
                  <b-form-input v-model="minPrice" trim type="number"></b-form-input>
                </b-input-group>
              </b-form-group>
            </div>
        </div>
         <div class="row">
              <div class="col-md-4">
                <b-form-group :label="$t('roomManager.posttype')" label-align="left">
                  <b-form-select size="md" ></b-form-select>
                </b-form-group>
              </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <b-form-group :label="$t('roomManager.picture')" label-align="left">
                <div class="choose-file">
                  <h1><b-icon icon="upload" aria-hidden="true"></b-icon></h1>
                </div>
                <input ref="file-input" type="file" accept=".jpg,.png,.jpeg" :value="image" style="display:none" @change="uploadImage">
              </b-form-group>
            </div>
          </div>
          <div class="row" style="margin-top:10px">
            <b-button variant="success" class="btn-dialog" @click="onSubmit">
              <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
              {{ $t('roomManager.submit') }}
           </b-button>
        </div>
      </div>
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

  created() {
    const axios = axiosCreator();
    axios.get(`/room/getPageRoom?accountId=${this.$store.getters['accountId']}&page=0&size=10`)
  }

  onDelete(item: any) {
    this.$bvModal.show('modal-delete')
  }
  showModal(item: any) {
    this.$bvModal.show('modal');
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
.choose-file {
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  border: 1px groove;
}
.row >>> .btn-dialog {
  background: none;
  color: #009222;
  padding: .375rem .75rem;
}
.row >>> .btn-dialog:hover {
  background: none;
  color: #09b903;
  padding: .375rem .75rem;
}

</style>
