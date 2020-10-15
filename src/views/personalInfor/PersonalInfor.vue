<template>
  <!-- Dùng container fluid là full màn -->
  <b-container fluid>
    <b-container fluid>
      <!-- Chia container thành 2 bên trái phải -->
      <b-row class="rowNav">
        <!-- Left -->
        <b-col sm="3">
          <!-- Trong left dung container de chia layout tiep -->
          <b-container fluid>
            <!-- Logo -->
            <b-row>
              <b-col>
                <b-nav>
                  <b-nav-item style="font-size: 18px"
                    ><strong>Pihomee</strong></b-nav-item
                  >
                </b-nav>
              </b-col>
            </b-row>
          </b-container>
        </b-col>

        <!-- Right -->
        <b-col cols="9">
          <b-container fluid>
            <b-nav>
              <b-nav-item>Trang chủ</b-nav-item>
              <b-nav-item>Phòng trọ</b-nav-item>
              <b-nav-item>Nhà cho thuê</b-nav-item>
            </b-nav>
          </b-container>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid>
      <b-row>
        <!-- Left -->
        <b-col sm="3" class="colUser">
          <b-container fluid>
            <!-- Logo User-->
            <b-row style="margin-top: 20px">
              <b-col md="4">
                <b-img
                  src="https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png"
                  alt="user"
                  width="60px"
                  height="60px"
                >
                </b-img>
              </b-col>
              <b-col md="8"">
                <strong style="margin-left: 15px; font-size: 18px; color: black"
                  ><span id="name">Hiển thị tên user</span></strong
                >
                <p>
                  <span
                    id="phone"
                    style="margin-left: 15px; color: black; white-space: nowrap"
                    >Hiển thị Phone</span
                  >
                </p>
              </b-col>
            </b-row>
            <b-row>
              <h6 style="color: black">
                Mã thành viên : <strong><span id="userid"></span></strong>
              </h6>
            </b-row>
            <b-row>
              <h6 style="color: black">
                Số dư : <strong><span id="balance"></span></strong>
              </h6>
            </b-row>
            <b-row>
              <b-button variant="danger">Đăng tin</b-button> </b-row
            ><br />
            <!-- Navbar -->
            <b-row>
              <b-list-group style="text-align: left; width:350px;">
                <b-list-group-item href="#"
                  ><span style="margin-right: 5px" class="h5 mb-2"
                    ><b-icon icon="file-earmark-text"></b-icon
                  ></span>
                  Quản lý tin đăng</b-list-group-item
                >
                <b-list-group-item href="#"
                  ><span style="margin-right: 5px" class="h5 mb-2"
                    ><b-icon icon="pencil-square"></b-icon
                  ></span>
                  Sửa thông tin cá nhân</b-list-group-item
                >
                <b-list-group-item href="#"
                  ><span style="margin-right: 5px" class="h5 mb-2"
                    ><b-icon icon="calendar4"></b-icon
                  ></span>
                  Lịch sử thanh toán</b-list-group-item
                >
                <b-list-group-item href="#"
                  ><span style="margin-right: 5px" class="h5 mb-2"
                    ><b-icon icon="box-arrow-right"></b-icon
                  ></span>
                  Đăng xuất</b-list-group-item
                >
              </b-list-group>
            </b-row>
          </b-container>
        </b-col>

        <!-- Right -->
        <b-col cols="9" style="text-align: left">
          <b-container fluid>
            <h3>
              <strong style="line height:30px;"
                >Cập nhật thông tin thành viên</strong
              >
            </h3>
            <hr />
            <br />
            <b-form-group
              label-cols="4"
              label-cols-lg="2"
              label="Mã thành viên"
              label-for="input-userid"
            >
              <b-form-input id="userid" readonly></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="4"
              label-cols-lg="2"
              label="Họ tên"
              label-for="input-name"
            >
              <b-form-input id="name"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="4"
              label-cols-lg="2"
              label="Ngày sinh"
              label-for="input-birthday"
            >
              <b-form-input id="birthday"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="4"
              label-cols-lg="2"
              style="border: none"
              label="Giới tính"
              label-for="radio-gender"
            >
              <b-form-radio-group
                id="gender"
                :options="['Nam', 'Nữ', 'Khác']"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              label-cols="4"
              label-cols-lg="2"
              label="Địa chỉ"
              label-for="input-default"
            >
              <b-form-input id="adress"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="4"
              label-cols-lg="2"
              label="Email"
              label-for="input-default"
            >
              <b-form-input
                id="email"
                placeholder="nguyenvana@gmail.com"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="4"
              label-cols-lg="2"
              label="Số điện thoại"
              label-for="input-default"
            >
              <b-form-input id="phone"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="4"
              label-cols-lg="2"
              label="Trạng thái"
              label-for="input-default"
            >
              <b-form-input id="status"></b-form-input>
            </b-form-group>
            <b-button variant="primary" style="width: 100%; margin-top: 15px"
              >Cập nhật</b-button
            >
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PersonalInfor extends Vue {
  // Phần này là logic
}
</script>

<style scoped>
/* Phần này là css */
.rowNav {
  white-space: nowrap;
  background-color: rgb(151, 151, 214);
  line-height: 30px;
  color: #fff;
}

.colUser {
  background-color: rgba(44, 44, 44, 0.055);
  border-right: 1px solid rgba(29, 29, 29, 0.11);
}
</style>
