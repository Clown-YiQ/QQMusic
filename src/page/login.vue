<template>
  <div class="page-login">
    <div class="login-header">
      <a class="logo" href="http://y.qq.com"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576646552391&di=64f212297e128ddad7392d66d41c72f2&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D420035233%2C662970820%26fm%3D214%26gp%3D0.jpg"
          width="600"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">{{ error }}</h4>
        <p>
          <span>账号登录</span>
        </p>
        <el-input
          :class="{error: error && !userName}"
          v-model="userName"
          placeholder="手机号/用户名/邮箱"
          prefix-icon="profile"
        ></el-input>
        <el-input
          :class="{error: error && !password}"
          v-model="password"
          type="password"
          placeholder="密码"
          prefix-icon="password"
        ></el-input>
        <div class="foot">
          <a href="#">忘记密码?</a>
        </div>
        <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
        <p class="reg">
          <span>还没有账号?</span>
          <router-link :to="{name: 'register'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper J-oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <span
              class="oauth__link oauth__link--qq third-login-btn"
              data-href="/account/connect/tencent"
              target="_blank"
              id="J-third-tencent"
            ></span>
            <span
              class="oauth__link oauth__link--weibo third-login-btn"
              data-href="/account/connect/sina"
              target="_blank"
              id="J-third-sina"
            ></span>
          </div>
          <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li>
          <a href="#">关于QQ音乐</a>
        </li>
        <li>
          <a href="#">加入我们</a>
        </li>
        <li>
          <a href="#">客服中心</a>
        </li>
        <li>
          <a href="#">帮助中心</a>
        </li>
        <li>
          <a href="#">网站导航</a>
        </li>
      </ul>
      <p>Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
// import api from '@/api/index.js'
import axios from 'axios'
// import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      userName: '',
      password: '',
      error: ''
    }
  },
  created() {
    axios.get('api/list').then(res => {
      console.log(res)
    })
  },
  methods: {
    submit() {
      console.log(this.userName, this.password)
      if (!this.userName) {
        this.error = '请输入账号'
        return false
      }
      if (!this.password) {
        this.error = '请输入密码'
        return false
      }
      axios.get('api/list').then(res => {
        if (
          this.userName === res.data[0].userName &&
          this.password == res.data[0].password
        ) {
          this.$router.push({ name: 'index' })
          this.$store.commit('setUserName', this.userName)
        } else if (
          this.userName === res.data[1].userName &&
          this.password == res.data[1].password
        ) {
          this.$router.push({ name: 'index' })
          this.$store.commit('setUserName', this.userName)
        } else {
          this.error = '用户名或密码不正确'
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/login/index.scss';
</style>
