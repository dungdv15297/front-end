<template>
<div class="content">

    <!-- slider Area Start-->
    <div class="slider-area">
        <div class="single-slider hero-overly slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-11 offset-xl-1 offset-lg-1 offset-md-1">
                        <div class="hero-caption">
                            <span>{{$t('contact.introduce')}}</span>
                            <h2>{{$t('contact.introduce2')}}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- slider Area End-->
    <section class="contact-section">
            <div class="container">
                <div class="d-none d-sm-block mb-5 pb-4">

                    <div id="map">
                        <google-map: zoom="16" :hidden-search="true" :draggable="false" :static-center="staticCenter"/>
                    </div>   

                </div> 
    

                <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">{{$t('contact.title')}}</h2>
                    </div>
                    <div class="col-lg-8">
                        <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your message'" placeholder="Enter your message"></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input class="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter the subject'" placeholder="Enter the subject">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class="button button-contactForm boxed-btn">{{$t('contact.btn')}}</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                                <h3>{{$t('contact.text1')}}</h3>
                                <p>{{$t('contact.text2')}}</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                                <h3>+84 987654321</h3>
                                <p>{{$t('contact.text3')}}</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                                <h3>support@colorlib.com</h3>
                                <p>{{$t('contact.text4')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <!-- ================ contact section end ================= -->
    
    <!-- section content hiển thị 100% width -->
    <section class="w100vw"></section>
</div>
</template>
 
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {
        GoogleMap: () => import('@/components/map/GoogleMap.vue')
    }
})
export default class Contact extends Vue {
    staticCenter: any = {
        lat: 21.03382999999999,
        lng: 105.7862219
    }
}

</script>

<style scoped>
.single-slider {
    background-image: url('../../../assets/img/hero/contact_hero.jpg');
    background-size: cover;
}
.hero-caption{
    text-align: left;
}
.contact-title{
    text-align: left;
}
.media-body{
    text-align: left;
}
#map {
    height: 400px;
    width: 100%;
}
#map >>> .vue-map-container {
    height: 400px !important;
    padding-top: 0 !important;
}
</style>
