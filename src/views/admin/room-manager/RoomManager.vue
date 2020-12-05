<template>
  <div ref="roomManager" id="main">
    <div class="content">
      <div class="row title mt-20 mb-20">{{ $t("roomManager.titleR") }}</div>
      <div class="row" style="min-height: 400px">
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
            <b-button variant="success" @click="uptop(row.item)">
              <b-icon icon="box-arrow-in-up" aria-hidden="true"></b-icon>
            </b-button>
            <b-button
              variant="success"
              class="icon-success"
              @click="showModal(row.item)"
            >
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
          @change="changePage"
          size="sm"
          pills
          class="m-auto"
        />
      </div>
    </div>

    <b-modal
      id="modal-update"
      @hidden="resetModal"
      modal-class="modal-update"
      size="xl"
      centered
      static
      title="Update room details"
      hide-footer
      no-close-on-backdrop
    >
      <template v-slot:modal-title>
        <strong style="font-family: 'Noto Serif'">{{
          $t("roomManager.titleUpdate")
        }}</strong>
      </template>
      <EditRoom :item="item" v-if="!!item" @update="update"/>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { axiosCreator, axiosCreatorWithMultipart } from "@/base/customAxios";
import WardResponse from "@/base/response/ward-response";
import Options from "@/base/options";
import DistrictResponse from "@/base/response/district-response";
import { TypeOfRoom } from "@/base/enum/type-of-room";
import ProvinceResponse from "@/base/response/province-response";
import Room from "@/base/domains/room";
import RoomRequest from "@/base/request/room-request";

