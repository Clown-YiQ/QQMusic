<template>
  <div class="q-section">
    <ul>
      <li>
        <router-link :to="{name:'index'}">
          <img src="//y.gtimg.cn/mediastyle/yqq/img/logo.png?nowebp=1" class="logo" alt />
        </router-link>
      </li>
      <li class="selected">
        <router-link :to="{name:'index'}" class="color">音乐馆</router-link>
      </li>
      <li>
        <router-link to="#">我的音乐</router-link>
      </li>
      <li>
        <router-link to="#">客户端</router-link>
      </li>
      <li>
        <router-link to="#">开放平台</router-link>
      </li>
      <li>
        <router-link to="#">VIP</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.q-section ul {
  /* position: absolute; */
  left: 180px;
  top: 0;
  > .selected {
    background-color: #31c27c;
    .color {
      color: #fff;
    }
  }
  > li {
    list-style: none;
    float: left;
    // margin-right: -10px;
    height: 90px;
    > a {
      text-decoration: none;
      color: black;
      padding: 0 20px;
      line-height: 90px;
      height: 90px;
      text-align: center;
      font-size: 17px;
      &:hover {
        color: #31c27c;
      }
      > .logo {
        position: relative;
        top: 16px;
      }
    }
  }
}
</style>
