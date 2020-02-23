<template>
  <div class="music-play">
    <el-row class="cover">
      <el-col :span="16">
        <hd-btn />
        <play-list />
      </el-col>
      <el-col :span="8">
        <music-detail />
      </el-col>
    </el-row>
    <el-row class="cover">
      <el-col :span="24">
        <play />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HdBtn from '@/components/audioPlay/hdBtn'
import PlayList from '@/components/audioPlay/playList'
import MusicDetail from '@/components/audioPlay/musicDetail'
import Play from '@/components/audioPlay/play'
export default {
  components: {
    HdBtn,
    PlayList,
    MusicDetail,
    Play
  }
}
</script>

<style>
.music-play {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  /* line-height: 300px; */
  color: #fff;
  margin: 0 auto;
}

.music-play::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent
    url('https://y.gtimg.cn/music/photo_new/T002R300x300M000001ybzgu1cVjIO.jpg?max_age=2592000')
    center center no-repeat;
  filter: blur(8px);
  background-size: cover;
}
.cover {
  background-color: rgba(33, 56, 84, 0.5);
}
.aplayer-lrc p {
  font-size: 15px !important;
}
.aplayer-body {
  height: 100px !important;
}
.aplayer.aplayer-withlrc .aplayer-body .aplayer-pic {
  height: 100px !important;
  width: 100px !important;
}
</style>
