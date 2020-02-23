<template>
  <div class="page-index">
    <el-row>
      <el-col :span="24">
        <q-nav />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <sug />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <singer />
      </el-col>
    </el-row>
    <el-row class="bg">
      <el-col :span="24">
        <new-music />
      </el-col>
    </el-row>
    <el-row class="bg">
      <el-col :span="24">
        <music />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <recom />
      </el-col>
    </el-row>
    <el-row class="bg">
      <el-col :span="24">
        <rank />
      </el-col>
    </el-row>
    <side />
  </div>
</template>

<script>
import QNav from '@/components/index/nav'
import Sug from '@/components/index/sug'
import Singer from '@/components/index/singer'
import newMusic from '@/components/index/newMusic'
import Music from '@/components/index/music'
import Recom from '@/components/index/recom'
import Rank from '@/components/index/rank'
import Side from '@/components/index/side'
export default {
  components: {
    Sug,
    QNav,
    Singer,
    newMusic,
    Music,
    Recom,
    Rank,
    Side
  }
}
</script>

<style lang="scss">
@import '@/assets/css/public/layout.scss';
/* .page-index {
    width: 100%;
    background-color: #f2f2f2;
} */
.bg {
  background-color: #f2f2f2;
}
.page-index {
  .q-nav {
    ul {
      li {
        &:first-child {
          a {
            color: #31c27c;
          }
        }
      }
    }
  }
}
</style>
