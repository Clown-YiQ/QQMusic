<template>
  <div class="search-panel">
    <el-autocomplete
      popper-class="my-autocomplete"
      v-model="state"
      :fetch-suggestions="querySearch"
      placeholder="搜索音乐、MV、歌单、用户"
      @select="handleSelect"
    >
      <button class="el-icon-search el-input__icon" slot="suffix" @click="handleIconClick"></button>
      <template slot-scope="{ item }">
        <div class="name">
          <router-link :to="{name:'search'}">{{ item.value }}</router-link>
        </div>
        <span class="num">{{ item.num }}</span>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchList: [],
      state: ''
    }
  },
  methods: {
    querySearch (queryString, cb) {
      var searchList = this.searchList
      var results = queryString
        ? searchList.filter(this.createFilter(queryString))
        : searchList
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    },
    loadAll () {
      return [
        { value: '来自尘埃的光（《全职高手》电视剧片头曲）', num: '76.6万' },
        { value: '冰雪奇缘2', num: '58.7万' },
        { value: '张杰', num: '32.4万' },
        { value: '桥边姑娘', num: '28.8万' },
        { value: '星辰大海', num: '20.3万' }
      ]
    },
    handleSelect (item) {
      console.log(item)
    },
    handleIconClick (ev) {
      console.log(ev)
    }
  },
  mounted () {
    this.searchList = this.loadAll()
  }
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
.search-panel {
  position: relative;
}
.el-icon-search {
  border: 0 none;
  width: 38px;
  height: 35px;
  overflow: visible;
  outline: none;
  background: 0 0;
  font-size: 18px;
  font-weight: 900;
  color: #c9c9c9;
  cursor: pointer;
  &:hover {
    color: #31c27c;
  }
}
.el-autocomplete {
  width: 230px;
  position: absolute;
  top: 25px;
  // border-color: black;
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;
    .name {
      width: 100px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: inline-block;
    }
    .num {
      width: 20px;
      font-size: 12px;
      color: #b4b4b4;
      display: block;
      float: right;
    }
    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>
