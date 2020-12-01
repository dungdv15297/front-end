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
          size="sm"
          pills
          class="m-auto"
        />
      </div>
    </div>

    <b-modal
      id="modal-update"
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
      <div class="container" style="font-family: 'Noto Serif'">
        <div class="row">
          <div class="col-7">
            <div class="row">
              <div class="col-md-4">
                <b-form-group
                  :label="$t('roomManager.province')"
                  label-align="left"
                >
                  <b-form-select
                    size="md"
                    :state="checkProvince"
                    v-b-tooltip.hover.right.v-danger
                    :title="
                      checkProvince == null || checkProvince
                        ? ''
                        : $t('roomadd.checkProvince')
                    "
                    v-model="provinceSelected"
                    :options="provinceOptions"
                  ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-4">
                <b-form-group
                  :label="$t('roomManager.district')"
                  label-align="left"
                >
                  <b-form-select
                    size="md"
                    v-model="districtSelected"
                    :options="districtOptions"
                    :state="checkDistrict"
                    v-b-tooltip.hover.right.v-danger
                    :title="
                      checkDistrict == null || checkDistrict
                        ? ''
                        : $t('roomadd.checkDistrict')
                    "
                  ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-4">
                <b-form-group
                  :label="$t('roomManager.ward')"
                  label-align="left"
                >
                  <b-form-select
                    size="md"
                    v-model="wardSelected"
                    :options="wardOptions"
                    :state="checkWard"
                    v-b-tooltip.hover.right.v-danger
                    :title="
                      checkWard == null || checkWard
                        ? ''
                        : $t('roomadd.checkWard')
                    "
                  ></b-form-select>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <b-form-group :label="$t('roomadd.detail')" label-align="left">
                  <b-form-input
                    v-model="detailInformation"
                    :disabled="!enabledDetail"
                    trim
                    @blur="focusOutDetail"
                    :state="checkDetailInformation"
                    v-b-tooltip.hover.right.v-danger
                    :title="
                      checkDetailInformation == null || checkDetailInformation
                        ? ''
                        : $t('roomadd.checkDetailInformation')
                    "
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row" style="margin-bottom: 10px">
              <div class="col-md-12">
                <b-form-input
                  trim
                  disabled
                  v-model="information"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <b-form-group
                  :label="$t('roomManager.minprice')"
                  label-align="left"
                >
                  <b-input-group size="md" :append="$t('roomadd.money')">
                    <b-form-input
                      v-model="minPrice"
                      trim
                      type="number"
                      :state="checkPrice1"
                      v-b-tooltip.hover.right.v-danger
                      :title="
                        checkPrice1 == null || checkPrice1
                          ? ''
                          : $t('roomadd.checkPrice1')
                      "
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </div>
              <div class="col-sm-12 col-md-6">
                <b-form-group
                  :label="$t('roomManager.maxprice')"
                  label-align="left"
                >
                  <b-input-group size="md" :append="$t('roomadd.money')">
                    <b-form-input
                      v-model="maxPrice"
                      trim
                      type="number"
                      :state="checkPrice2"
                      v-b-tooltip.hover.right.v-danger
                      :title="
                        checkPrice2 == null || checkPrice2
                          ? ''
                          : $t('roomadd.checkPrice2')
                      "
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <b-form-group
                  :label="$t('roomManager.minacreage')"
                  label-align="left"
                >
                  <b-input-group size="md" :append="$t('roomadd.m2')">
                    <b-form-input
                      v-model="minAcreage"
                      trim
                      type="number"
                      :state="checkAcreage1"
                      v-b-tooltip.hover.right.v-danger
                      :title="
                        checkAcreage1 == null || checkAcreage1
                          ? ''
                          : $t('roomadd.checkAcreage1')
                      "
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </div>
              <div class="col-sm-12 col-md-6">
                <b-form-group
                  :label="$t('roomManager.maxacreage')"
                  label-align="left"
                >
                  <b-input-group size="md" :append="$t('roomadd.m2')">
                    <b-form-input
                      v-model="maxAcreage"
                      trim
                      type="number"
                      :state="checkAcreage2"
                      v-b-tooltip.hover.right.v-danger
                      :title="
                        checkAcreage2 == null || checkAcreage2
                          ? ''
                          : $t('roomadd.checkAcreage2')
                      "
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <b-form-group
                  :label="$t('roomManager.typeroom')"
                  label-align="left"
                >
                  <b-form-select
                    size="md"
                    v-model="selectedTypeOfRoom"
                    :options="typeOfRoom"
                  ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-9">
                <b-form-group
                  :label="$t('roomManager.title')"
                  label-align="left"
                >
                  <b-form-input
                    v-model="title"
                    :state="checkTitle"
                    v-b-tooltip.hover.right.v-danger
                    :title="
                      checkTitle == null || checkTitle
                        ? ''
                        : $t('roomadd.checkTitle')
                    "
                    trim
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
          </div>
          <div class="col-5">
            <google-map
              :hidden-search="false"
              :draggable="true"
              :static-center="position"
              @changePlace="changePlace"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <b-form-group :label="$t('roomManager.content')" label-align="left">
              <b-form-textarea
                v-model="description"
                rows="4"
                max-rows="20"
                :state="checkContent"
                v-b-tooltip.hover.right.v-danger
                :title="
                  checkContent == null || checkContent
                    ? ''
                    : $t('roomadd.checkContent')
                "
              ></b-form-textarea>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <b-form-group :label="$t('roomManager.picture')" label-align="left">
              <div class="choose-file" @click="openChooseFile">
                <h1><b-icon icon="upload" aria-hidden="true"></b-icon></h1>
              </div>
              <input
                ref="file-input"
                type="file"
                accept=".jpg,.png,.jpeg"
                :value="image"
                style="display: none"
                @change="uploadImage"
              />
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div
            class="col-sm-3 col-md-2 col-lg-1"
            v-for="image in images"
            :key="image.index"
          >
            <div
              :style="{ backgroundImage: 'url(' + image + ')' }"
              class="image-upload"
            >
              <a class="remove-link" @click="removeImage(image)"
                ><span class="material-icons">cancel</span></a
              >
            </div>
          </div>
        </div>
        <div class="row" style="margin-top: 10px">
          <b-button variant="success" class="btn-dialog" @click="onSubmit">
            <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
            {{ $t("roomManager.submit") }}
          </b-button>
        </div>
      </div>
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

  async showModal(item: any) {
    await this.axios
      .post<any>("/room/details-room", item.id)
      .then((response) => {
        if (response && response.data) {
          this.detailData = response.data;

          this.provinceSelected = this.detailData.province.id;
          this.districtSelected = this.detailData.district.id;
          this.wardSelected = this.detailData.ward.id;
          this.title = this.detailData.title;
          this.description = this.detailData.description;
          this.selectedTypeOfRoom = this.detailData.typeOfRoom;
          this.minPrice = this.detailData.priceMin;
          this.maxPrice = this.detailData.priceMax;
          this.minAcreage = this.detailData.acreageMin;
          this.maxAcreage = this.detailData.acreageMax;
          this.images = this.detailData.pictures;
          this.imagesBase64 = this.images.map(x => x.replace(/^data:.+;base64,/, ""));
          this.position = {
            lat: this.detailData.latitude,
            lng: this.detailData.longtitude
          }
        }
      });

    this.axios.get<ProvinceResponse[]>("/province/getAll").then((res) => {
      if (res && res.data) {
        this.provinceOptions = res.data.map(
          (x) =>
            new Options({
              value: x.id,
              text: x.name,
            })
        );
        this.provinceOptions.unshift(this.defaultOption);
        this.$nextTick().then(() => this.getDistrict());
      }
    });
    this.$bvModal.show("modal-update");
  }

  async getDistrict() {
    return this.axios
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
        this.districtSelected = this.detailData.district.id;
        this.$nextTick().then(() => this.getWard());
      });
  }

  async getWard() {
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

        this.wardSelected = this.detailData.ward.id;
        this.$nextTick().then(() => {
          let index = this.detailData.address.lastIndexOf(",");
          let subStr = this.detailData.address.substring(0, index);
          index = subStr.lastIndexOf(",");
          subStr = subStr.substring(0, index);
          index = subStr.lastIndexOf(",");
          subStr = subStr.substring(0, index);
          this.detailInformation = subStr;
          this.information = this.detailData.address;
        });
      });
  }

  changePlace(place: any): void {
    this.position = place;
  }

  numberWithCommas(x: any): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  uploadImage(input: any): void {
    if (input.target.files && input.target.files[0]) {
      const vm = this;
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(input.target.files[0]);
      reader.onload = (event: any) => {
        if (vm.images.length < 6) {
          vm.images.push(event.target.result);
        }
        vm.image = null;
      };
      reader.onloadend = () => {
        if (vm.imagesBase64.length < 6) {
          const b64 = (reader as any).result.replace(/^data:.+;base64,/, "");
          vm.imagesBase64.push(b64);
        }
      };
    }
  }

  removeImage(image: any): void {
    const index = this.images.indexOf(image);
    this.images.splice(index, 1);
    this.imagesBase64.splice(index, 1);
  }

  get checkProvince(): boolean | null {
    if (!this.showTooltip) {
      return null;
    }
    return this.provinceSelected !== null;
  }
  get checkDistrict(): boolean | null {
    if (!this.showTooltip) {
      return null;
    }
    return this.districtSelected !== null;
  }
  get checkWard(): boolean | null {
    if (!this.showTooltip) {
      return null;
    }
    return this.wardSelected !== null;
  }

  get checkDetailInformation(): boolean | null {
    if (!this.showTooltip || !this.enabledDetail) {
      return null;
    }
    return this.detailInformation.length > 0;
  }

  get checkPrice2(): boolean | null {
    if (!this.showTooltip) {
      return null;
    }
    const maxPrice = this.maxPrice;
    return (
      maxPrice !== "" &&
      this.maxPrice >= this.minPrice &&
      this.maxPrice % 10000 === 0
    );
  }

  get checkPrice1(): boolean | null {
    if (!this.showTooltip) {
      return null;
    }
    const minPrice = this.minPrice;
    return minPrice !== "" && this.minPrice >= 0 && this.minPrice % 10000 === 0;
  }

  get checkAcreage1(): boolean | null {
    if (!this.showTooltip) {
      return null;
    }
    const minAcreage = this.minAcreage;
    return minAcreage !== "" && this.minAcreage > 0;
  }

  get checkAcreage2(): boolean | null {
    if (!this.showTooltip) {
      return null;
    }
    const maxAcreage = this.maxAcreage;
    return maxAcreage !== "" && this.maxAcreage >= this.minAcreage;
  }

  get checkTitle(): boolean | null {
    if (!this.showTooltip) {
      return null;
    }
    return this.title.length > 0 && this.title.length < 60;
  }

  get checkContent(): boolean | null {
    if (!this.showTooltip) {
      return null;
    }
    return this.description.length > 0;
  }

  get checkImages(): boolean {
    return this.imagesBase64.length > 0;
  }

  get isValidData(): boolean {
    return (
      this.checkImages &&
      !!this.checkContent &&
      !!this.checkTitle &&
      !!this.checkAcreage2 &&
      !!this.checkAcreage1 &&
      !!this.checkPrice2 &&
      !!this.checkPrice1 &&
      !!this.checkDetailInformation &&
      !!this.checkWard &&
      !!this.checkDistrict &&
      !!this.checkProvince
    );
  }

  get enabledDetail(): boolean {
    const result: boolean =
      !!this.provinceSelected && !!this.districtSelected && !!this.wardSelected;
    if (!result) {
      this.information = "";
      this.detailInformation = "";
    }
    return result;
  }

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
    this.detailInformation = '';
    this.information = '';

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

  openChooseFile(): void {
    (this.$refs["file-input"] as any).click();
  }

  focusOutDetail(): void {
    if (
      this.detailInformation === "" ||
      this.districtSelected === null ||
      this.provinceSelected === null ||
      this.wardSelected === null
    ) {
      return;
    }
    const ward = (this.wardOptions.find(
      (x) => x.value === this.wardSelected
    ) as Options).text;
    const district = (this.districtOptions.find(
      (x) => x.value === this.districtSelected
    ) as Options).text;
    const province = (this.provinceOptions.find(
      (x) => x.value === this.provinceSelected
    ) as Options).text;
    this.information = `${this.detailInformation}, ${ward}, ${district}, ${province}`.trim();
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

  onSubmit() {
    if (this.clickButton) {
      return;
    }
    this.clickButton = true;
    this.showTooltip = true;
    if (!this.checkImages) {
      this.$bvModal.msgBoxOk(this.$t('roomadd.checkImages').toString(), {
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true,
        noCloseOnBackdrop: true
      });
      this.clickButton = false;
    }
    if (!this.isValidData) {
      this.clickButton = false;
      return;
    }
    this.updateData();
  }

  async updateData() {
    const param: RoomRequest = new RoomRequest({
      id: this.detailData.id,
      address: this.information,
      description: this.description,
      priceMin: this.minPrice,
      priceMax: this.maxPrice,
      acreageMin: this.minAcreage,
      acreageMax: this.maxAcreage,
      longtitude: this.position.lng,
      latitude: this.position.lat,
      accountId: this.$store.getters["accountId"],
      account: { id: this.$store.getters["accountId"] },
      wardId: this.wardSelected,
      title: this.title,
      typeOfRoom: this.selectedTypeOfRoom,
    });
    const body = {
      body: {
        room: param,
      },
    };
    await this.axios.post('room/update-room', body).then((response) => {
      if (
        response &&
        response.data &&
        response.data.room &&
        response.data.room.id
      ) {
        const id = response.data.room.id;
        if (this.imagesBase64.length > 0) {
          this.axios.post(`upload/images?roomId=${id}`, this.imagesBase64);
        }
        this.$bvModal.msgBoxOk(this.$t('roomManager.success').toString(), {
          buttonSize: 'sm',
          okVariant: 'success',
          centered: true,
          noCloseOnBackdrop: true,
        }).then(() => this.$router.go(0));
      }
    });

    this.clickButton = false;
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
