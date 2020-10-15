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
          <b-form-input v-model="loginData.username" :placeholder="$t('login.username')"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <!-- Password -->
          <b-form-input v-model="loginData.password" :placeholder="$t('login.password')"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">
          <!-- Remember Me -->
          <b-form-checkbox
            id="checkbox-1"
            v-model="loginData.rememberMe"
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
          <b-button class="btn-login" block variant="info" @click="onClickLogin"> {{ $t('login.loginBtn') }} </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">
          <!-- Link forgot password -->
          <a href="" class="text-small" @click="goToForgotPass"> {{ $t('login.forgot') }} </a>
        </b-col>
        <b-col class="text-right">
          <!-- Link sign up -->
          <a href="" class="text-small" @click="goToRegister"> {{ $t('login.signUp') }} </a>
        </b-col>
      </b-row>
    </div>
    
    <div class="footer">
      <!-- homepage -->
      <a href="" class="cl-white fl-left" @click="goToHomePage">
        <b-icon icon="house-fill" aria-hidden="true"></b-icon> {{ $t('domain') }}
      </a>
      <!-- change language -->
      <select-language/>
    </div>
  </b-container>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import BaseHelper from '@/base/BaseHelper.vue';
import { axiosCreator } from '@/base/customAxios';
import AuthRequest from '@/base/request/auth-request';
import AuthResponse from '@/base/response/auth-response';
import Account from '@/base/domains/account';
import { dialogTypes } from '@/base/enum/dialog-types';

@Component({
  components: {
    SelectLanguage: () => import('@/components/language/SelectLanguage.vue')
  }
})
export default class Login extends BaseHelper {

  loginData: any;
  axios = axiosCreator();

  API = {
    login: 'account/authenticate'
  }

  created() {

  }

  /**
   * Click button login
   */
  onClickLogin(): void {
    const body: AuthRequest = new AuthRequest({
      username: this.loginData.username,
      password: this.loginData.password
    });
    this.axios.post<AuthResponse>(this.API.login, body)
      .then(response => {
        if (response && response.data && response.data.jwt) {
          const token: string = response.data.jwt;
          localStorage.setItem('token', token);
          this.openDialog(dialogTypes.INFORMATION, 'MSG101', () => {
            this.$router.push({name: 'HomePage'});
          });
        }
      })
      .catch(err => {
        this.openDialog(dialogTypes.WARNING, 'MSG100');
      })
  }

  /**
   * Click link register
   */
  goToRegister(): void {
    this.$router.push({name: 'Register'});
  }

  /**
   * Go to homepage
   */
  goToHomePage(): void {
    this.$router.push({name: 'HomePage'});
  }

  /**
   * Go to forgot password page
   */
  goToForgotPass(): void {
    this.$router.push({name: 'ForgotPass'});
  }
}
</script>
<style scoped>
.content {
  max-width: 350px;
  min-width: 280px;
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