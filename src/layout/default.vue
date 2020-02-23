<template>
    <div class="layout-default">
        <el-container>
            <el-header style="height:90px;">
                <my-header />
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>
                <my-footer />
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import MyHeader from '@/components/header/header'
import MyFooter from '@/components/footer/footer'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/public/layout.scss';
</style>
