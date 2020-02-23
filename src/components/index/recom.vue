<template>
  <div class="recom">
    <h2>精彩推荐</h2>
    <el-carousel :interval="8000" type="card" height="400px">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      imgList: []
    }
  },
  created () {
    api.getIndexList().then(res => {
      this.imgList = res.data.imgList
    })
  }
}
</script>

<style lang="scss">
.recom h2 {
  margin: 65px 0 30px;
  letter-spacing: 15px;
  font-size: 30px;
  text-align: center;
  color: #333;
}
</style>
