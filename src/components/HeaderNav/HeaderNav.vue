<template>
  <div>
    <ul class="nav header">
      <!-- navbar-left -->
      <li class="nav-item brand">
        <img src="@/assets/PIS-logo.png" class="logo" />
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="open">{{ $t('module.pis01') }}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">{{ $t('module.pis02') }}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">{{ $t('module.pis03') }}</a>
      </li>
      <!-- navbar-right -->
      <li>
        <a> {{ $t('module.account') }} &#9662;</a>
        <ul class="dropdown">
          <li>
            <a>{{ $t('module.infor') }}</a>
          </li>
          <li>
            <a>{{ $t('module.signOut') }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseHelper from "@/base/BaseHelper.vue";
import { dialogTypes } from "@/base/enum/dialog-types";

@Component
export default class PageFooter extends BaseHelper {
  mainProps = {
    blank: true,
    blankColor: "#777",
    width: 30,
    height: 30,
    class: "m1",
  };

  open() {
    this.openDialog(dialogTypes.CONFIRM, "abc");
  }
}
</script>

<style scoped>
.header {
  background-color: #ffcd39;
  border: 1px solid;
}
.logo {
  width: 90px;
  height: 40px;
}
ul {
  padding: 0;
  list-style: none;
  background: #f2f2f2;
}
ul li {
  display: inline-block;
  position: relative;
  text-align: left;
}
ul li a {
  display: block;
  padding: 8px 15px;
  color: #333;
  text-decoration: none;
}
ul li a:hover {
  background: #ffecd6;
}
ul li ul.dropdown {
  min-width: 100%; /* Set width of the dropdown */
  background: #f2f2f2;
  display: none;
  position: absolute;
  z-index: 999;
  left: 0;
}
ul li:hover ul.dropdown {
  display: block; /* Display the dropdown */
}
ul li ul.dropdown li {
  display: block;
}

.dropdown a:hover {
  background: burlywood;
  color: white;
}
</style>
