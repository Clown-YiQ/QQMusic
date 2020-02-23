<template>
    <div class="search-row">
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
        <dl class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="item + '_' + index">
                <router-link :to="{name: 'music', params: {name: item}}">{{ item }}</router-link>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
  data () {
    return {
      searchList: [],
      state: '',
      hotPlaceList: [
        '我们的歌',
        '冰雪奇缘2',
        '张杰',
        '桥边姑娘',
        '星辰大海'
      ]
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
          restaurant.value
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        )
      }
    },
    loadAll () {
      return [
        { value: '1 我们的歌', num: '76.6万' },
        { value: '2 冰雪奇缘2', num: '58.7万' },
        { value: '3 张杰', num: '32.4万' },
        { value: '4 桥边姑娘', num: '28.8万' },
        { value: '5 星辰大海', num: '20.3万' }
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
.search-row {
    height: 247px;
    position: relative;
    overflow: hidden;
    background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/bg_search.jpg');

    .el-icon-search {
        border: 0 none;
        width: 38px;
        height: 35px;
        overflow: visible;
        outline: none;
        background: 0 0;
        font-size: 20px;
        font-weight: 900;
        color: #000;
        margin: 0 auto;
        cursor: pointer;
        &:hover {
            color: #31c27c;
        }
    }
    .el-autocomplete {
        width: 639px;
        height: 270px;
        position: absolute;
        top: 100px;
        left: 635px;
        // border-color: black;
        .el-input__inner {
            height: 50px !important;
        }
    }
    .hotPlace {
        position: absolute;
        top: 170px;
        left: 745px;
        dt {
            color: #fff;
            font-size: 15px;
            display: inline-block;
        }
        dd {
            display: inline-block;
            margin-left: 10px;
            a {
                font-size: 15px;
                color: #fff;
                &:hover {
                    color: #31c27c;
                }
            }
        }
    }
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
    }
}
</style>
