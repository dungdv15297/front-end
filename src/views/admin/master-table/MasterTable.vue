<template>
  <div ref="roomManager" id="main">
    <div class="content">
      <div class="w-100">
        <div class="row title mt-20 mb-20">
          {{ $t('masterTable.priceTitle') }}
          <b-button variant="success" class="icon-primary" @click="showModal(DialogMode.CREATE_PRICE)">
            <b-icon icon="plus-circle" aria-hidden="true"></b-icon>
          </b-button>
        </div>
        <div class="row">
          <b-table striped hover responsive show-empty
            :empty-html="$t('masterTable.empty')"
            :fields="priceFields"
            :items="priceItems"
            :per-page="priceSize"
          >
            <template #cell(actions)="row">
              <b-button variant="success" class="icon-success" @click="showModal(DialogMode.UPDATE_PRICE, row.item)">
                <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
              </b-button>
              <b-button v-if="row.item.status" variant="danger" @click="deletePrice(row.item)">
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
              </b-button>
              <b-button v-if="!row.item.status" @click="activePrice(row.item)">
                <b-iconstack>
                  <b-icon stacked icon="trash-fill" variant="danger"></b-icon>
                  <b-icon stacked icon="slash-circle" variant="info" scale="1.25"></b-icon>
                </b-iconstack>
              </b-button>
            </template>
          </b-table>
        </div>
        <div class="row mb-40">
          <b-pagination size="sm" pills class="m-auto"
            :total-rows="priceTotal"
            :per-page="priceSize"
            v-model="priceCurrentPage"/>
        </div>
      </div>

      <div class="w-100">
        <div class="row title mt-20 mb-20">
          {{ $t('masterTable.acreTitle') }}
          <b-button variant="success" class="icon-primary" @click="showModal(DialogMode.CREATE_ACREAGE)">
            <b-icon icon="plus-circle" aria-hidden="true"></b-icon>
          </b-button>
        </div>
        <div class="row">
          <b-table striped hover responsive show-empty
            :empty-html="$t('masterTable.empty')"
            :fields="acreFields"
            :items="acreItems"
            :per-page="acreSize"
          >
            <template #cell(actions)="row">
              <b-button variant="success" class="icon-success"  @click="showModal(DialogMode.UPDATE_ACREAGE, row.item)">
                <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
              </b-button>
              <b-button v-if="row.item.status" variant="danger" @click="deleteAcreage(row.item)">
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
              </b-button>
              <b-button v-if="!row.item.status" @click="activeAcreage(row.item)">
                <b-iconstack>
                  <b-icon stacked icon="trash-fill" variant="danger"></b-icon>
                  <b-icon stacked icon="slash-circle" variant="info" scale="1.25"></b-icon>
                </b-iconstack>
              </b-button>
            </template>
          </b-table>
        </div>
        <div class="row mb-40">
          <b-pagination size="sm" pills class="m-auto"
            :total-rows="acreTotal"
            :per-page="acreSize"
            v-model="acreCurrentPage"/>
        </div>
      </div>
      
    <b-modal id="modal" @hidden="resetModal" centered size="md" hide-footer no-close-on-backdrop>
      <template v-slot:modal-title>
        <strong style="font-family:'Noto Serif'">{{ titleDialog }}</strong>
      </template>
      <div class="container" style="font-family:'Noto Serif'">
        <div class="row">
          <div class="col-12">
            <b-form-group :label="minLabel" label-for="min">
              <b-form-input type="number" id="min" v-model="dataDialog.min"></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <b-form-group :label="maxLabel" label-for="max">
              <b-form-input type="number" id="max" v-model="dataDialog.max"></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span v-html="dialogRule" style="color: #7e7e7e;font-size: 14px;font-weight: 400;"></span>
          </div>
        </div>
        <div class="row" style="margin-top:10px">
          <b-button variant="success" class="btn-dialog" @click="onSubmit">
            <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
            {{ $t('masterTable.submit') }}
          </b-button>
        </div>
      </div>
    </b-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { axiosCreator } from '@/base/customAxios';
