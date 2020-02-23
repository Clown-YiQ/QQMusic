<template>
  <div class="sInfo">
    <el-row>
      <el-col class="sNav" :span="24">
        <q-nav />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <info-head />
      </el-col>
    </el-row>
    <el-row class="songLayout">
      <el-col :span="14">
        <lyric />
      </el-col>
      <el-col :span="10">
        <song-other />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <s-com />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InfoHead from '@/components/songInfo/infoHead'
import QNav from '@/components/index/nav'
import Lyric from '@/components/songInfo/lyric'
import SongOther from '@/components/songInfo/songOther'
import SCom from '@/components/songInfo/sComment'

export default {
  components: {
    QNav,
    InfoHead,
    Lyric,
    SongOther,
    SCom
  }
}
</script>

<style lang="scss" scoped>
.songLayout {
  width: 1200px;
  margin: 0 auto;
}
</style>
