<template>
  <div class="nw">
    <h2>新歌首发</h2>
    <a href="javascript:;" class="mod_btn js_all_play">
      <i class="el-icon-video-play" data-stat="y_new.index.new_song.playall"></i>播放全部
    </a>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <a href="#">{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    api.getIndexList().then(res => {
      this.list = res.data.list
    })
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.nw {
  background-color: #f2f2f2;
  width: 700px;
  margin: 60px auto 30px;
  h2 {
    letter-spacing: 15px;
    font-size: 30px;
    text-align: center;
    color: #333;
  }
  ul {
    margin-top: 20px;
    margin-left: 70px;
    li {
      display: inline-block;
      font-size: 15px;
      margin: 0 24px;
      color: #333;
      &:first-child {
        a {
          color: #31c27c;
        }
      }
      a {
        color: #333;
        &:hover {
          color: #31c27c;
        }
      }
    }
  }
}
.mod_btn {
  position: absolute;
  left: 360px;
  top: 120px;
  margin-top: -10px;
  border: 1px solid #ccc;
  color: #000;
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
.el-icon-video-play {
  font-size: 16px;
}
</style>
