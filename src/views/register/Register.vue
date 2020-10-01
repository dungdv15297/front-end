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
            <b-form-input type="text" v-model="registerData.fullname" aria-label="abc" :placeholder="$t('register.name')"></b-form-input>
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
            <b-form-input type="text" v-model="registerData.phone" :placeholder="$t('register.phone')"></b-form-input>
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
            <b-form-input type="text" v-model="registerData.username" :placeholder="$t('register.username')"></b-form-input>
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
            <b-form-input type="password" v-model="registerData.password" :placeholder="$t('register.password')"></b-form-input>
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
            <b-form-input type="password" v-model="registerData.rePassword" :placeholder="$t('register.rePassword')"></b-form-input>
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
          <b-button class="btn-register" block variant="info" @click="onClickRegister">{{ $t('register.registerBtn') }}</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-right">
          <!-- Link sign in -->
          <a href="#" class="text-small">{{ $t('register.signin') }}</a>
        </b-col>
      </b-row>
    </div>
    
    <div class="footer">
      <!-- homepage -->
      <a href="#" class="cl-white fl-left">
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
import RegisterData from './register-data';

@Component({
  components: {
    SelectLanguage: () => import('@/components/SelectLanguage/SelectLanguage.vue')
  }
})
export default class Register extends Vue {
  registerData: RegisterData = new RegisterData();
  
  created() {
    
  }

  onClickRegister(): void {
    // TODO
    debugger
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
  height: 100vh;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,101,0.9220063025210083) 40%, rgba(0,212,255,1) 100%);
}
.btn-register {
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,93,1) 0%, rgba(0,212,255,1) 100%);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.btn-register:hover {
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(14,182,140,1) 100%, rgba(0,212,255,1) 100%);
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
.footer >>> .lang-position {
  float: right;
}
</style>