@Component({
  components: {
    GoogleMap: () => import("@/components/map/GoogleMap.vue"),
    EditRoom: () => import('./EditRoom.vue')
  },
})
export default class RoomManager extends Vue {
  @Prop()
  mini!: boolean;
  defaultOption: Options = new Options({
    value: null,
    text: this.$t("roomadd.defaultOption").toString(),
  });
  title: string = "";
  description: string = "";
  minPrice: any = 0;
  maxPrice: any = 0;
  minAcreage: any = 0;
  maxAcreage: any = 0;
  position: any = { lat: 20.9885852, lng: 105.8058151 };
  showTooltip: boolean = false;
  clickButton: boolean = false;
  provinceSelected: any = null;
  provinceOptions: Options[] = [];
  districtSelected: any = null;
  districtOptions: Options[] = [this.defaultOption];
  wardSelected: any = null;
  wardOptions: Options[] = [this.defaultOption];
  detailInformation: string = "";
  information: string = "";
  selectedTypeOfRoom: any = 0;
  typeOfRoom: Options[] = [
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
  selectedPosting: any = 0;
  postingOptions: Options[] = [
    new Options({ value: 0, text: this.$t("roomadd.postType1").toString() }),
    new Options({ value: 1, text: this.$t("roomadd.postType2").toString() }),
  ];
  images: any[] = [];
  imagesBase64: any[] = [];
  image: any = null;
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
    },
  ];

  axios = axiosCreator();

  items: any[] = [];
  item: any = null;

  @Watch("mini")
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["roomManager"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["roomManager"] as any).style.marginLeft = "250px";
    }
  }

  async created() {
    await this.getDisplayData();
  }

  async getDisplayData() {
    const axios = axiosCreator();
    await axios
      .get(
        `/room/getPageRoom?accountId=${this.$store.getters["accountId"]}&page=${
          this.currentPage - 1
        }&size=15`
      )
      .then((response) => {
        if (response && response.data) {
          const data = response.data;
          this.totalRows = data.totalElements;
          this.items = data.content.map((x: any) => {
            return {
              accountId: x.accountId,
              id: x.id,
              title: x.title,
              price:
                x.priceMin === x.priceMax
                  ? this.numberWithCommas(x.priceMin) + "vnd"
                  : `${this.numberWithCommas(
                      x.priceMin
                    )} - ${this.numberWithCommas(x.priceMax)} vnd`,
              acreage:
                x.acreageMin === x.acreageMax
                  ? this.numberWithCommas(x.acreageMin) + "m²"
                  : `${this.numberWithCommas(
                      x.acreageMin
                    )} - ${this.numberWithCommas(x.acreageMax)} m²`,
              address: x.address,
              last_uptop:
                x.lastUpTop == null
                  ? ""
                  : this.$moment(x.lastUpTop as string).format(
                      "YYYY-MM-DD hh:mm:ss"
                    ),
              endUpTop:
                x.lastUpTop == null
                  ? ""
                  : this.$moment(x.lastUpTop as string)
                      .add(15, "days")
                      .format("YYYY-MM-DD hh:mm:ss")
            };
          });
        }
      });
  }

  async changePage() {
    await this.getDisplayData();
  }

  onDelete(item: any) {
    this.$bvModal
      .msgBoxConfirm("Xóa thông tin phòng?", {
        buttonSize: "sm",
        okVariant: "danger",
        centered: true,
        noCloseOnBackdrop: true,
      })
      .then((value) => {
        if (!value) {
          return;
        }
        this.axios.post("/room/delete", item.id).then(() =>
          this.$bvModal
            .msgBoxOk(this.$t("message.success").toString(), {
              size: "sm",
              buttonSize: "sm",
              okVariant: "success",
              centered: true,
            })
            .then(() => {
              this.getDisplayData();
            })
        );
      });
  }

  detailData: Room = new Room();

  showModal(item: any) {
    this.item = item;
    this.$bvModal.show("modal-update");
  }

  numberWithCommas(x: any): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  uptop(item: any) {
    this.axios.post<any>("/room/canbeUptop", item).then((response) => {
      if (response && response.data && response.data.accept) {
        this.$bvModal
          .msgBoxConfirm(this.$t("roomManager.uptopMsg").toString(), {
            buttonSize: "sm",
            okVariant: "success",
            centered: true,
            noCloseOnBackdrop: true,
          })
          .then((value) => {
            if (!value) {
              return;
            }
            this.axios
              .post<boolean>("/account/check-payment")
              .then((response) => {
                if (response && !!response.data) {
                  this.axios.post<any>("/room/uptop", item).then(() => {
                    this.$bvModal
                      .msgBoxOk(this.$t("roomadd.uptopDone").toString(), {
                        size: "sm",
                        buttonSize: "sm",
                        okVariant: "success",
                        headerClass: "p-2 border-bottom-0",
                        footerClass: "p-2 border-top-0",
                        centered: true,
                        noCloseOnBackdrop: true,
                      })
                      .then(() => {
                        this.clickButton = false;
                        this.getDisplayData();
                      });
                  });
                } else {
                  this.$bvModal
                    .msgBoxOk(this.$t("roomadd.notEnough").toString(), {
                      size: "sm",
                      buttonSize: "sm",
                      okVariant: "danger",
                      headerClass: "p-2 border-bottom-0",
                      footerClass: "p-2 border-top-0",
                      centered: true,
                      noCloseOnBackdrop: true,
                    })
                    .then(() => (this.clickButton = false));
                }
              });
          });
      } else {
        const time = this.$moment(response.data.time as string).format("YYYY-MM-DD hh:mm:ss");
        this.$bvModal.msgBoxConfirm(
          this.$t("roomManager.eligible").toString() + ' ' + time,
          {
            buttonSize: "sm",
            okVariant: "success",
            centered: true,
            noCloseOnBackdrop: true,
          }
        );
        return;
      }
    });
  }

  resetModal() {
    this.item = null;
    this.$nextTick();
  }

  update(done: boolean) {
    this.$bvModal.hide("modal-update");
    this.getDisplayData();
  }

}
</script>

<style scoped>
.modal-update {
  font-weight: bold;
}
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
  padding: 0.375rem 0.75rem;
}
.row >>> .icon-success {
  background: none;
  color: #28a745;
  padding: 0.375rem 0.75rem;
}
#main >>> .modal-delete {
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}
#main >>> .modal-delete .btn {
  color: #fff !important;
  padding: 15px 15px;
  font-size: 13px;
}
#main >>> .modal-delete .btn-secondary {
  background: #6c757d;
}
#main >>> .modal-delete .btn-secondary:hover {
  background: #919aa0;
}
#main >>> .modal-delete .btn-primary {
  background: #007bff;
}
#main >>> .modal-delete .btn-primary:hover {
  background: #005ab9;
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
  padding: 0.375rem 0.75rem;
}
.row >>> .btn-dialog:hover {
  background: none;
  color: #09b903;
  padding: 0.375rem 0.75rem;
}

.title {
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
  font-size: 1.5em;
  line-height: 1.3em;
  padding-bottom: 10px;
  border-bottom: 1px groove;
}
.row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.choose-file {
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  border: 1px groove;
}
.choose-file:active {
  background: rgb(241, 233, 221);
}
.image-upload {
  width: 100%;
  padding-top: 100%;
  background-size: contain;
  background-repeat: no-repeat;
}
.remove-link {
  cursor: pointer;
  color: navy;
}
.remove-link:hover {
  color: red;
}
</style>
