<template>

<div class="content">
    <!-- slider Area Start-->
    <div class="slider-area">
        <div class="single-slider hero-overly slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-11 offset-xl-1 offset-lg-1 offset-md-1">
                        <div class="hero-caption">
                            <span>Details Room</span>
                            <h2>DETAILS ROOM</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="contact-section">
            <div class="container"> 
                <!-- form -->
                <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">Hiển thị tên title sản phẩm + địa chỉ</h2>
                    </div>
                    <div class="col-lg-8">
                       <table cellpadding="7" id="info">
                           <tbody>
                               <tr>
                                   <td class="nameT">Địa chỉ:</td>
                                   <td colspan="3"><span>123 Trần Duy Hưng</span></td>
                               </tr>
                               <tr>
                                   <td class="nameT">Khu vực:</td>
                                   <td colspan="3"><span>123 Trần Duy Hưng</span></td>
                               </tr>
                               <tr>
                                   <td class="nameT">Loại phòng cho thuê:</td>
                                   <td colspan="3"><span>123 Trần Duy Hưng</span></td>
                               </tr>
                               <tr>
                                   <td class="nameT">Mã tin:</td>
                                   <td ><span>123 Trần Duy Hưng</span></td>
                                   <td class="nameT">Người đăng:</td>
                                   <td ><span>123 Trần Duy Hưng</span></td>
                               </tr>
                               <tr>
                                   <td class="nameT">Đối tượng:</td>
                                   <td ><span>123 Trần Duy Hưng</span></td>
                                   <td class="nameT">Điện thoại:</td>
                                   <td ><h4 style="color:green;font-weight: bold;"><span>123 Trần Duy Hưng</span></h4></td>
                               </tr>
                               <tr>
                                   <td class="nameT">Ngày cập nhật:</td>
                                   <td ><span>123 Trần Duy Hưng</span></td>
                                   <td class="nameT">Diện tích:</td>
                                   <td ><span style="color:red;">123 Trần Duy Hưng</span></td>
                               </tr>
                               <tr>
                                   <td class="nameT">Ngày hết hạn:</td>
                                   <td ><span>123 Trần Duy Hưng</span></td>
                                   <td class="nameT">Giá cho thuê:</td>
                                   <td ><span style="color:red;">123 Trần Duy Hưng</span></td>
                               </tr>
                           </tbody>                        
                       </table>
                       <br>  
                       <!-- Mo ta -->
                       <div class="discription">
                           <div style="margin-top:10px;margin-left:10px;">
                                <p><strong>Thông tin mô tả</strong></p>
                                <span>Hiển thị Mô tả</span>
                                <span> Bên cạnh những loại hình kinh doanh cho thuê phòng trọ da dạng khách hàng 
                                    và chủ phòng cũng có thể tham khảo những loại hình cho thuê khác như : văn phòng, cửa hàng, nhà hàng</span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <p>---------------------------------------------------</p>
                                <p>Điện thoại liên hệ :<span style="color:red;"> hiển thị sdt</span></p>
                           </div>    
                       </div><br>
                       <!-- ảnh -->
                       <div class="picture">
                           <p><strong>Hình ảnh</strong></p>
                           <div class="slidePic">
                              
                           </div>
                       </div><br>
                        <!-- map -->
                        <div class="d-none d-sm-block mb-5 pb-4">
                            <p><strong>Bản đồ</strong></p>
                            <google-map :hidden-search="true" :draggable="false" :static-center="staticCenter"/>
                        </div>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                                <h3>Cầu Giấy Hà Nội.</h3>
                                <p>Số 18 đường Khúc Thừa Dụ</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                                <h3>+84 987654321</h3>
                                <p>Từ thứ 2 tới thứ 6, 8 giờ tới 17 giờ</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                                <h3>support@colorlib.com</h3>
                                <p>Gửi câu hỏi bất cứ lúc nào cho chúng tôi!</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    

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
export default class DetailsRoom extends Vue {
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
table, tr, td{
    border: 2px solid rgba(100, 100, 100, 0.521);
    text-align: left;

}
table{
    width: 100%;
    font-family:Arial, Helvetica, sans-serif;
}
.nameT{
    font-weight: bold;
    background-color:rgba(197, 197, 197, 0.363);
}
.discription{
    border:2px solid rgba(100, 100, 100, 0.521) ;
    width: 100%;
    height: auto;
    text-align: left;
    font-family:Arial, Helvetica, sans-serif;
}
.picture{
    width: 100%;
    text-align: left;
    font-family:Arial, Helvetica, sans-serif;
}
.slidePic{
    width: 100%;
    height: 380px;
    border:2px solid rgba(100, 100, 100, 0.521) ;
}






</style>