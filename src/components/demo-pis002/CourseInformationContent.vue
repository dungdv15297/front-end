.<template>
  <div class="content" ref="print">
    <div class="border-box condition">
      <dl class="box-left pis-input">
        <!-- Code -->
        <dd class="w40" v-b-tooltip.hover :title="$t('pis002.code')">{{ $t('pis002.code') }}</dd>
        <dd>
          <b-form-input
            v-model="conditions.code"
            size="sm"
            class="w150"
            :state="validation.code.rule"
            v-b-tooltip.hover.right.v-danger
            :title="validation.code.msg()">
          </b-form-input>
        </dd>
        <!-- Name -->
        <dd class="w40" v-b-tooltip.hover :title="$t('pis002.name')">{{ $t('pis002.name') }}</dd>
        <dd>
          <b-form-input
            v-model="conditions.name"
            size="sm"
            class="w150">
          </b-form-input>
        </dd>
      </dl>
      <dl class="box-right">
        <!-- Start -->
        <dd class="w40" v-b-tooltip.hover :title="$t('pis002.start')">{{ $t('pis002.start') }}</dd>
        <dd>
          <b-form-input
            v-model="conditions.startDate"
            type="date"
            size="sm"
            class="w150"
            :state="validation.startDate.rule"
            v-b-tooltip.hover.right.v-danger
            :title="validation.startDate.msg()">
          </b-form-input>
        </dd>
        <!-- End -->
        <dd class="w40" v-b-tooltip.hover :title="$t('pis002.end')">{{ $t('pis002.end') }}</dd>
        <dd>
          <b-form-input
            v-model="conditions.endDate"
            type="date"
            size="sm"
            class="w150"
            :state="validation.endDate.rule"
            v-b-tooltip.hover.right.v-danger
            :title="validation.endDate.msg()">
          </b-form-input>
        </dd>
      </dl>
      <dl class="button-right right inherit">
        <dd>
          <!-- Search -->
          <button class="pis-btn pis-btn-blue" @click="onSearchCourse"> {{ $t('pis002.search') }}</button>
        </dd>
      </dl>
    </div>
    <div class="border-box information">
      <b-table
        show-empty
        sticky-header
        no-border-collapse
        hover
        small
        :busy="isBusy"
        @row-dblclicked="dblclicked"
        :items="dataTables"
        :fields="fields"
        bordered>
        <template v-slot:table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>{{ $t('table.loading') }}</strong>
          </div>
        </template>
        <template v-slot:empty>
          <strong>{{ $t('table.emptyText') }}</strong>
        </template>
      </b-table>
      <b-pagination v-model="conditions.pageNumber" pills :total-rows="conditions.pageSize" size="sm" align="right"></b-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { dialogTypes } from "@/base/enum/dialog-types";
import BaseHelper from "@/base/BaseHelper.vue";
import Conditions from "./conditions";
import CourseDTO from '@/base/domains/course-dto';
import FilterCourseRequest from '@/base/domains/filter-course-request';
import { axiosCreator } from '@/base/customAxios';
import * as validate from "./validations";

@Component
export default class CourseInformationContent extends BaseHelper {
  validation: any = validate.validation(this);
  conditions: Conditions = new Conditions();
  isBusy: boolean = false;
  axios = axiosCreator();
  dataTables: CourseDTO[] = [];
  fields: any;

  format(value: string): string {
    return this.$moment(value).format('DD-MM-YYYY');
  }

  created() {
    this.fields = [
      { key: "id", label: this.$t("pis002.code").toString(), sortable: true },
      { key: "description", label: this.$t("pis002.desc").toString() },
      { key: "startDate", label: this.$t("pis002.start").toString() },
      { key: "endDate", label: this.$t("pis002.end").toString() },
      { key: "createdBy", label: this.$t("pis002.created").toString() },
      { key: "lastModifiedDate", label: this.$t("pis002.updated").toString() },
    ];
  }

  onSearchCourse(): void {
    this.isBusy = true;
    this.validation = validate.validation(this, this.conditions);
    if (!this.validation.isValid()) {
      this.isBusy = false;
      return;
    }
    let course = {};
    course = new FilterCourseRequest({
        id: Number(this.conditions.code),
        description: this.conditions.name,
        startDate: this.$moment(this.conditions.startDate).format('YYYY-MM-DD'),
        endDate: this.$moment(this.conditions.endDate).format('YYYY-MM-DD'),
        status: 1
    });
    // }
    this.axios.post('/api/course/get-list', {
      body: {
        course: course,
        pageSize: this.conditions.pageSize,
        pageNumber: this.conditions.pageNumber,
        orderBy: this.conditions.orderBy
      }
    })
    .then(response => {
      if (response && response.data && response.data && response.data.body && response.data.body.page) {
        this.dataTables = response.data.body.page.content;
        if (this.dataTables.length > 0) {
          this.dataTables.forEach(item => {
            // Use moment to convert data to regex MM-DD-YYYY
            item.startDate = this.$moment(item.startDate).format('MM-DD-YYYY');
            item.endDate = this.$moment(item.endDate).format('MM-DD-YYYY');
            item.lastModifiedDate = this.$moment(item.lastModifiedDate).format('MM-DD-YYYY');
          });
        }
      }
    })
    .catch(error => {
      console.log(`Error: ${error}`);
      throw error;
    })
    .finally(() => this.isBusy = false);
  }

  dblclicked(item: any) {
    this.openDialog(dialogTypes.INFORMATION, item.desc);
  }

  clearComponent(): void {
    this.conditions = new Conditions();
  }
}
</script>

<style scoped>
.condition {
  width: 585px;
  height: 100px;
}
.box-left {
  width: 215px;
}
.box-right {
  margin-left: 235px;
  width: 215px;
}
.box-left >>> .w150 {
  width: 150px;
}
.button-right {
  margin-left: 465px;
}
.information {
  margin-top: 5px;
  display: flow-root;
}
.pagination {
  float: right;
  margin-right: 5px;
}
.border-box >>> .b-table-sticky-header {
  height: 240px;
}
.w40 {
  width: 40px;
}

</style>