<template>
  <div class="musicList">
    <dl class="tb">
      <dt>歌曲</dt>
      <dt>歌手</dt>
      <dt>专辑</dt>
      <dt>时长</dt>
    </dl>
    <dl class="tbSong" v-for="(item,index) in songList" :key="index">
      <dd>
        <router-link :to="{name:'songInfo'}">{{item.song}}</router-link>
        <i class="unique"></i>
        <div class="iList">
          <i class="el-icon-video-play"></i>
          <i class="el-icon-circle-plus-outline"></i>
          <i class="el-icon-download"></i>
          <i class="el-icon-share"></i>
        </div>
      </dd>
      <dd>
        <router-link to="#">{{item.singer}}</router-link>
      </dd>
      <dd>
        <router-link to="#">{{item.album}}</router-link>
      </dd>
      <dd>
        <router-link to="#">{{item.sTime}}</router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      songList: []
    }
  },
  created () {
    api.getMusicList().then(res => {
      this.songList = res.data.songList
    })
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #333;
}
.musicList {
  width: 1200px;
  margin: 0 auto 50px;
  .tb,
  .tbSong {
    height: 50px;
    line-height: 50px;
    background-color: rgba(0, 0, 0, 0.01);
    color: #999;
    padding-right: 122px;
    padding-left: 20px;
    &:nth-child(2n) {
      background-color: #f2f2f2;
    }
    dt,
    dd {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 15px;
      &:first-child {
        width: 45%;
        .iList {
          font-size: 18px;
          float: right;
        }
      }
      &:nth-child(2) {
        width: 21.5%;
      }
      &:nth-child(3) {
        width: 21.5%;
      }
      &:nth-child(4) {
        width: 10%;
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
      vertical-align: middle;
      margin-right: 6px;
    }
  }
}
</style>
