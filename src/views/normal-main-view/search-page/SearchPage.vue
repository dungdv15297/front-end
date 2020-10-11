<template>
  <b-container>
  </b-container>
</template>

<script lang="ts">
import BaseDomain from '@/base/domains/base-domain';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MainView extends Vue {
    @Prop()
    type?: any;
    @Prop()
    district?: any;
    @Prop()
    province?: any;
    @Prop()
    street?: any;
    @Prop()
    pr?: any;
    @Prop()
    sr?: any;
    
    propsData: PropsData = new PropsData();
    
    created() {
        this.setPropData();
    }

    /**
     * Set props data to start component
     */
    setPropData() {
        this.propsData = new PropsData({
            type: !!this.type && isNaN(this.type) ? Number(this.type) : 0,
            district: !!this.district && isNaN(this.district) ? Number(this.district) : 0,
            pr: !!this.pr && isNaN(this.pr) ? Number(this.pr) : 0,
            sr: !!this.sr && isNaN(this.sr) ? Number(this.sr) : 0
        })
        this.propsData.province = this.propsData.district > 0 && !!this.province && isNaN(this.province)
            ? Number(this.province)
            : 0;

        this.propsData.street = this.propsData.province > 0 && !!this.street && isNaN(this.street)
            ? Number(this.street)
            : 0;
    }
}

class PropsData extends BaseDomain{
    type: any;
    district: any;
    province: any;
    street: any;
    pr: any;
    sr: any;

    constructor(init?: Partial<PropsData>) {
        super();
        this.assign(init);
    }
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: #ffecd6;
  background-image: linear-gradient(#e8e7e7, #f5e0a1);
}
.logo {
  opacity: 0.7;
  margin-left: auto;
	margin-right: auto;
	display: block;
}
.home >>> .lang-position {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 150px;
}
</style>
