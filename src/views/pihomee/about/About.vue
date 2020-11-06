<template>
    <div class="content">
        <!-- slider Area Start-->
        <div class="slider-area">
            <div class="single-slider hero-overly slider-height2 d-flex align-items-center" >
                <div class="container">
                    <div class="row ">
                        <div class="col-md-11 offset-xl-1 offset-lg-1 offset-md-1">
                            <div class="hero-caption">
                                <span>{{ $t('about.introduce') }}</span>
                                <h2> {{ $t('about.introduce2') }} </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- slider Area End-->


        <!-- Make customer Start-->
        <section class="make-customer-area customar-padding fix">
            <div class="container-fluid p-0">
                <div class="row">
                   <div class="col-xl-5 col-lg-6">
                        <div class="customer-img mb-120">
                            <img src="assets/img/customer/customar1.png" class="customar-img1" alt="">
                            <img src="assets/img/customer/customar2.png" class="customar-img2" alt="">
                            <div class="service-experience heartbeat">
                                <h3>{{ $t('about.title1') }}</h3>
                            </div>
                        </div>
                   </div>
                    <div class=" col-xl-4 col-lg-4">
                        <div class="customer-caption">
                            <span>{{ $t('about.aboutCompany1') }}</span>
                            <h2>{{ $t('about.aboutTitle1') }}</h2>
                            <div class="caption-details">
                                <p class="pera-dtails">{{ $t('about.content1') }} </p>
                                <p>{{ $t('about.contentt1') }}</p>
                                <a href="#" class="btn more-btn1">{{$t('about.btn1')}} <i class="ti-angle-right"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Make customer End-->


        <!-- Gallery img Start  -->
         <div class="gallery-area g-padding fix">
            <div class="container-fluid p-0">
                <div class="row">
                    <div class="col-md-12">

                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img class="d-block w-100" src="../../../assets/img/hero/servicespage_hero.jpg" alt="First slide">
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" src="../../../assets/img/hero/contact_hero.jpg" alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" src="../../../assets/img/hero/roomspage_hero.jpg" alt="Third slide">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Gallery img End--> 
        <!-- Dining Start -->
        <div class="dining-area d-padding">
            <!-- Single Left img -->
            <div class="single-dining-area left-img">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-lg-8 col-md-8">
                            <div class="dining-caption">
                                <span>{{ $t('about.aboutCompany2') }}</span>
                                <h3>{{$t('about.abouttitle2')}}</h3>
                                <p>{{$t('about.content2')}}</p>
                                <a href="#" class="btn border-btn">{{$t('about.btn1')}}<i class="ti-angle-right"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <!-- single Right img -->
            <div class="single-dining-area right-img">
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-lg-8 col-md-8">
                            <div class="dining-caption text-right">
                                <span>{{$t('about.aboutCompany3')}}</span>
                                <h3>{{$t('about.content3')}}</h3>
                                <p>{{$t('about.contentt3')}}</p>
                                <a href="#" class="btn border-btn">{{$t('about.btn1')}}<i class="ti-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <!-- Dining End -->

        <!-- Testimonial Start -->
        <div class="testimonial-area t-padding">
            <div class="container">
               <div class="row justify-content-center">
                    <div class="col-xl-9 col-lg-9 col-md-9">
                        <div class="h1-testimonial-active">
                            <!-- Single Testimonial -->
                            <div class="single-testimonial  pt-65">
                                <!-- Testimonial tittle -->
                                <div class="font-back-tittle mb-105">
                                    <div class="archivment-front">
                                        <img src="assets/img/logo/testimonial.png" alt="">
                                    </div>
                                    <h3 class="archivment-back"></h3>
                                </div>
                                <!-- Testimonial Content -->
                                <div class="testimonial-caption text-center">
                                    <p>
                                        {{$t('about.textcmt')}}
                                    </p>
                                    <!-- Rattion -->
                                    <div class="testimonial-ratting">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div class="rattiong-caption">
                                        <span>{{$t('about.textUser')}}, <span>{{$t('about.textRole')}}</span> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        <!-- Testimonial End -->
        <section class="w100vw"></section>
    </div>



</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {}

</script>

<style scoped>
.single-slider{
    background-image: url('../../../assets/img/hero/aboutpage_hero.jpg');
    background-size: cover;
}
.hero-caption{
    text-align: left;
}
.customer-caption{
    text-align: left;
}
.dining-caption{
    text-align: left;
}

</style>
