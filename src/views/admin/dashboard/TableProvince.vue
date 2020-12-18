<template>
  <div class="row mt-20">
    <div class="col-12">
      <h3 style="font-family: unset !important; text-align: left">
        <b>{{ title }}</b>
      </h3>
    </div>
    <div class="col-12">
      <b-table
        striped
        hover
        responsive
        :fields="fields"
        :items="items"
        :per-page="10"
      ></b-table>
    </div>
    <div class="col-12">
      <div class="row mb-40">
        <b-pagination size="md" pills class="m-auto"
            v-model="page"
            @change="search"
            :total-rows="totalRow"
            :per-page="10"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { axiosCreator } from "@/base/customAxios";
@Component
export default class TableProvince extends Vue {
  year = new Date().getFullYear();
  page: number = 1;
  totalRow = 0;
  fields = [
    { key: "id", sortable: true, label: this.$t('tableProvince.code').toString() },
    { key: "name", sortable: true, label: this.$t('tableProvince.province').toString() },
    { key: "uptop", sortable: true, label: this.$t('tableProvince.uptop').toString() },
    { key: "unUptop", sortable: true, label: this.$t('tableProvince.unuptop').toString() },
  ]
  items = [];
  axios = axiosCreator();

  get title(): string {
    return this.$t('tableProvince.title').toString() + new Date().getFullYear();
  }

  created() {
    this.search(1);
  }

  search(page: number) {
    this.axios.get<any>('/room/getProvinceStastical?page=' + (page - 1))
    .then(response => {
      if (response && response.data) {
        const data = response.data;
        this.totalRow = data.totalElements;
        this.items = data.content;
      }
    });
  }
}
</script>

<style scoped>
.lang-position {
  width: 100px;
  display: inline-block;
}
.flex {
  display: flex;
}
</style>
