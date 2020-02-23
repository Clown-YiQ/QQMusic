<template>
  <div class="hd-btn">
    <div class="mod_songlist_toolbar">
      <a href="javascript:;" class="mod_btn js_all_like" data-stat="y_new.player.songlist.loveall">
        <i class="mod_btn_green__icon_like"></i>收藏
        <span class="mod_btn__border"></span>
      </a>
      <a href="javascript:;" class="mod_btn js_all_fav" data-stat="y_new.player.songlist.addall">
        <i class="mod_btn_green__icon_add"></i>添加到
        <span class="mod_btn__border"></span>
      </a>
      <a
        href="javascript:;"
        class="mod_btn js_all_down"
        data-stat="y_new.player.songlist.downloadall"
      >
        <i class="mod_btn_green__icon_down"></i>下载
        <span class="mod_btn__border"></span>
      </a>
      <a
        href="javascript:;"
        class="mod_btn js_all_delete"
        data-stat="y_new.player.songlist.deleteall"
      >
        <i class="mod_btn_green__icon_delete"></i>删除
        <span class="mod_btn__border"></span>
      </a>
      <a
        href="javascript:;"
        class="mod_btn js_all_deleted"
        data-stat="y_new.player.songlist.deleteallonce"
      >
        <i class="mod_btn_green__icon_clear"></i>清空列表
        <span class="mod_btn__border"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.hd-btn {
  float: left;
  margin-left: 120px;
  line-height: 80px;
  margin-top: 30px;
}
a {
  text-decoration: none;
}
.mod_songlist_toolbar {
  margin-left: 1px;
  position: relative;
  margin-bottom: 20px;
  font-size: 0;
}
.hd-btn .mod_btn {
  opacity: 0.8;
  filter: alpha(opacity=80);
  border-color: rgba(255, 255, 255, 0.2);
}
.hd-btn .mod_btn,
.hd-btn .mod_btn:active,
.hd-btn .mod_btn:hover {
  background-color: transparent;
  color: #fff;
}
.mod_songlist_toolbar .mod_btn {
  min-width: 122px;
  text-align: center;
}
.hd-btn,
.mod_player a {
  color: #bdbdbe;
  color: rgba(225, 225, 225, 0.8);
}
.mod_btn {
  border: 1px solid #c9c9c9;
  color: #000;
}
.mod_btn,
.mod_btn_green {
  border-radius: 2px;
  font-size: 14px;
  margin-right: 6px;
  padding: 0 23px;
  height: 38px;
  line-height: 38px;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
}
.mod_btn_green__icon_add,
.mod_btn_green__icon_clear,
.mod_btn_green__icon_delete,
.mod_btn_green__icon_down,
.mod_btn_green__icon_like {
  display: inline-block;
  margin-right: 6px;
  background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png');
  background-repeat: no-repeat;
  vertical-align: -3px;
}
.mod_btn_green__icon_like {
  width: 16px;
  height: 16px;
  background-position: -60px -20px;
  vertical-align: -4px;
}
.mod_btn_green__icon_add {
  width: 16px;
  height: 16px;
  background-position: -20px -20px;
}
.mod_btn_green__icon_down {
  width: 16px;
  height: 16px;
  background-position: -40px -240px;
}
.mod_btn_green__icon_delete {
  width: 16px;
  height: 16px;
  background-position: -100px -20px;
}
.mod_btn_green__icon_clear {
  width: 17px;
  height: 17px;
  background-position: -40px -300px;
}
</style>
