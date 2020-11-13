<template>
  <div ref="roomManager" id="main">
    <div class="content">
      <div class="row title mt-20 mb-20"> {{ $t('roomadd.newpost') }} </div>
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4">
              <b-form-group :label="$t('roomadd.province')" label-align="left">
                <b-form-select size="md" v-model="provinceSelected" :options="provinceOptions"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group :label="$t('roomadd.district')" label-align="left">
                <b-form-select size="md" v-model="districtSelected" :options="districtOptions"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group :label="$t('roomadd.ward')" label-align="left">
                <b-form-select size="md" v-model="wardSelected" :options="wardOptions"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <b-form-group :label="$t('roomadd.street')" label-align="left">
                <b-form-select size="md" v-model="streetSelected" :options="streetOptions"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-8">
              <b-form-group :label="$t('roomadd.detail')" label-align="left">
                <b-form-input v-model="detailInformation" :disabled="!enabledDetail" trim @blur="focusOutDetail"></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <b-form-input trim disabled v-model="information"></b-form-input>
            </div>
          </div>
          <div class="row title mt-20 mb-20">{{ $t('roomadd.description') }}</div>
          <div class="row">
            <div class="col-md-4 col-sm-12">
              <b-form-group :label="$t('roomadd.type')" label-align="left">
                <b-form-select size="md" v-model="selectedTypeOfRoom" :options="typeOfRoom"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <b-form-group :label="$t('roomadd.title')" label-align="left">
                <b-form-input v-model="title" trim></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <b-form-group :label="$t('roomadd.content')" label-align="left">
                <b-form-textarea v-model="description" rows="6" max-rows="20"></b-form-textarea>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <b-form-group :label="$t('roomadd.price1')" label-align="left">
                <b-input-group size="md" :append="$t('roomadd.money')">
                  <b-form-input v-model="minPrice" trim type="number"></b-form-input>
                </b-input-group>
              </b-form-group>
            </div>
            <div class="col-sm-12 col-md-4">
              
              <b-form-group :label="$t('roomadd.price2')" label-align="left">
                <b-input-group size="md" :append="$t('roomadd.money')">
                  <b-form-input v-model="maxPrice" trim type="number"></b-form-input>
                </b-input-group>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <b-form-group :label="$t('roomadd.acreage1')" label-align="left">
                <b-input-group size="md" :append="$t('roomadd.m2')">
                  <b-form-input v-model="minAcreage" trim type="number"></b-form-input>
                </b-input-group>
              </b-form-group>
            </div>
            <div class="col-sm-12 col-md-4">
              <b-form-group :label="$t('roomadd.acreage2')" label-align="left">
                <b-input-group size="md" :append="$t('roomadd.m2')">
                  <b-form-input v-model="maxAcreage" trim type="number"></b-form-input>
                </b-input-group>
              </b-form-group>
            </div>
          </div>

          <div class="row title mt-20 mb-20">{{ $t('roomadd.posting') }}</div>
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <b-form-group :label="$t('roomadd.postingType')" label-align="left">
                <b-form-select size="md" v-model="selectedPosting" :options="postingOptions"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row mb-20 mt-20">
            <div class="col-sm-12">
              <a class="btn m-auto w-100" @click="addRoom">{{ $t('roomadd.submit') }}</a>
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
import { axiosCreator, axiosCreatorWithMultipart } from '@/base/customAxios';
import BaseDomain from '@/base/domains/base-domain';
import { AxiosInstance } from 'axios';
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ProvinceResponse from '@/base/response/province-response';
import DistrictResponse from '@/base/response/district-response';
import WardResponse from '@/base/response/ward-response';
import Options from '@/base/options';
import {TypeOfRoom} from '@/base/enum/type-of-room';
import RoomRequest from '@/base/request/room-request';

@Component({
  components: {
    GoogleMap: () => import('@/components/map/GoogleMap.vue')
  }
})
export default class RoomAdd extends Vue {
  @Prop()
  mini!: boolean;

  title: string = '';
  description: string = '';
  minPrice: number = 0;
  maxPrice: number = 0;
  minAcreage: number = 0;
  maxAcreage: number = 0;
  position: any = { lat: 20.9885852, lng: 105.8058151 };

