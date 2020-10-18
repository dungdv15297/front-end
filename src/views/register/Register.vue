<template>
  <b-container fluid class="bg-gradient">
    <div class="content">
      <b-row class="my-3">
        <b-col>
          <!-- Register label -->
          <label class="title">{{ $t('register.register') }}</label>
          <label class="lagre">{{ $t('register.slogan') }}</label>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <!-- Name -->
          <b-input-group>
            <b-input-group-prepend is-text>
              <b-icon icon="person-badge"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="text"
              v-model="registerData.fullname"
              :placeholder="$t('register.name')"
              :state="validation.fullname.rule"
              v-b-tooltip.hover.right.v-danger
              :title="$t(validation.fullname.msg())"
            ></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <!-- Phone number -->
          <b-input-group>
            <b-input-group-prepend is-text>
              <b-icon icon="phone"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="text"
              v-model="registerData.phone"
              :placeholder="$t('register.phone')"
              :state="validation.phone.rule"
              v-b-tooltip.hover.right.v-danger
              :title="$t(validation.phone.msg())"
            ></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <!-- Username -->
          <b-input-group>
            <b-input-group-prepend is-text>
              <b-icon icon="person-plus"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="text"
              v-model="registerData.username"
              :placeholder="$t('register.username')"
              :state="validation.username.rule"
              v-b-tooltip.hover.right.v-danger
              :title="$t(validation.username.msg())"
            ></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <!-- Password -->
          <b-input-group>
            <b-input-group-prepend is-text>
              <b-icon icon="lock"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="password"
              v-model="registerData.password"
              :placeholder="$t('register.password')"
              :state="validation.password.rule"
              v-b-tooltip.hover.right.v-danger
              :title="$t(validation.password.msg())"
            ></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <!-- Re-Password -->
          <b-input-group>
            <b-input-group-prepend is-text>
              <b-icon icon="lock-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="password"
              v-model="registerData.rePassword"
              :placeholder="$t('register.rePassword')"
              :state="validation.rePassword.rule"
              v-b-tooltip.hover.right.v-danger
              :title="$t(validation.rePassword.msg())"
            ></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <!-- Note label -->
          <label class="text-small fl-left">{{ $t('register.note') }}</label>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <!-- register button -->
          <b-button class="btn" block variant="info" @click="onClickRegister">{{ $t('register.registerBtn') }}</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-right">
          <!-- Link sign in -->
          <a href="" class="text-small" @click="goToLogin">{{ $t('register.signin') }}</a>
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
import RegisterData from './register-data';
import RegisterRequest from '@/base/request/register-request';
import * as axios from '@/base/customAxios';
import AuthResponse from '@/base/response/auth-response';
import * as validate from './validation-rules';

@Component
export default class Register extends Vue {
  registerData: RegisterData = new RegisterData();
  API = {
    register: 'account/register'
  }
  axios = axios.axiosCreator();

  isValidate: boolean = false;

  get validation(): any {
    return !this.isValidate ? validate.validation() : validate.validation(this.registerData);
  }

  created() {
    const token = this.$store.getters['token'];
    if (!!token) {
      this.$router.push({ path: '/home' });
    }
  }

  /**
   * Click button register
   */
  onClickRegister(): void {
    this.isValidate = true;
    if (!this.validation.isValid()) {
      return;
    }
    const body: RegisterRequest = new RegisterRequest({
      fullname: this.registerData.fullname,
      phone: this.registerData.phone,
      username: this.registerData.username,
      password: this.registerData.password,
      rePassword: this.registerData.rePassword
    });
    this.axios.post<AuthResponse>(this.API.register, body)
      .then(response => {
        if (response && response.data && response.data.jwt) {
          const token: string = response.data.jwt;
          this.$store.dispatch('setToken', token);
          // show MSG102
        }
      })
      .catch(error => {
        if (!!error.response && !!error.response && !!error.response.data.errorCode) {
          // show error code and validate
          this.validation.username.rule = false;
          this.validation.username.firstRule = false;
        }
      })
  }

  /**
   * Go to login page
   */
  goToLogin(): void {
    this.$router.push({ name: 'Login' });
  }

  /**
   * Go to homepage
   */
  goToHomePage(): void {
    this.$router.push({name: 'HomePage'});
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
  max-width: 350px;
  min-width: 280px;
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
.lagre {
  font-size: larger;
  font-weight: bold;
  font-family: cursive;
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