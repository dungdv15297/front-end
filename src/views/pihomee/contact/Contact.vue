<template>
<!-- Hiện tại cái trang này không có gì nhé, nhưng khi bạn vào theo cái link /contact nó đã có sẵn header, footer rồi -->
<!-- Giờ nội dung bạn viết trong file này sẽ hiển thị ở giữa 2 phần có sẵn -->
<div class="content">
    <!-- Trang contact này bạn cũng bê đoạn code của cái contact của thằng marian vào.
    Bỏ cái phần gửi mail đi.
    Chỉ bịa ra đống thông tin liên lạc thôi -->
    
    <!-- Xong rồi làm thêm cái trang giới thiệu nữa -->
    
    <!-- Css thì mình link vào hết rồi -->
    <!-- bạn cứ cop đúng các div của nó vào là hiện ra, có 1 số cái ko ăn đc css mình cũng ko biết tại sao -->
    <!-- Những cái đó thì ae mình css lại -->
    <!-- slider Area Start-->
    <div class="slider-area">
        <div class="single-slider hero-overly slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-11 offset-xl-1 offset-lg-1 offset-md-1">
                        <div class="hero-caption">
                            <span>Contact</span>
                            <h2>Contact</h2>
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14896.824718384732!2d105.78506366977541!3d21.0244347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1603211750872!5m2!1sen!2s"
                         width="1170" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>   

                </div> 
    

                <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">Get in Touch</h2>
                    </div>
                    <div class="col-lg-8">
                        <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input class="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class="button button-contactForm boxed-btn">Send</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                                <h3>Buttonwood, California.</h3>
                                <p>Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                                <h3>+1 253 565 2365</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                                <h3>support@colorlib.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <!-- ================ contact section end ================= -->
    
    <!-- Cái thẻ section này để content hiển thị 100% width nhé nên đừng xóa đi -->
    <section class="w100vw"></section>
</div>
</template>
 
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {}

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

</style>
