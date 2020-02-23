<template>
  <div class="paly-list">
    <dl class="tb">
      <dt>歌曲</dt>
      <dt>歌手</dt>
      <dt>时长</dt>
    </dl>
    <dl class="tbSong" v-for="(item,index) in songList1" :key="index">
      <dd>
        <router-link :to="{name:'songInfo'}" class="songName">{{item.song}}</router-link>
        <i class="unique"></i>
        <div class="iList">
          <div class="mod_list_menu">
            <a href="javascript:;" class="list_menu__item list_menu__play js_play" title="播放">
              <i class="list_menu__icon_play"></i>
            </a>
            <a
              href="javascript:;"
              class="list_menu__item list_menu__add js_fav"
              title="添加到歌单"
              aria-haspopup="true"
            >
              <i class="list_menu__icon_add"></i>
            </a>
            <a
              href="javascript:;"
              class="list_menu__item list_menu__share js_share"
              data-stat="y_new.player.songlist.shareone"
              title="分享"
              aria-haspopup="true"
            >
              <i class="list_menu__icon_share"></i>
            </a>
          </div>
        </div>
      </dd>
      <dd>
        <router-link to="#" class="ver">{{item.singer}}</router-link>
      </dd>
      <dd>
        <router-link to="#" class="ver">{{item.sTime}}</router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      songList1: []
    }
  },
  created () {
    api.getMusicList().then(res => {
      console.log(res.data.songList1)
      this.songList1 = res.data.songList1
    })
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff;
}
.paly-list {
  width: 1200px;
  margin: 100px 0 50px;
  .tb,
  .tbSong {
    height: 50px;
    background-color: rgba(0, 0, 0, 0.01);
    color: #fff;
    padding-right: 122px;
    padding-left: 20px;
    margin-top: 10px;
    .songName {
      vertical-align: -8px;
    }
    .ver {
      vertical-align: 12px;
    }
    dt,
    dd {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 15px;
      &:first-child {
        width: 60%;
        .iList {
          font-size: 18px;
          float: right;
          .list_menu__item {
            display: inline-block;
          }
          .list_menu__icon_play {
            display: inline-block;
            background-position: -80px 0;
          }
          .list_menu__icon_add,
          .list_menu__icon_play,
          .list_menu__icon_share {
            display: block;
            width: 36px;
            height: 36px;
            background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/icon_list_menu.png?max_age=2592000&v=7f156ebd3cc15abf79d536631818d0e0&v=7f156ebd3cc15abf79d536631818d0e0');
            background-repeat: no-repeat;
          }
          .list_menu__icon_add {
            display: inline-block;
            background-position: -80px -80px;
          }
          .list_menu__icon_share {
            display: inline-block;
            background-position: -80px -40px;
          }
        }
      }
      &:nth-child(2) {
        width: 20%;
      }
      &:nth-child(3) {
        width: 15%;
      }
      a {
        &:hover {
          color: #31c27c;
        }
      }
    }
    .unique {
      background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3b3&v=85678e8f28c7b4bcad5c209b21b7e3b3');
      display: inline-block;
      width: 34px;
      height: 16px;
      background-position: -80px -280px;
      vertical-align: -12px;
      margin-right: 6px;
    }
  }
}
</style>

</style>
