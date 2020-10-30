<template>
  <div ref="roomManager" id="main">
    <div class="content">
      <div class="row title mt-20 mb-20"> {{ $t('roomadd.newpost') }} </div>
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4">
              <b-form-group :label="$t('roomadd.province')" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group :label="$t('roomadd.district')" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group :label="$t('roomadd.ward')" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <b-form-group :label="$t('roomadd.street')" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-8">
              <b-form-group :label="$t('roomadd.detail')" label-align="left">
                <b-form-input trim></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <b-form-input trim disabled></b-form-input>
            </div>
          </div>
          <div class="row title mt-20 mb-20">{{ $t('roomadd.description') }}</div>
          <div class="row">
            <div class="col-md-4 col-sm-12">
              <b-form-group :label="$t('roomadd.type')" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <b-form-group :label="$t('roomadd.title')" label-align="left">
                <b-form-input trim></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <b-form-group :label="$t('roomadd.content')" label-align="left">
                <b-form-textarea rows="6" max-rows="20"></b-form-textarea>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <b-form-group :label="$t('roomadd.priceRange')" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-sm-12 col-md-4">
              <b-form-group :label="$t('roomadd.price')" label-align="left">
                <b-form-input trim></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <b-form-group :label="$t('roomadd.acreageRange')" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-sm-12 col-md-4">
              <b-form-group :label="$t('roomadd.acreage')" label-align="left">
                <b-form-input trim></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <b-form-group :label="$t('roomadd.customer')" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
          </div>

          <div class="row title mt-20 mb-20">{{ $t('roomadd.posting') }}</div>
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <b-form-group :label="$t('roomadd.postingType')" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row mb-20 mt-20">
            <div class="col-sm-12">
              <a class="btn m-auto w-100">{{ $t('roomadd.submit') }}</a>
            </div>
          </div>
        </div>

        <!-- Content right -->
        <div class="col-md-4">
          <div class="row title mt-20 mb-20">{{ $t('roomadd.map') }}</div>

          <google-map :hidden-search="false" :draggable="true" @changePlace="changePlace"/>
          
          <div class="row title mt-20 mb-20">{{ $t('roomadd.picture') }}</div>
          <div class="row">
            <div class="col-sm-12">
              <b-form-group :label="$t('roomadd.addPic')" label-align="left">
                <div class="choose-file" @click="openChooseFile">
                  <h1><b-icon icon="upload" aria-hidden="true"></b-icon></h1>
                </div>
                <input ref="file-input" type="file" accept=".jpg,.png,.jpeg" :value="image" style="display:none" @change="uploadImage">
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3" v-for="image in images" :key="image.index">
              <div :style="{backgroundImage: 'url(' + image + ')'}" class="image-upload">
                <a class="remove-link" @click="removeImage(image)"><span class="material-icons">cancel</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { axiosCreator } from '@/base/customAxios';
import BaseDomain from '@/base/domains/base-domain';
import { AxiosInstance } from 'axios';
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {
    GoogleMap: () => import('@/components/map/GoogleMap.vue')
  }
})
export default class RoomAdd extends Vue {
  @Prop()
  mini!: boolean;

  @Watch("mini")
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["roomManager"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["roomManager"] as any).style.marginLeft = "250px";
    }
  }

  options = [
    { value: null, text: "Select a Fruit" },
    { value: "orange", text: "Orange" },
    { value: "grape", text: "Grape" },
    { value: "apple", text: "Apple" }
  ];

  images: any[] = [];
  image: any = null;

  axios: AxiosInstance = axiosCreator();
  
  created() {

  }

  changePlace(place: any): void {
    debugger
  }

  openChooseFile(): void {
    (this.$refs['file-input'] as any).click();
  }

  uploadImage(input: any): void {
    if (input.target.files && input.target.files[0]) {
      const reader:FileReader = new FileReader();
      reader.readAsDataURL(input.target.files[0]);
      reader.onload = (event: any) => {
        if (this.images.length < 6) {
          this.images.push(event.target.result);
        }
        this.image = null;
      }
    }
  }

  removeImage(image: any): void {
    const index = this.images.indexOf(image);
    this.images.splice(index, 1);
  }

}
</script>

<style scoped>
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
