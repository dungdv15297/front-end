<template>
  <b-container fluid class="bg-gradient">
    <div class="content">
      <b-row class="my-3">
        <b-col>
          <!-- Login label -->
          <label class="title"> {{ $t('login.login') }} </label>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <!-- Username -->
          <b-form-input v-model="text" :placeholder="$t('login.username')"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <!-- Password -->
          <b-form-input v-model="password" :placeholder="$t('login.password')"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">
          <!-- Remember Me -->
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            {{ $t('login.remember') }}
          </b-form-checkbox>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <!-- Login button -->
          <b-button class="btn-login" block variant="info"> {{ $t('login.loginBtn') }} </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">
          <!-- Link forgot password -->
          <a href="#" class="text-small"> {{ $t('login.forgot') }} </a>
        </b-col>
        <b-col class="text-right">
          <!-- Link sign up -->
          <a href="#" class="text-small"> {{ $t('login.signUp') }} </a>
        </b-col>
      </b-row>
    </div>
    
    <div class="footer">
          <!-- homepage -->
          <a href="#" class="cl-white fl-left">
            <b-icon icon="house-fill" aria-hidden="true"></b-icon> {{ $t('login.domain') }}
          </a>
          <!-- change language -->
          <select-language/>
    </div>
  </b-container>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import BaseHelper from '@/base/BaseHelper.vue';

@Component({
  components: {
    SelectLanguage: () => import('@/components/SelectLanguage/SelectLanguage.vue')
  }
})
export default class Login extends Vue {

}
</script>
<style scoped>
.content {
  width: 350px;
  margin: 0 auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  padding: 50px;
  margin-top: 150px;
  background-color: white;
}
.footer {
  width: 350px;
  margin: 0 auto;
  padding-top: 10px;
}
.title {
  font-size: 2rem !important;
  font-weight: bold;
  font-family: cursive;
}
.bg-gradient {
  height: 100vh;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,101,0.9220063025210083) 40%, rgba(0,212,255,1) 100%);
}
.btn-login {
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,93,1) 0%, rgba(0,212,255,1) 100%);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.btn-login:hover {
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(14,182,140,1) 100%, rgba(0,212,255,1) 100%);
}
.text-small {
  font-size: small;
}
.cl-white {
  color: whitesmoke;
}
.cl-white:hover {
  color: aqua;
}
a:hover {
  text-decoration: none;
}
.fl-left {
  float: left;
}
.footer >>> .lang-position {
  float: right;
}
</style>