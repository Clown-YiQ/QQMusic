<template>
    <div class="q-header">
        <el-row>
            <el-col :span="14">
                <q-section />
            </el-col>
            <el-col :span="5">
                <search-bar />
            </el-col>
            <el-col :span="2">
                <geo />
            </el-col>
            <el-col :span="5">
                <pro />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import QSection from '@/components/header/section'
import searchBar from '@/components/header/searchBar'
import Geo from '@/components/header/geo'
import Pro from '@/components/header/pro'
export default {
  components: {
    QSection,
    searchBar,
    Geo,
    Pro
  }
}
</script>

<style lang="scss" scoped>
</style>
