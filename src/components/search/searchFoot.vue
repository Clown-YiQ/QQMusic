<template>
  <div class="sFoot">
    <p class="client-guide">查看更多内容，请下载客户端</p>
    <router-link to="#" class="client-guide-btn">立即下载</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.sFoot {
  margin-bottom: 30px;
  .client-guide {
    font-size: 18px;
    color: #000;
    text-align: center;
  }
  .client-guide-btn {
    color: #fff;
    display: block;
    margin: 20px auto 0;
    width: 175px;
    height: 41px;
    line-height: 41px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    border-radius: 41px;
    background-color: #31c27c;
    &:hover {
      color: #fff;
      background-color: #2caf6f;
    }
  }
}
</style>
