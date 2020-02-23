<template>
  <div class="infoHead">
    <img
      class="album-bg"
      src="//y.gtimg.cn/music/photo_new/T002R300x300M000001ybzgu1cVjIO.jpg?max_age=2592000"
    />
    <div class="right">
      <p class="songName">来自尘埃的光 (《全职高手》电视剧片头曲)</p>
      <div class="infoSinger">
        <i class="el-icon-user"></i>
        <a href="#">蔡维泽</a>
      </div>
      <ul class="data__info">
        <li class="data_info__item data_info__item--even">
          专辑：
          <a href="javascript:;" class="js_album" title="全职高手OST">全职高手OST</a>
        </li>
        <li class="data_info__item js_lan" style>语种：国语</li>
        <li class="data_info__item js_genre data_info__item--even" style>流派：Pop</li>
        <li class="data_info__item js_company" style>
          唱片公司：
          <a href="https://y.qq.com/portal/company_detail.html?id=7953">哇唧唧哇</a>
        </li>
        <li class="data_info__item js_public_time data_info__item--even" style>发行时间：2019-08-02</li>
      </ul>
      <div class="info__actions" role="toolbar">
        <router-link :to="{name:'musicPlay'}" class="mod_btn_green js_all_play">
          <i class="mod_btn_green__icon_play"></i>播放
        </router-link>
        <a href="javascript:;" class="mod_btn js_all_like" @click="changeBg">
          <i class="mod_btn__icon_like" :class="{'active':isLike}"></i>收藏
        </a>
        <a class="mod_btn js_into_comment" data-stat="y_new.song.gotocomment" href="#comment_box">
          <i class="mod_btn__icon_comment"></i>评论(1406)
        </a>
        <a
          href="javascript:;"
          class="mod_btn js_more"
          data-stat="y_new.song.header.more"
          data-id="247367292"
          data-songtype="0"
          data-mid="004JnuX52gV2oX"
        >
          <i class="mod_btn__icon_menu"></i>更多
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLike: false
    }
  },
  methods: {
    changeBg() {
      if (this.isLike) {
        this.isLike = false
      } else {
        this.isLike = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
.infoHead {
  width: 1200px;
  margin: 40px auto;
  .album-bg {
    display: inline-block;
    width: 250px;
    height: 250px;
  }
  .right {
    margin-top: 15px;
    display: inline-block;
    vertical-align: top;
    margin-left: 50px;
    .songName {
      font-size: 31px;
      line-height: 50px;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 70%;
      margin-right: 10px;
    }
    .data__info {
      padding: 0;
      width: 450px;
      overflow: hidden;
      padding-top: 8px;
      .data_info__item {
        float: left;
        line-height: 27px;
        width: 166px;
        margin-right: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
      }
      .data_info__item--even {
        width: 250px;
      }
    }
    .info__actions {
      position: absolute;
      bottom: 23px;
      font-size: 0;
      .mod_btn {
        border: 1px solid #ccc;
        border-radius: 2px;
        font-size: 14px;
        margin-right: 6px;
        height: 38px;
        line-height: 38px;
        display: inline-block;
        white-space: nowrap;
        box-sizing: border-box;
        overflow: hidden;
        min-width: 122px;
        text-align: center;
        padding: 0 18px;
        font-family: \5fae\8f6f\96c5\9ed1;
        .mod_btn__icon_like {
          width: 16px;
          height: 16px;
          background-position: -60px 0;
          vertical-align: -4px;
          display: inline-block;
          margin-right: 6px;
          background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3b3&v=85678e8f28c7b4bcad5c209b21b7e3b3');
          background-repeat: no-repeat;
        }
        .active {
          background-position: 0 -80px;
        }
        .mod_btn__icon_comment {
          width: 16px;
          height: 16px;
          background-position: -140px -120px;
          vertical-align: -3px;
          display: inline-block;
          margin-right: 6px;
          background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3b3&v=85678e8f28c7b4bcad5c209b21b7e3b3');
          background-repeat: no-repeat;
        }
        .mod_btn__icon_menu {
          width: 16px;
          height: 16px;
          background-position: -20px -80px;
          display: inline-block;
          margin-right: 6px;
          background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3b3&v=85678e8f28c7b4bcad5c209b21b7e3b3');
          background-repeat: no-repeat;
          vertical-align: -3px;
        }
      }
      .mod_btn_green {
        border: 1px solid #31c27c;
        background-color: #31c27c;
        color: #fff;
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
        .mod_btn_green__icon_play {
          width: 13px;
          height: 16px;
          background-position: -80px -220px;
          vertical-align: -3px;
          display: inline-block;
          margin-right: 6px;
          background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3b3&v=85678e8f28c7b4bcad5c209b21b7e3b3');
          background-repeat: no-repeat;
        }
      }
    }
  }
}
</style>
