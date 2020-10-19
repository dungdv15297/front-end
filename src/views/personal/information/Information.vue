<template>
  <div ref="information" id="main">
    <div class="content">
      
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {
  @Prop()
  mini!: boolean;

  @Watch('mini')
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["information"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["information"] as any).style.marginLeft = "250px";
    }
  }
}
</script>

<style scoped>
</style>
