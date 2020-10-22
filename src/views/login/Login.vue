<template>
  <b-container fluid class="bg-gradient">
    <div class="content">
      <b-row class="my-3">
        <b-col>
          <!-- Login label -->
          <label class="title"> {{ $t('login.login') }} </label>
        </b-col>
      </b-row>
      <b-form>
        <b-row class="my-3">
          <b-col>
            <!-- Username -->
            <b-form-input
              type="text"
              v-model="loginData.username"
              :placeholder="$t('login.username')"
              :state="validation.username.rule"
              v-b-tooltip.hover.right.v-danger
              :title="$t(validation.username.msg())"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-3">
          <b-col>
            <!-- Password -->
            <b-form-input
              type="password"
              v-model="loginData.password"
              :placeholder="$t('login.password')"
              :state="validation.password.rule"
              v-b-tooltip.hover.right.v-danger
              :title="$t(validation.password.msg())"
            ></b-form-input>
          </b-col>
        </b-row>
        <!-- <b-row>
          <b-col class="text-left">
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
        </b-row> -->
        <b-row class="my-3">
          <b-col>
            <!-- Login button -->
            <b-button class="btn" block variant="info" @click="onClickLogin"> {{ $t('login.loginBtn') }} </b-button>
          </b-col>
        </b-row>
      </b-form>
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
    </div>
  </b-container>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginData from './login-data';
import * as axios from '@/base/customAxios';
import AuthRequest from '@/base/request/auth-request';
import AuthResponse from '@/base/response/auth-response';
import Account from '@/base/domains/account';
import * as validate from './validation-rules';
import { AxiosInstance } from 'axios';

@Component
export default class Login extends Vue {

  loginData: LoginData = new LoginData();
  isValidate: boolean = false;

  get validation(): any {
    return !this.isValidate ? validate.validation() : validate.validation(this.loginData);
  }
  axios: AxiosInstance = axios.axiosCreator();

  API = {
    login: 'account/authenticate'
  }

  created() {
    const token = this.$store.getters['token'];
    if (!!token) {
      this.$router.push({ path: '/home' });
    }
  }

  /**
   * Click button login
   */
  onClickLogin(): void {
    this.isValidate = true;
    if (!this.validation.isValid()) {
      return;
    }
    const body: AuthRequest = new AuthRequest({
      username: this.loginData.username,
      password: this.loginData.password
    });
    this.axios.post<AuthResponse>(this.API.login, body)
      .then(response => {
        if (response && response.data && response.data.jwt) {
          const token: string = response.data.jwt;
          this.$store.dispatch('setToken', token);
          const path: any = this.$route.query.from || '';
          this.$router.push({ path: atob(path)} );
        }
      })
      .catch(err => {
        // show MSG100
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
    this.$router.push({name: 'DefaultViews'});
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
  font-family: cursive;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../../assets/h1_hero.jpg') no-repeat;
  background-size: cover;
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
</style>