<template>
  <div class="side">
    <img src="http://imgcache.gtimg.cn/mediastyle/yqq/img/logo.png" class="side__logo" alt="QQ音乐" />
    <p class="side__txt">千万高品质曲库尽享</p>
    <router-link to="#" class="side__btn">
      <i class="side__btn_icon sprite"></i>客户端下载
    </router-link>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.side {
  position: fixed;
  top: 164px;
  right: 40px;
  z-index: 1001;
  padding: 18px;
  border-radius: 4px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.07);
  background-color: #fff;
  .side__logo {
    display: block;
    margin: 0 auto 9px;
    width: 102px;
  }
  .side__txt {
    margin-bottom: 10px;
    font-size: 16px;
    color: #a6a6a6;
    text-align: center;
  }
  .side__btn {
    display: block;
    margin: 0 auto;
    width: 130px;
    height: 26px;
    border-radius: 26px;
    line-height: 26px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    background-color: #31c27c;
    &:hover {
      color: #fff;
      background-color: #2caf6f;
    }
  }
  .side__btn_icon {
    display: inline-block;
    margin-right: 4px;
    vertical-align: -1px;
    width: 13px;
    height: 14px;
    background-position: -160px -320px;
  }
  .sprite {
    background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3b3&v=85678e8f28c7b4bcad5c209b21b7e3b3');
  }
}
</style>
