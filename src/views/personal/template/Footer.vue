<template>
  <div ref="footer" id="main">
    <div class="content">
      <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Pihomee</h6>
            <p class="text-justify">
              Pihomee - Top đầu về thuê và cho thuê phòng trọ, căn hộ tại Việt Nam.
              Đứng đầu các từ khóa liên quan đến phòng trọ cho thuê, nhà cho thuê, cho thuê căn hộ.
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Trợ giúp phòng trọ</h6>
            <ul class="footer-links">
              <li><a rel="nofollow" href="tel:+84397304591">+84397304591</a></li>
              <li><a rel="nofollow" href="tel:+84397304591">+84397304591</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Hỗ trợ thanh toán</h6>
            <ul class="footer-links">
              <li><a rel="nofollow" href="tel:+84397304591">+84397304591</a></li>
              <li><a rel="nofollow" href="tel:+84397304591">+84397304591</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-2 col-sm-3 col-xs-12">
            <a>
              <SelectLanguage/>
            </a>
          </div>
          <div class="col-md-6 col-sm-5 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2020 All Rights Reserved by 
              <a href="#">Pihomee</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-4 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook-square"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {
    SelectLanguage: () => import('@/components/language/SelectLanguage.vue')
  }
})
export default class Footer extends Vue {
  @Prop()
  mini!:boolean;

  @Watch('mini')
  toggleSidebar() {
    if (this.mini) {
      (this.$refs["footer"] as any).style.marginLeft = "85px";
    } else {
      (this.$refs["footer"] as any).style.marginLeft = "250px";
    }
  }
}
</script>

<style scoped>
a {
  color: #dca73a;
}
a:hover {
  color: #f1b233;
}
.site-footer
{
  background-color:#26272b;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}
.social-icons a.dribbble:hover
{
  background-color:#ea4c89
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
</style>
