<template>
  <footer>
    <!-- Footer Start-->
    <div class="footer-area black-bg footer-padding">
      <div class="container">
        <div class="row d-flex justify-content-between">
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div class="single-footer-caption mb-30">
              <!-- logo -->
              <div class="footer-logo">
                <a href="index.html"
                  ><img src="assets/img/logo/logo2_footer.png" alt=""
                /></a>
              </div>
              <div class="footer-social footer-social2">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fas fa-globe"></i></a>
                <a href="#"><i class="fab fa-behance"></i></a>
              </div>
              <div class="footer-social footer-social2">
                <Language/>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-5">
            <div class="single-footer-caption mb-30">
              <div class="footer-tittle">
                <h4>{{$t('footer.reference')}}</h4>
                <ul>
                  <li><a href="/about">{{$t('footer.about')}}</a></li>
                  <li><a href="/contact">{{$t('footer.contact')}}</a></li>
                  <li><a href="/room">{{$t('footer.find')}}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div class="single-footer-caption mb-30">
              <div class="footer-tittle">
                <h4>{{$t('footer.sp')}}</h4>
                <ul>
                  <li><a href="#">{{$t('footer.tel')}}</a></li>
                  <li><a href="#">{{$t('footer.mail')}}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
            <div class="single-footer-caption mb-30">
              <div class="footer-tittle">
                <h4>{{$t('footer.location')}}</h4>
                <ul>
                  <li><a href="#">{{$t('footer.map1')}}</a></li>
                  <li><a href="#">{{$t('footer.map2')}}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer End-->
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    Language:() => import('@/components/language/SelectLanguage.vue')
  }
})
export default class Footer extends Vue {}
</script>

<style scoped>
</style>
