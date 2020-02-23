<template>
  <div class="sOther">
    <div class="oHd">
      <h3 class="oTit">相关热门歌单</h3>
      <div class="oplay-list">
        <ul>
          <li class="playlist__item">
            <div class="playlist__item_box">
              <div class="playlist__cover mod_cover">
                <a href="javascript:;" class="js_playlist">
                  <img
                    src="//qpic.y.qq.com/music_cover/7vlTTvwBiaibKJpyXffTHicMtjH1m8Kkknt3jpU8ibCN0oYQx9faUiadasg/300"
                    alt="华语| 追光之旅"
                    class="playlist__pic"
                  />
                </a>
              </div>
              <h4 class="playlist__title">
                <span class="playlist__title_txt">
                  <a href="javascript:;" class="js_playlist" title="华语| 追光之旅">华语| 追光之旅</a>
                </span>
              </h4>
              <div class="playlist__author">QQ音乐官方歌单</div>
            </div>
          </li>
          <li class="playlist__item">
            <div class="playlist__item_box">
              <div class="playlist__cover mod_cover">
                <a href="javascript:;" class="js_playlist">
                  <img
                    src="//qpic.y.qq.com/music_cover/CvKQUoNyhNvbEXU697tD7IImibfibC2svGScg1nZRxD97o9HeRkalGqQ/300"
                    alt="动情华语 | 火热影视插曲"
                    class="playlist__pic"
                  />
                </a>
              </div>
              <h4 class="playlist__title">
                <span class="playlist__title_txt">
                  <a href="javascript:;" class="js_playlist" title="动情华语 | 火热影视插曲">动情华语 | 火热影视插曲</a>
                </span>
              </h4>
              <div class="playlist__author">筑梦师</div>
            </div>
          </li>
          <li class="playlist__item">
            <div class="playlist__item_box">
              <div class="playlist__cover mod_cover">
                <a href="javascript:;" class="js_playlist">
                  <img
                    src="//qpic.y.qq.com/music_cover/CvKQUoNyhNvbEXU697tD7IImibfibC2svGojXnWudUCo7Iatt4gYZpcA/300"
                    alt="宅家闲暇之必备影视良品"
                    class="playlist__pic"
                  />
                </a>
              </div>
              <h4 class="playlist__title">
                <span class="playlist__title_txt">
                  <a href="javascript:;" class="js_playlist" title="宅家闲暇之必备影视良品">宅家闲暇之必备影视良品</a>
                </span>
              </h4>
              <div class="playlist__author">筑梦师</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="oMv">
      <h3 class="oTit">相关MV</h3>
      <div class="mv_list__item_box" data-vid data-id="1587682">
        <a href="javascript:;" class="mv_list__cover mod_cover js_mv">
          <img
            class="mv_list__pic"
            src="//y.gtimg.cn/music/photo_new/T015R640x360M101003aKLyJ0htYeb.jpg?max_age=2592000"
            onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
            alt="来自尘埃的光 (《全职高手》电视剧片头曲)"
          />
        </a>
        <h3 class="mv_list__title">
          <a href="javascript:;" class="js_mv">来自尘埃的光 (《全职高手》电视剧片头曲)</a>
        </h3>

        <p class="mv_list__singer" title="蔡维泽">
          <a href="javascript:;" title="蔡维泽" class="js_singer">蔡维泽</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sOther {
  margin-left: 170px;
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  .oTit {
    font-size: 20px;
    font-weight: 400;
    line-height: 46px;
  }
  .oplay-list {
    position: relative;
    display: block;
    overflow: hidden;
    ul {
      padding: 0;
    }
    .playlist__item {
      width: 26%;
      // padding-bottom: 14px;
      display: inline-block;
      padding-bottom: 44px;
      margin-left: 15px;
      overflow: hidden;
      font-size: 14px;
      vertical-align: top;
      .playlist__pic {
        width: 100%;
        height: 100%;
      }
      .playlist__item_txt {
        float: left;
        max-width: 100%;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 22px;
        max-height: 44px;
      }
      .playlist__author {
        color: #999;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 22px;
      }
      .playlist__title_txt {
        a {
          font-weight: 400;
          &:hover {
            color: #31c27c;
          }
        }
      }
    }
  }
  .oMv {
    margin-bottom: 15px;
    .mv_list__cover {
      position: relative;
      display: block;
      overflow: hidden;
      padding-top: 49.5476%;
      .mv_list__pic {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 290px;
        height: 164px;
      }
    }
    .mv_list__desc,
    .mv_list__singer,
    .mv_list__title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .mv_list__title {
      a {
        font-weight: 400;
        font-size: 14px;
        zoom: 1;
        &:hover {
          color: #31c27c;
        }
      }
    }
  }
}
</style>
