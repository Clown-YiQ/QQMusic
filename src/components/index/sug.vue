<template>
  <div class="sug">
    <h2>歌单推荐</h2>
    <ul>
      <li v-for="(item,index) in sugList" :key="index">
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
      sugList: []
    }
  },
  created () {
    api.getIndexList().then(res => {
      this.sugList = res.data.sugList
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
.sug {
  background-color: #fafafa;
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
    margin-left: 5px;
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
</style>