import { AxiosInstance } from 'axios';
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class MasterTable extends Vue {
  @Prop()
  mini!: boolean;

  DialogMode = DialogMode;

  dialogMode: number = DialogMode.CREATE_PRICE;

  get titleDialog(): string {
    return this.dialogMode === DialogMode.CREATE_PRICE
      ? this.$t('masterTable.titleDialog1').toString()
      : this.dialogMode === DialogMode.UPDATE_PRICE
        ? this.$t('masterTable.titleDialog2').toString()
        : this.dialogMode === DialogMode.CREATE_ACREAGE
          ? this.$t('masterTable.titleDialog3').toString()
          : this.dialogMode === DialogMode.UPDATE_ACREAGE
            ? this.$t('masterTable.titleDialog4').toString()
            : '';
  }

  get minLabel(): string {
    return this.dialogMode === DialogMode.CREATE_PRICE || this.dialogMode === DialogMode.UPDATE_PRICE
      ? this.$t('masterTable.pMin').toString()
      : this.$t('masterTable.aMin').toString()
  }

  get maxLabel(): string {
    return this.dialogMode === DialogMode.CREATE_PRICE || this.dialogMode === DialogMode.UPDATE_PRICE
      ? this.$t('masterTable.pMax').toString()
      : this.$t('masterTable.aMax').toString()
  }

  get dialogRule(): string {
    return this.dialogMode < 3 ? this.$t('masterTable.rule1').toString() : this.$t('masterTable.rule2').toString();
  }

  priceFields: any = [
    { key: "id", sortable: true, label: this.$t('masterTable.id').toString() },
    { key: "min", sortable: true, label: this.$t('masterTable.pMin').toString() },
    { key: "max", sortable: true, label: this.$t('masterTable.pMax').toString() },
    { key: "status", sortable: true, label: this.$t('masterTable.status').toString() },
    { key: "actions" }
  ];
  priceItems: Range[] = [];
  priceTotal: number = 0;
  priceSize: number = 10;
  priceCurrentPage: number = 1;

  acreFields: any = [
    { key: "id", sortable: true, label: this.$t('masterTable.id').toString() },
    { key: "min", sortable: true, label: this.$t('masterTable.aMin').toString() },
    { key: "max", sortable: true, label: this.$t('masterTable.aMax').toString() },
    { key: "status", sortable: true, label: this.$t('masterTable.status').toString() },
    { key: "actions" }
  ];
  acreItems: Range[] = [];
  acreTotal: number = 0;
  acreSize: number = 10;
  acreCurrentPage: number = 1;
  dataDialog: Range = {
    id: null,
    min: 0,
    max: 0,
    status: 0
  };

  axios: AxiosInstance = axiosCreator();
  @Watch('priceCurrentPage')
  findPricePage(): void {
    this.getAllPrice();
  }

  @Watch('acreCurrentPage')
  findAcreaPage(): void {
    this.getAllAcre();
  }

  created() {
    this.getAllPrice();
    this.getAllAcre();
  }

  getAllPrice(): void {
    this.axios.get<any>(`/master/price-range/getPage?page=${this.priceCurrentPage - 1}&size=${this.priceSize}`).then(response => {
      if (response && response.data) {
        const data: any = response.data;
        this.priceItems = data.content;
        this.priceItems.forEach(item => item.status = !!item.status ? this.$t('masterTable.active').toString() : '')
        this.priceTotal = data.totalElements;
      }
    })
    .catch(error =>
      this.$bvModal.msgBoxOk(error, {
        buttonSize: 'sm',
        okVariant: 'danger',
        centered: true,
        noCloseOnBackdrop: true
      }));
  }

  getAllAcre(): void {
    this.axios.get<any>(`/master/acreage-range/getPage?page=${this.acreCurrentPage - 1}&size=${this.acreSize}`).then(response => {
      if (response && response.data) {
        const data: any = response.data;
        this.acreItems = data.content;
        this.acreItems.forEach(item => item.status = !!item.status ? this.$t('masterTable.active').toString() : '')
        this.acreTotal = data.totalElements;
      }
    })
    .catch(error =>
      this.$bvModal.msgBoxOk(error, {
        buttonSize: 'sm',
        okVariant: 'danger',
        centered: true,
        noCloseOnBackdrop: true
      }));
  }

  resetModal(): void {
    this.dataDialog = {
      id: null,
      min: 0,
      max: 0,
      status: 0
    };
  }

  showModal(mode: number, data?: Range): void {
    this.dialogMode = mode;
    if (!!data) {
      this.dataDialog = data;
    }
    this.$bvModal.show('modal');
  }

  onSubmit(): void {
    if ((this.dialogMode < 3 && this.rule1()) || (this.dialogMode >= 3 && this.rule3())) {
      this.$bvModal.msgBoxOk(this.$t('masterTable.inValid').toString(), {buttonSize: 'sm', okVariant: 'danger', centered: true, noCloseOnBackdrop: true});
      return;
    }

    if (this.dialogMode === DialogMode.CREATE_PRICE || this.dialogMode === DialogMode.UPDATE_PRICE) {
      this.axios.post('/master/price-range/save', this.dataDialog)
      .then(() => {
        this.$bvModal.msgBoxOk(this.$t('masterTable.success').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
          .then(() => {
            this.getAllPrice();
            this.$bvModal.hide('modal');
          })
      })
      .catch(() => {
        this.$bvModal.msgBoxOk(this.$t('masterTable.exists').toString(), {buttonSize: 'sm', okVariant: 'danger', centered: true, noCloseOnBackdrop: true});
      });
    }

    if (this.dialogMode === DialogMode.CREATE_ACREAGE || this.dialogMode === DialogMode.UPDATE_ACREAGE) {
      this.axios.post('/master/acreage-range/save', this.dataDialog)
      .then(() => {
        this.$bvModal.msgBoxOk(this.$t('masterTable.success').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
          .then(() => {
            this.getAllAcre();
            this.$bvModal.hide('modal');
          })
      })
      .catch(() => {
        this.$bvModal.msgBoxOk(this.$t('masterTable.exists').toString(), {buttonSize: 'sm', okVariant: 'danger', centered: true, noCloseOnBackdrop: true});
      });
    }

  }

  rule1(): boolean {
    return this.dataDialog.min === 0 || this.dataDialog.min%10000 > 0
      || this.dataDialog.max === 0 || this.dataDialog.max%10000 > 0
      || Number(this.dataDialog.min) > Number(this.dataDialog.max);
  }

  rule3(): boolean {
    return Number(this.dataDialog.min) > Number(this.dataDialog.max);
  }

  deletePrice(price: Range): void {
    this.$bvModal.msgBoxConfirm(this.$t('masterTable.confirm1').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
    .then(value => {
      if (value) {
        this.axios.post('/master/price-range/delete', price.id)
          .then(() => {
            this.$bvModal.msgBoxOk(this.$t('masterTable.success').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
              .then(() => {
                this.getAllPrice();
              })
          });
      }
    })
  }

  deleteAcreage(acreage: Range): void {
    this.$bvModal.msgBoxConfirm(this.$t('masterTable.confirm1').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
    .then(value => {
      if (value) {
        this.axios.post('/master/acreage-range/delete', acreage.id)
          .then(() => {
            this.$bvModal.msgBoxOk(this.$t('masterTable.success').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
              .then(() => {
                this.getAllAcre();
              })
          });
      }
    })
  }

  activePrice(price: Range) {
    this.$bvModal.msgBoxConfirm(this.$t('masterTable.confirm2').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
    .then(value => {
      if (value) {
        this.axios.post('/master/price-range/active', price)
          .then(() => {
            this.$bvModal.msgBoxOk(this.$t('masterTable.success').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
              .then(() => {
                this.getAllPrice();
              })
          });
      }
    })
  }

  activeAcreage(acreage: Range) {
    this.$bvModal.msgBoxConfirm(this.$t('masterTable.confirm2').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
    .then(value => {
      if (value) {
        this.axios.post('/master/acreage-range/active', acreage)
          .then(() => {
            this.$bvModal.msgBoxOk(this.$t('masterTable.success').toString(), {buttonSize: 'sm', okVariant: 'success', centered: true, noCloseOnBackdrop: true})
              .then(() => {
                this.getAllAcre();
              })
          });
      }
    })
  }

  @Watch("mini")
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["roomManager"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["roomManager"] as any).style.marginLeft = "250px";
    }
  }
  
}

enum DialogMode {
  CREATE_PRICE = 1,
  UPDATE_PRICE = 2,
  CREATE_ACREAGE = 3,
  UPDATE_ACREAGE = 4
}

interface Range {
  id: number | null;
  min: number;
  max: number;
  status: number | string;
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
.row >>> .icon-success {
  background: none;
  color: #28a745;
  padding: .375rem .75rem;
}
.row >>> .icon-primary {
  background: none;
  color: #176edf;
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
