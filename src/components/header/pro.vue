<template>
  <div class="pro">
    <div class="twoBtn">
      <a class="mod_btn_green top_login__btn_vip js_openvip" href="javascript:;">开通绿钻豪华版</a>
      <a class="mod_btn top_login__btn_vip js_openmusic" href="javascript:;">开通付费包</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.pro {
  position: relative;
}
.twoBtn {
  position: absolute;
  top: 2px;
  left: 290px;
  width: 300px;
}
a {
  text-decoration: none;
  color: #000;
}
.top_login__btn_vip {
  margin-top: 24px;
  padding: 0 9px;
  margin-left: 10px;
  margin-right: 0;
  font-size: 13px;
  line-height: 39px;
}
.mod_btn,
.mod_btn_green {
  border-radius: 2px;
  height: 38px;
  display: inline-block;
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
.mod_btn_green {
  border: 1px solid #31c27c;
  background-color: #31c27c;
  color: #fff;
}
.mod_btn {
  border: 1px solid #c9c9c9;
  background-color: #fff;
}
</style>
