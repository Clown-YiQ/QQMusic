<template>
  <div class="newM">
    <ul>
      <li v-for="(item,index) in songList" :key="index">
        <img :src="item.imgUrl" alt />
        <div class="text">
          <a href="#">{{item.sTitle}}</a>
          <a href="#">{{item.sActor}}</a>
        </div>
        <span>{{item.time}}</span>
      </li>
    </ul>
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
    api.getSongList().then(res => {
      this.songList = res.data.songList
    })
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: #333;
}
.newM {
  padding-bottom: 40px;
  ul {
    width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    li {
      position: relative;
      width: 28%;
      list-style: none;
      float: left;
      padding: 10px;
      margin-left: 5px;
      margin-right: 5px;
      border-bottom: 1px solid #ccc;
      a {
        display: block;
        font-size: 14px;
        max-width: 99%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 400;
      }
      .text {
        display: inline-block;
        position: absolute;
        top: 35px;
        left: 110px;
        a {
          &:hover {
            color: #31c27c;
          }
        }
      }
      span {
        float: right;
      }
    }
  }
}
</style>
