<template>
  <div class="header-login">
    <router-link
      class="top_login__link js_login"
      :to="{name:'/login'}"
    >{{$store.state.userName ? $store.state.userName : '登录'}}</router-link>
    <button @click="logout" class="lg" v-if="isFlag">退出</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlag: true
    }
  },
  created() {
    if (localStorage.userName === '登录') {
      this.isFlag = false
    }
  },
  methods: {
    logout() {
      if (localStorage.userName !== '登录') {
        localStorage.setItem('userName', '登录')
        this.isFlag = true
        window.location.reload()
      }
    }
  }
}
</script>

<style scoped>
.header-login {
  position: relative;
}

.top_login__link {
  position: absolute;
  top: 33px;
  left: 253px;
  width: 38px;
  margin-right: 10px;
  font-size: 17px;
  text-align: center;
  color: #000;
  text-decoration: none;
}
.top_login__link:hover {
  color: #31c27c;
}
.lg {
  position: relative;
  top: 33px;
  left: 300px;
  width: 50px;
  margin-right: 10px;
  font-size: 17px;
  text-align: center;
  background: #31c27c;
  color: #fff;
  border: none;
  text-decoration: none;
  cursor: pointer;
}
</style>
