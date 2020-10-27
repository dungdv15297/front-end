<template>
    <div class="content">
        <!-- slider Area Start-->
        <div class="slider-area">
            <div class="single-slider hero-overly slider-height2 d-flex align-items-center" >
                <div class="container">
                    <div class="row ">
                        <div class="col-md-11 offset-xl-1 offset-lg-1 offset-md-1">
                            <div class="hero-caption">
                                <!-- sang bên này gọi thế này mã.nội dung ý-->
                                <!-- nó chưa hiện vì ngôn ngữ đang được chọn là vn, file vừa thêm mới có en thôi -->
                                <!-- Hiện rồi đấy, hiểu cách làm ko bạn.ok -->
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
                                <h3>5 Năm Kinh Doanh<br>Dịch Vụ</h3>
                            </div>
                        </div>
                   </div>
                    <div class=" col-xl-4 col-lg-4">
                        <div class="customer-caption">
                            <span>Về công ty chúng tôi</span>
                            <h2>Pihomee - Cung Cấp Dịch Vụ Cho Khách Hàng An Toàn Và Chu Đáo </h2>
                            <div class="caption-details">
                                <p class="pera-dtails">Khách hàng được tham khảo thông tin, địa chỉ, hình ảnh và giá phòng. </p>
                                <p>Cá nhân hoặc doanh nghiệp cho thuê phòng cung cấp đầy đủ thông tin sản phẩm và hình ảnh về các loại phòng cho thuê: căn hộ, chung cư,...</p>
                                <a href="#" class="btn more-btn1">Tìm Hiểu Thêm <i class="ti-angle-right"></i> </a>
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
                                <img class="d-block w-100" src="../../../assets/header.png" alt="First slide">
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" src="../../../assets/h1_hero.jpg" alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" src="../../../assets/h1_hero.jpg" alt="Third slide">
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
        <!-- mình bảo nhé. Bạn ấn ctrl + P điền en.json để tìm file. Có file en và vn là 2 file ngôn ngữ. -->
        <!-- Xong rồi thì thêm vào phần cuối cùng của file nội dung trong màn của bạn. -->

        <!-- Dining Start -->
        <div class="dining-area d-padding">
            <!-- Single Left img -->
            <div class="single-dining-area left-img">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-lg-8 col-md-8">
                            <div class="dining-caption">
                                <span>Loại Hình Kinh Doanh</span>
                                <h3>Loại Hình Cho Thuê Đa Dạng Phong Phú</h3>
                                <p>Bên cạnh những loại hình kinh doanh cho thuê phòng trọ da dạng khách hàng và chủ phòng cũng có thể tham khảo những loại hình cho thuê khác như : văn phòng, cửa hàng, nhà hàng...</p>
                                <a href="#" class="btn border-btn">Tìm Hiểu Thêm <i class="ti-angle-right"></i> </a>
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
                                <span>Pihomee, Kết Nối Lợi Ích Chung</span>
                                <h3>Cầu Nối Giữa Chủ Phòng Và Khách Hàng</h3>
                                <p>Thay vì các loại hình quảng cáo truyền thống, tốn kém và không hiệu quả, chủ phòng có thể dễ dàng đăng tin các sản phẩm kinh doanh của mình lên Pihomee và khách hàng cũng có thể dễ dàng tìm kiếm thông tin theo nhu cầu thuê.</p>
                                <a href="#" class="btn border-btn">Tìm Hiểu Thêm  <i class="ti-angle-right"></i></a>
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
                                    <h3 class="archivment-back">Testimonial</h3>
                                </div>
                                <!-- Testimonial Content -->
                                <div class="testimonial-caption text-center">
                                    <p>
                                        Trước khi biết Pihomee, mình phải tốn nhiều công sức và chi phí cho việc đăng tin cho thuê:
                                        từ việc phát tờ rơi, dán giấy, và đăng lên các website khác nhưng hiệu quả không cao.
                                        Từ khi biết Pihomee, mình đã thử đăng tin lên và đánh giá hiệu quả khá cao
                                        trong khi chi phí khá thấp, không còn tình trạng phòng trống kéo dài.
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
                                        <span>Đàm Văn Dũng, <span>Chủ Phòng</span> </span>
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
