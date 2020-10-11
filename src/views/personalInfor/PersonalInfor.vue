<template>
  <div id="wrapper">
    <b-container class="bv-example-row">
        <b-row>
             <b-col cols="2">
                 <div class="content1">
                    <div class="nav1">
                        <b-nav>
                            <b-nav-item style="font-size:18px;"><strong>Pihomee</strong></b-nav-item>
                        </b-nav>
                        <div class="divNoidungContent1">
                            <div class="iconuser">
                                <img src="https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png" 
                                    alt="user" width="80px" height="80px" style="float:left">

                                <strong style="margin-left:15px;font-size:18px;color:black;clear:both"><span id="name">Hiển thị tên user</span></strong>
                                <p><span id="phone" style="margin-left:15px;color:black;">Hiển thị Phone</span></p>
                            </div>
                            
                            <h6 style="color:black">Mã thành viên : <strong><span id="userid"></span></strong></h6>
                            <h6 style="color:black">Số dư : <strong><span id="balance"></span></strong></h6>
                            <p></p>
                            <div>
                                <b-button variant="warning">?????</b-button>
                                <b-button style="margin-left:15px;" variant="danger">Đăng tin</b-button>
                            </div>
                            <br/>
                            <b-list-group>
                                <b-list-group-item href="#"><span style="margin-right:5px;" class="h5 mb-2"><b-icon icon="file-earmark-text"></b-icon></span> Quản lý tin đăng</b-list-group-item>
                                <b-list-group-item href="#"><span style="margin-right:5px;" class="h5 mb-2"><b-icon icon="pencil-square"></b-icon></span> Sửa thông tin cá nhân</b-list-group-item>
                                <b-list-group-item href="#"><span style="margin-right:5px;" class="h5 mb-2"><b-icon icon="calendar4"></b-icon></span> Lịch sử thanh toán</b-list-group-item>
                                <b-list-group-item href="#"><span style="margin-right:5px;" class="h5 mb-2"><b-icon icon="box-arrow-right"></b-icon></span> Đăng xuất</b-list-group-item>
                            </b-list-group>
                        </div>
                    </div>
                 </div>
             </b-col>
             <b-col cols="10">
                 <div class="content2">
                    <div class="nav1">
                        <b-nav>
                            <b-nav-item>Trang chủ</b-nav-item>
                            <b-nav-item>Phòng trọ</b-nav-item>
                            <b-nav-item>Nhà cho thuê</b-nav-item>
                        </b-nav>
                    </div>
                    <div class="divNoidungContent2">
                        <h3 style="line-height:40px;"><strong>Cập nhật thông tin cá  nhân</strong></h3><hr>
                        <div class="divFormContent2">
                            <b-form-group label-cols="4" label-cols-lg="2" label="Mã thành viên" label-for="input-userid">
                                <b-form-input id="userid" readonly></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="4" label-cols-lg="2" label="Họ tên" label-for="input-name">
                                <b-form-input id="name"></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="4" label-cols-lg="2" label="Ngày sinh" label-for="input-birthday">
                                <b-form-input id="birthday"></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="4" label-cols-lg="2" style="border:none;" label="Giới tính" label-for="radio-gender">
                                <b-form-radio-group id="gender" :options="['Nam', 'Nữ', 'Khác']"></b-form-radio-group>
                            </b-form-group>  

                            <b-form-group label-cols="4" label-cols-lg="2" label="Địa chỉ" label-for="input-default">
                                <b-form-input id="adress"></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="4" label-cols-lg="2" label="Email" label-for="input-default">
                                <b-form-input id="email" placeholder="nguyenvana@gmail.com"></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="4" label-cols-lg="2" label="Số điện thoại" label-for="input-default">
                                <b-form-input id="phone"></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="4" label-cols-lg="2" label="Trạng thái" label-for="input-default">
                                <b-form-input id="status"></b-form-input>
                            </b-form-group>

                            <div>
                                <b-button variant="primary" style="width:100%;margin-top:15px;">Cập nhật</b-button>
                            </div> <br/><br/><br/><br/>
                        </div><hr/>

                    </div>
                 </div>

                 <!--Divtest cua hieu -->
                   
                        <div class="card1">
                            <div style="margin: 10px 10px 10px 10px;">
                            <b-card no-body class="overflow-hidden" style="max-width: 500px; border: none;">
                                <b-row no-gutters>
                                <b-col md="5">
                                    <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                                    <img class="iconSao" src="https://www.debtcollectionsagencyhouston.com/wp-content/uploads/2014/03/rating5star1.png" width="70px">
                                </b-col>
                                <b-col md="7">
                                    <div class="textTitle">
                                        <strong style="font-size:17px;color:red;"><a href="#">Cho thuê phòng mới xây Full nội thất cơ bản, giờ giấc tự do</a></strong><br>
                                        <p  style="color:green;font-size:19px;margin-top:5px"><strong>4 triệu/tháng</strong></p>
                                        <p  style="margin-top:5px">
                                            <strong style="float:left;">20m&sup2;</strong>
                                            <strong style="clear:both;color: blue; margin-left: 10px;font-size:14px;"><a href="#">Quận Thủ Đức, Hồ Chí Minh</a></strong>
                                        </p>
                                        <p style="margin-top:5px">
                                            <span style="color:black;opacity:60%;">địa chỉ: 25a đường 16, p.linh lan, q.bình thạnh. phòng trọ minh hải...</span>
                                        </p>
                                        <img class="iconHot" src="https://hwp.com.vn/wp-content/uploads/2017/02/icon-hot.gif" >
                                    </div>
                                </b-col>
                                </b-row>
                            </b-card>
                            </div>
                        </div>
                    


             </b-col>
         </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PersonalInfor extends Vue {
    // Phần này là logic, hiện tại bạn chưa biết thì ko cần viết cũng đc

}
</script>

<style scoped>
/* Phần này là css */   
    #wrapper{
        width: 100%;
        height: auto;
        text-align: left;
        font-family: Arial;
        background-color:rgb(254, 255, 254) ;
    }

    .content1{
        height: 800px;
        margin-left: -100px;
        margin-right: -29px;
        border-right: 1px solid rgba(29, 29, 29, 0.11) ;
        background-color: rgba(44, 44, 44, 0.055);
    }
    .content2{
        width: 110%;
        height: 800px;
 
    }
    .nav1{
        line-height: 30px;
        height: 44px;
        color: #fff;
        background-color: rgb(151, 151, 214);
    }
    .divNoidungContent2{
        width: 90%;
        height: 800px;
        margin: 0 auto;
        margin-top: 20px;
    }
    .divFormContent2{
        width: 70%;
        height: auto;
        margin:0 auto;
        margin-top: 30px;
    }
    .divNoidungContent1{
        width: 90%;
        height: 600px;
        margin:0 auto;
        margin-top: 15px;

    }
    .iconuser{
        height: 90px;

    }

    /* Css caur divtest hieu */
    .card1{
        float:left;
        margin-right: 30px;
        border: 1px solid red;
    }
    .textTitle{
        width: 80%;
        height: auto;
        margin-left: 15px ;
    }
    .textTitle a:hover{
        color: red;
    }
    .iconHot{
        position: relative;
        top: -220px;
        right: -240px;
    }
    .rounded-0{
        position:absolute;
    }
    .iconSao{
        position:relative;
        left:130px;
    }

</style>
