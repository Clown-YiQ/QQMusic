<template>
  <div class="s-com">
    <div class="part__hd">
      <h2 class="part__tit">
        评论
        <span class="c_tx_thin part__tit_desc js_all_comment_num">共3472条评论</span>
      </h2>
    </div>
    <div class="mod_comment js_cmt_input">
      <div class="comment__input">
        <div class="comment__textarea js_comment__textarea c_bg_normal">
          <el-input type="textarea" placeholder="期待你的神评论" maxlength="300" show-word-limit></el-input>
          <a class="comment__face js_cmt_face" href="javascript:;" data-type="reply">
            <i class="icon_comment icon_comment_face"></i>
          </a>
          <div class="comment__tool">
            <a href="javascript:;" class="mod_btn_green comment__tool_btn js_send_reply">发表评论</a>
          </div>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="comment">
      <el-table :data="tableData" style="width: 100%" max-height="250">
        <el-table-column prop="name" label="用户名" width="220"></el-table-column>
        <el-table-column prop="com" label="评论" width="637"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     com: '',
  //     textarea: '',
  //     textList: []
  //   }
  // },
  // methods: {
  //   addComment() {
  //     // if(type === 'up' && e.keyCode !== 13) {
  //     //   return;
  //     // }
  //     console.log(this.text)
  //     this.textList.push(this.text)
  //   },
  //   deleteText(index) {
  //     this.textList.splice(index, 1)
  //   }
  // }
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    addComment () {
      console.log(this.text)
      this.textList.push(this.text)
    },
    deleteText (index) {
      this.textList.splice(index, 1)
    }
  },
  data () {
    return {
      tableData: [
        {
          name: 'XXX',
          com: '好听'
        },
        {
          name: 'XXX',
          com: '如果你喜欢，就把这一切当作是荣耀而不是炫耀'
        },
        {
          name: 'XXX',
          com: '兴欣之火，可以燎原；冠军之队，王者之师'
        },
        {
          name: 'XXX',
          com: '欢迎回到神之领域，愿有你的荣耀永不散场'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.s-com {
  width: 857px;
  margin-left: 347px;
}
.part__hd,
.part_detail__hd {
  overflow: hidden;
  height: 60px;
}
.part__tit,
.part_detail__tit {
  float: left;
  font-size: 24px;
  font-weight: 400;
  line-height: 58px;
  font-family: \5fae\8f6f\96c5\9ed1;
}
.part__tit_desc {
  font-size: 14px;
  margin-left: 12px;
}
.c_tx_thin {
  color: #999;
}
.comment__tool {
  display: inline-block;
  margin-top: 5px;
}
.comment__tool a {
  margin-right: 5px;
  margin-left: 775px;
}
.comment__tool_btn {
  width: 80px;
  line-height: 27px;
  height: 27px;
  text-align: center;
  padding: 0;
}
.mod_btn,
.mod_btn_green {
  border-radius: 2px;
  font-size: 14px;
  margin-right: 6px;
  height: 38px;
  line-height: 38px;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
}
.mod_btn_green {
  border: 1px solid #31c27c;
  background-color: #31c27c;
  color: #fff;
}
.icon_comment_face {
  position: absolute;
  right: 800px;
  top: 133px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-position: 0 0;
  vertical-align: 7px;
  background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/comment.png?max_age=2592000&v=d415294b1d14d55fba81ab229ae3f88a&v=d415294b1d14d55fba81ab229ae3f88a');
}
.comment {
  margin-bottom: 20px;
  button {
    background-color: #fff;
    padding: 5px;
    border: 1px solid #ccc;
    color: #31c27c !important;
  }
}
</style>