  @Watch("mini")
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["roomManager"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["roomManager"] as any).style.marginLeft = "250px";
    }
  }

  get enabledDetail(): boolean {
    const result: boolean = !!this.streetSelected && !!this.provinceSelected && !!this.districtSelected && !!this.wardSelected;
    if (!result) {
      this.information = '';
      this.detailInformation = '';
    }
    return result;
  }

  defaultOption: Options = new Options({
    value: null,
    text: this.$t('roomadd.defaultOption').toString()
  });

  provinceSelected: any = null;
  provinceOptions: Options[] = [];
  @Watch('provinceSelected')
  onChangeProvinceSelected() {
    if (this.provinceSelected === null) {
      this.districtOptions = [this.defaultOption];
      this.districtSelected = null;
      return;
    }
    this.axios.get<DistrictResponse[]>(`/district/getByProvinceId?provinceId=${this.provinceSelected}`)
    .then(res => {
      if (res && res.data) {
        this.districtOptions = res.data.map(x => new Options({
          value: x.id,
          text: x.prefix + ' ' + x.name
        }));
        this.districtOptions.unshift(this.defaultOption);
      }
    })
    .finally(() => this.districtSelected = null);
  }

  districtSelected: any = null;
  districtOptions: Options[] = [this.defaultOption];
  @Watch('districtSelected')
  onChangeDistrictSelected() {
    if (this.districtSelected === null) {
      this.wardOptions = [this.defaultOption];
      this.wardSelected = null;
      this.streetOptions = [this.defaultOption];
      this.streetSelected = null;
      this.detailInformation = '';
      return;
    }
    this.axios.get<DistrictResponse[]>(`/street/getByDistrictAndProvince?districtId=${this.districtSelected}&provinceId=${this.provinceSelected}`)
    .then(res => {
      if (res && res.data) {
        this.streetOptions = res.data.map(x => new Options({
          value: x.id,
          text: x.prefix + ' ' + x.name
        }));
        this.streetOptions.unshift(this.defaultOption);
      }
    })
    .finally(() => this.streetSelected = null);

    this.axios.get<WardResponse[]>(`/ward/getByDistrictAndProvince?districtId=${this.districtSelected}&provinceId=${this.provinceSelected}`)
    .then(res => {
      if (res && res.data) {
        this.wardOptions = res.data.map(x => new Options({
          value: x.id,
          text: x.prefix + ' ' + x.name
        }));
        this.wardOptions.unshift(this.defaultOption);
      }
    })
    .finally(() => this.wardSelected = null);
  }

  wardSelected: any = null;
  wardOptions: Options[] = [this.defaultOption];
  streetSelected: any = null;
  streetOptions: Options[] = [this.defaultOption];

  detailInformation: string = '';
  information: string = '';

  selectedTypeOfRoom: any = null;
  typeOfRoom: Options[] = [
    this.defaultOption,
    new Options({ value: TypeOfRoom.MOTEL_ROOM, text: this.$t('roomadd.roomType1').toString() }),
    new Options({ value: TypeOfRoom.MOTEL_ROOM, text: this.$t('roomadd.roomType2').toString() }),
    new Options({ value: TypeOfRoom.MOTEL_ROOM, text: this.$t('roomadd.roomType3').toString() }),
    new Options({ value: TypeOfRoom.MOTEL_ROOM, text: this.$t('roomadd.roomType4').toString() })
  ];

  selectedPosting: any = 0;
  postingOptions: Options[] = [
    new Options({ value: 0, text: this.$t('roomadd.postType1').toString() }),
    new Options({ value: 1, text: this.$t('roomadd.postType2').toString() })
  ];

  images: any[] = [];
  imagesBase64: any[] = [];
  image: any = null;

  axios: AxiosInstance = axiosCreator();
  
  created() {
    this.axios.get<ProvinceResponse[]>('province/getAll').then(res => {
      if (res && res.data) {
        this.provinceOptions = res.data.map(x => new Options({
          value: x.id,
          text: x.name
        }));
        this.provinceOptions.unshift(this.defaultOption);
      }
    });
  }

  changePlace(place: any): void {
    this.position = place;
  }

  openChooseFile(): void {
    (this.$refs['file-input'] as any).click();
  }

  uploadImage(input: any): void {
    if (input.target.files && input.target.files[0]) {
      const vm = this;
      const reader:FileReader = new FileReader();
      reader.readAsDataURL(input.target.files[0]);
      reader.onload = (event: any) => {
        if (vm.images.length < 6) {
          vm.images.push(event.target.result);
        }
        vm.image = null;
      }
      reader.onloadend = () => {
        if (vm.imagesBase64.length < 6) {
          const b64 = (reader as any).result.replace(/^data:.+;base64,/, '');
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

  focusOutDetail(): void {
    if (this.detailInformation === '' || this.streetSelected === null || this.districtSelected === null || this.provinceSelected === null || this.wardSelected === null) {
      return;
    }
    const street = (this.streetOptions.find(x => x.value === this.streetSelected) as Options).text;
    const ward = (this.wardOptions.find(x => x.value === this.wardSelected) as Options).text;
    const district = (this.districtOptions.find(x => x.value === this.districtSelected) as Options).text;
    const province = (this.provinceOptions.find(x => x.value === this.provinceSelected) as Options).text;
    this.information = `${this.detailInformation} ${street}, ${ward}, ${district}, ${province}`.trim();
  }

  addRoom(): void {
    const param: RoomRequest = new RoomRequest({
      address: this.information,
      description: this.description,
      priceMin: this.minPrice,
      priceMax: this.maxPrice,
      acreageMin: this.minAcreage,
      acreageMax: this.maxAcreage,
      longtitude: this.position.lng,
      latitude: this.position.lat,
      accountId: this.$store.getters['accountId'],
      streetId: this.streetSelected,
      account: { id: this.$store.getters['accountId'] },
      street: { id: this.streetSelected },
      upTopStatus: this.selectedPosting,
      title: this.title,
      typeOfRoom: this.selectedTypeOfRoom
    });
    this.axios.post('/room/add-room', { body: {room: param} });
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
