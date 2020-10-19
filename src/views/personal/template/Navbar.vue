<template>
  <div ref="main" id="main">
    <div class="content">
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="assets/img/logo/logo.png" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="material-icons"> menu </span>
        </button>
        <div class="collapse navbar-collapse row" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto"></ul>
          <form class="form-inline my-2 my-lg-0">
            <div class="dropdown">
              <a
                href="#"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="@/assets/img/team/3.png" class="avatar" />
              </a>
              <span style="font-family: cursive; margin-left: 10px"
                ><strong>Username</strong></span
              >
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item inline-flex" href="#">
                  <i class="material-icons">notifications_none</i>
                  <i class="pl-10">Thông báo</i>
                </a>
                <a class="dropdown-item inline-flex" href="#">
                  <i class="material-icons">exit_to_app</i>
                  <i class="pl-10">Đăng xuất</i>
                </a>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  @Prop()
  mini!:boolean;

  @Watch('mini')
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["main"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["main"] as any).style.marginLeft = "250px";
    }
  }
}
</script>

<style scoped>
</style>
