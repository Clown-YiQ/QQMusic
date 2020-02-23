<template>
  <div class="singer">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="(item,index) in singerList" :key="index">
        <div class="playlist__item_box">
          <div class="playlist__cover mod_cover">
            <a
              href="https://y.qq.com/n/yqq/playsquare/7328934956.html#stat=y_new.index.playlist.pic"
              class="js_playlist"
            >
              <img
                :src="item.imgSrc"
                onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
                :alt="item.title"
                class="playlist__pic"
                style="width:224px;height:224px;"
              />
              <i class="mod_cover__mask"></i>
              <i class="mod_cover__icon_play js_play" data-stat="y_new.index.playlist.play_btn"></i>
            </a>
          </div>
          <h4 class="playlist__title">
            <span class="playlist__title_txt">
              <a
                href="https://y.qq.com/n/yqq/playsquare/7328934956.html#stat=y_new.index.playlist.name"
                class="js_playlist"
              >{{item.title}}</a>
            </span>
          </h4>
          <div class="playlist__other">{{item.playNum}}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      singerList: []
    }
  },
  created() {
    api.getSingerList().then(res => {
      this.singerList = res.data.singerList
    })
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #333;
}
.el-carousel__item {
  width: 300px;
  margin-left: 350px;
}
.el-carousel__mask {
  background-color: #f2f2f2 !important;
}
.playlist__other {
  color: #ccc;
}
</style>
