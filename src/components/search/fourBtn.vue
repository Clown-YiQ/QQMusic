<template>
    <div class="fourBtn">
        <div class="mod_songlist_toolbar">
            <a href="javascript:;" class="mod_btn js_all_play">
                <i class="el-icon-video-play"></i>播放全部
            </a>
            <a href="javascript:;" class="mod_btn js_all_fav">
                <i class="el-icon-circle-plus-outline"></i>添加到
            </a>
            <a href="javascript:;" class="mod_btn js_all_down">
                <i class="el-icon-download"></i>下载
            </a>
            <a href="javascript:;" class="mod_btn js_batch">
                <i class="el-icon-s-operation"></i>批量操作
            </a>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: #333;
}
.mod_songlist_toolbar {
    position: relative;
    margin-bottom: 20px;
    margin-left: 380px;
    .mod_btn {
        min-width: 122px;
        text-align: center;
        border: 1px solid #c9c9c9;
        color: #000;
        border-radius: 2px;
        font-size: 14px;
        margin-right: 6px;
        padding: 0 23px;
        height: 38px;
        line-height: 38px;
        display: inline-block;
        white-space: nowrap;
        box-sizing: border-box;
        overflow: hidden;
        &:hover {
            background-color: #ddd;
        }
        i {
            font-size: 16px;
        }
    }
}
</style>
