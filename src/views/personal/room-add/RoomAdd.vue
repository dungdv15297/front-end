<template>
  <div ref="roomManager" id="main">
    <div class="content">
      <div class="row title mt-20 mb-20">Đăng tin mới</div>
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4">
              <b-form-group label="Tỉnh/Thành phố" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group label="Quận/Huyện" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group label="Phường/Xã" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <b-form-group label="Đường/Phố" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-8">
              <b-form-group label="Chi tiết" label-align="left">
                <b-form-input trim></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <b-form-input trim disabled></b-form-input>
            </div>
          </div>
          <div class="row title mt-20 mb-20">Thông tin mô tả</div>
          <div class="row">
            <div class="col-md-4 col-sm-12">
              <b-form-group label="Loại phòng" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <b-form-group label="Tiêu đề" label-align="left">
                <b-form-input trim></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <b-form-group label="Nội dung mô tả" label-align="left">
                <b-form-textarea rows="6" max-rows="100"></b-form-textarea>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <b-form-group label="Khoảng giá" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-sm-12 col-md-4">
              <b-form-group label="Giá phòng" label-align="left">
                <b-form-input trim></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <b-form-group label="Diện tích" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-sm-12 col-md-4">
              <b-form-group label="Chi tiết" label-align="left">
                <b-form-input trim></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <b-form-group label="Đối tượng cho thuê" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
          </div>

          <div class="row title mt-20 mb-20">Chọn hình thức đăng tin</div>
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <b-form-group label="Chọn loại tin" label-align="left">
                <b-form-select size="md" :options="options"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row mb-20 mt-20">
            <div class="col-sm-12">
              <a class="btn m-auto w-100">Hoàn tất</a>
            </div>
          </div>
        </div>

        <!-- Content right -->
        <div class="col-md-4">

          AIzaSyAbgEA1vpzx8RZvd_rthfLQ1f2w-M0o_Bk
          <div class="row title mt-20 mb-20">Hình ảnh</div>
          <div class="row">
            <div class="col-sm-12">
              <b-form-group label="Thêm hình ảnh cho phòng của bạn" label-align="left">
                <div class="choose-file" @click="openChooseFile">
                  <h1><b-icon icon="upload" aria-hidden="true"></b-icon></h1>
                </div>
                <input ref="file-input" type="file" accept=".jpg,.png,.jpeg" style="display:none" @change="uploadImage">
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

    <b-modal id="modal-delete" modal-class="modal-delete" static title="Xác nhận xóa" size="sm" centered no-close-on-backdrop>
      <label>Bạn có muốn xóa bản ghi này?</label>
    </b-modal>
  </div>
</template>

<script lang="ts">
import BaseDomain from '@/base/domains/base-domain';
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
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
  background-size: cover;
}
.remove-link {
  cursor: pointer;
  color: navy;
}
.remove-link:hover {
  color: red;
}
</style>
