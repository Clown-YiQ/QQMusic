<template>
  <div class="s-Nav">
    <dl class="navList">
      <dd v-for="(item,index) in navList" :key="index">
        <router-link to="#">{{item}}</router-link>
      </dd>
    </dl>
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
    api.getSearchList().then(res => {
      this.navList = res.data.navList
    })
  }
}
</script>

<style lang="scss" scoped>
.s-Nav {
  .navList {
    margin-left: 360px;
    dd {
      display: inline-block;
      margin: 20px 20px 30px;
      &:first-child {
        a {
          color: #31c27c;
        }
      }
      a {
        text-decoration: none;
        color: #333;
        font-size: 16px;
        &:hover {
          color: #31c27c;
        }
      }
    }
  }
}
</style>
