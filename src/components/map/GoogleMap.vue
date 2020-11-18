<template>
  <div class="row">
    <div class="col-sm-12" v-if="!hiddenSearch">
      <gmap-place-input @place_changed="setPlace"
        :options="{fields: ['geometry', 'formatted_address', 'address_components']}"
        :select-first-on-enter="true" class="map-input">
      </gmap-place-input>
    </div>
    <div class="col-sm-12">
      <gmap-map :center="position" :zoom="zoomNo" map-type-id="terrain" style="width: 100%;padding-top:100%">
        <gmap-marker
          :formatted_address="address"
          :draggable="draggable"
          :position="position"
          @drag="dragMarker"
        ></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class GoogleMap extends Vue {

  @Prop()
  zoom!: number

  @Prop()
  staticCenter: any;

  @Prop()
  hiddenSearch!: boolean;
  
  @Prop()
  draggable!: boolean;

  address: string = '';

  get zoomNo(): number {
    return !!this.zoom ? this.zoom : 12;
  }

  position: any = { lat: 20.9885852, lng: 105.8058151 };

  created() {
    if (!!this.staticCenter) {
      this.position = this.staticCenter;
    }
  }

  updated() {
    if (!!this.staticCenter && this.hiddenSearch) {
      this.position = this.staticCenter;
    }
  }

  setPlace(place: any) {
    if (place && place.geometry && place.geometry.location) {
      this.position = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
    } else {
      this.$bvModal.msgBoxOk(this.$t('message.wrongAddress').toString(), {
        buttonSize: 'sm',
        okVariant: 'danger',
        centered: true,
        noCloseOnBackdrop: true
      });
    }
  }
  
  dragMarker(value: any) {
    this.position = {
      lat: value.latLng.lat(),
      lng: value.latLng.lng()
    }
    this.$emit('changePlace', this.position);
  }
}
</script>

<style scoped>
.map-input {
  width: 100%;
}
.map-input >>> input {
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>
