<template>
  <div class="rank">
    <h2 class="ranking">排行榜</h2>
    <ul>
      <li class="ranklist" v-for="(item,index) in rankList" :key="index">
        <div class="ranklist__box" :class="item.type">
          <span class="toplist">巅峰榜</span>
          <span class="title">
            <a
              href="https://y.qq.com/n/yqq/toplist/4.html#stat=y_new.index.toplist.detail.4"
              class="ranklist__title"
            >{{item.title}}</a>
          </span>
          <span class="el-icon-minus"></span>
          <ul class="ranklist__songlist">
            <li class="ranklist__song" v-for="(v,i) in item.musicList" :key="i">
              <div class="ranklist__songname">
                <a
                  href="https://y.qq.com/n/yqq/song/233704383_num.html#stat=y_new.index.toplist.songname"
                  class="js_song"
                >{{v.name}}</a>
              </div>
              <div class="ranklist__artist">
                <a
                  href="https://y.qq.com/n/yqq/singer/002J4UUk29y8BY.html#stat=y_new.index.toplist.singername"
                  class="singer"
                >{{v.singer}}</a>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      rankList: []
    }
  },
  created () {
    api.getRankList().then(res => {
      this.rankList = res.data.rankList
    })
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.rank {
  white-space: nowrap;
  width: 1200px;
  margin: 0 auto 60px;
  .ranking {
    margin: 65px 0 30px;
    letter-spacing: 15px;
    font-size: 30px;
    text-align: center;
    color: #333;
  }
  .ranklist {
    display: inline-block;
    z-index: 2;
    width: 20%;
    .ranklist__box {
      position: relative;
      margin-right: 20px;
      height: 500px;
      overflow: hidden;
      background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/bg_index_top.jpg?max_age=2592000&v=3beef369200a0863560787fd560c8205');
      -webkit-transform: scale(1);
      transform: scale(1);
      transition: transform 0.75s;
      &.lx {
        background-position: 0 0;
      }
      &.rg {
        background-position: -224px 0;
      }
      &.xg {
        background-position: -448px 0;
      }
      &.om {
        background-position: -672px 0;
      }
      &.hg {
        background-position: -896px 0;
      }
      .el-icon-minus {
        margin: 20px auto 10px;
        width: 100px;
        font-size: 45px;
      }
      > span {
        display: block;
        font-size: 18px;
        color: #fff;
        margin: 30px 0 0;
        text-align: center;
      }
      .ranklist__title {
        font-size: 22px;
        font-weight: 400;
        color: #fff;
        text-align: center;
        margin-top: 0;
      }
      .ranklist__songlist {
        .ranklist__song {
          a {
            font-size: 12px;
            color: #fff;
          }
        }
        .ranklist__songname {
          margin-top: 20px;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .ranklist__artist {
          a {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
