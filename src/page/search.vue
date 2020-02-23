<template>
  <div class="q-search">
    <el-row>
      <el-col :span="24">
        <search-row />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <search-nav />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <four-btn />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <music-list />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <search-foot />
      </el-col>
    </el-row>
    <side />
  </div>
</template>

<script>
import SearchRow from '@/components/search/searchRow'
import SearchNav from '@/components/search/searchNav'
import FourBtn from '@/components/search/fourBtn'
import MusicList from '@/components/search/musicList'
import SearchFoot from '@/components/search/searchFoot'
import Side from '@/components/index/side'
export default {
  components: {
    SearchRow,
    SearchNav,
    FourBtn,
    MusicList,
    SearchFoot,
    Side
  }
}
</script>

<style lang="scss">
.q-search {
  background-color: #fafafa;
}
</style>
