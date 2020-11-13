<template>
  <div class="body">
    <Preloader />
    <Sidebar @toggleSidebar="toggleSidebar"/>
    <Navbar :mini="mini"/>
    <Information :mini="mini" v-if="showInfor"/>
    <RoomManager :mini="mini" v-if="showRoom"/>
    <RoomAdd :mini="mini" v-if="showAddRoom"/>
    <MasterTable :mini="mini" v-if="showMasterTable"/>
    <Footer :mini="mini"/>
    <section class="w100vw"></section>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {
    Preloader: () => import('@/views/pihomee/template/Preloader.vue'),
    Footer: () => import('./template/Footer.vue'),
    Sidebar: () => import('./template/Sidebar.vue'),
    Navbar: () => import('./template/Navbar.vue'),
    Information: () => import('./information/Information.vue'),
    RoomManager: () => import('./room-manager/RoomManager.vue'),
    RoomAdd: () => import('./room-add/RoomAdd.vue'),
    MasterTable: () => import('./master-table/MasterTable.vue')
  }
})
export default class Admin extends Vue {
  @Prop()
  mode?: number;

  showInfor: boolean = false;
  showRoom: boolean = false;
  showAddRoom: boolean = false;
  showMasterTable: boolean = false;

  mini: boolean = true;

  created() {
    if (this.mode === 1) { // show information personal
      this.showInfor = true;
    }
    if (this.mode === 2) { //show room manager
      this.showRoom = true;
    }
    if (this.mode === 3) { //show room add
      this.showAddRoom = true;
    }
    if (this.mode === 4) { //show master table
      this.showMasterTable = true;
    }
  }

  toggleSidebar(mini:boolean) {
    this.mini = mini;
  }
}
</script>

<style>
.navbar-toggler {
  color: black;
  border: 0;
}
a {
  display: inline-block;
  clear: both;
  margin-top: 10px;
}
.inline-flex {
  display: inline-flex;
}
#sideBar {
  font-family: "Noto Serif", serif;
}
.icon-text {
  display: none;
  margin-left: 10px;
}
#mySidebar:hover .icon-text {
  display: inline-block;
}
#mySidebar:hover i {
  float: right;
  margin-right: 15px;
}
#mySidebar:hover a {
  text-align: left;
  margin-left: 15px;
}
.sidebar {
  height: 100%;
  width: 85px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: linear-gradient(#000 0%, #888 100%);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  white-space: nowrap;
}

.sidebar a {
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  font-size: 15px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.material-icons {
  padding-bottom: 3px;
}

#main {
  transition: margin-left 0.5s;
  margin-left: 100px;
}
#main .content {
  margin-left: 5%;
  margin-right: 5%;
  border-bottom: 1px groove;
}
.avatar {
  border-radius: 100%;
  width: 25px;
  height: 25px;
  border: 0px;
}
.dropdown-menu a:hover {
  color: #f1b233;
}
.dropdown-menu {
  left: -100px !important;
}
</style>
