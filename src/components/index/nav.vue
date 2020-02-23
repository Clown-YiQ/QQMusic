<template>
  <div class="q-nav">
    <ul>
      <li v-for="(val,index) in navList" :key="index">
        <a href="#">{{val}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      navList: []
    }
  },
  created () {
    api.getIndexList().then(res => {
      this.navList = res.data.navList
    })
  }
}
</script>

<style lang="scss" scoped>
a,
li {
  text-decoration: none;
  list-style: none;
  color: black;
}
.q-nav {
  padding-left: 400px;
  background-color: #fff;
  ul {
    width: 990px;
    border-top: 1px solid #fafafa;
    height: 51px;
    padding-left: 170px;
    line-height: 51px;
    li {
      float: left;
      width: 88px;
      text-align: center;
      a {
        &:hover {
          color: #31c27c;
        }
      }
      .selected {
        color: #31c27c;
      }
    }
  }
}
</style>
