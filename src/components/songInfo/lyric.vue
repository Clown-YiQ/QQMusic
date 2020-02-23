<template>
  <div class="lyric">
    <div class="ly-hd">
      <h2 class="ly-tit">歌词</h2>
      <a href="javascript:;" class="icon-copy"></a>
    </div>
    <div class="lyric__cont limit">
      <div class="lyric__cont_box" id="lrc_content">
        <p>来自尘埃的光 - 蔡维泽</p>
        <p>词：青修</p>
        <p>曲：阿鲲</p>
        <p>制作人：阿鲲</p>
        <p>和声编写：阿鲲/许一鸣/赵一一</p>
        <p>和声：许一鸣/赵一一</p>
        <p>录音混音：周晓明</p>
        <p>配唱指导：阿鲲</p>
        <p>录音混音棚：XM Studio</p>
        <p>音乐制作：柠萌悦心</p>
        <p>音乐发行：哇唧唧哇娱乐</p>
        <p>生于微末中的万千萤火</p>
        <p>乘长风汇聚成熠熠星河</p>
        <p>在云巅之上向世界宣告</p>
        <p>我们将重回荣耀</p>
        <p></p>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="展开" name="1">
            <p>拨开云层落下炽热</p>
            <p>消融冰雪闯过波折</p>
            <p>终于在巅峰的这一刻</p>
            <p>有身影与过去身影重合</p>
            <p>过去未曾来的荣耀</p>
            <p>未来过不去的骄傲</p>
            <p>在你我指尖交错凝结成</p>
            <p>点燃战场的战歌</p>
            <p>漫漫长夜里唯一的亮色</p>
            <p>是平庸中走过来的你和我</p>
            <p>是在云端上 是在尘埃中</p>
            <p>拼尽全力盛放的萤火</p>
            <p>我来自传说去续写传说</p>
            <p>一朝汹涌不枉十年执着</p>
            <p>这一战要让所有人记得</p>
            <p>我们加冕荣耀的时刻</p>
            <p></p>
            <p>拨开云层落下炽热</p>
            <p>消融冰雪闯过波折</p>
            <p>终于在巅峰的这一刻</p>
            <p>有身影与过去身影重合</p>
            <p>过去未曾来的荣耀</p>
            <p>未来过不去的骄傲</p>
            <p>在你我指尖交错凝结成</p>
            <p>点燃战场的战歌</p>
            <p>漫漫长夜里唯一的亮色</p>
            <p>是平庸中走过来的你和我</p>
            <p>是在云端上 是在尘埃中</p>
            <p>拼尽全力盛放的萤火</p>
            <p>我来自传说去续写传说</p>
            <p>一朝汹涌不枉十年执着</p>
            <p>这一战要让所有人记得</p>
            <p>我们加冕荣耀的时刻</p>
            <p></p>
            <p>漫漫长夜里唯一的亮色</p>
            <p>是平庸中走过来的你和我</p>
            <p>是在云端上 是在尘埃中</p>
            <p>拼尽全力盛放的萤火</p>
            <p>拼尽全力盛放的萤火</p>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.lyric {
  .ly-hd {
    padding-bottom: 45px;
    .ly-tit {
      float: left;
      font-size: 20px;
      font-weight: 400;
      margin-right: 10px;
    }
    .icon-copy {
      float: left;
      width: 16px;
      height: 16px;
      background-position: -100px -40px;
      margin-top: 7px;
      overflow: hidden;
      background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3b3&v=85678e8f28c7b4bcad5c209b21b7e3b3');
    }
  }
  .lyric__cont {
    .lyric__cont_box {
      p {
        font-size: 14px;
        color: #000;
        line-height: 26px;
      }
    }
  }
}
</style>
