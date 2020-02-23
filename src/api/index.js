import axios from 'axios'

var api = {
  getIndexList () {
    return axios.get('http://rap2api.taobao.org/app/mock/239988/index/list')
  },
  getSingerList () {
    return axios.get('http://rap2api.taobao.org/app/mock/239988/index/singer')
  },
  getSongList () {
    return axios.get('http://rap2api.taobao.org/app/mock/239988/index/song')
  },
  getRankList () {
    return axios.get('http://rap2api.taobao.org/app/mock/239988/index/rank')
  },
  getSearchList () {
    return axios.get('http://rap2api.taobao.org/app/mock/239988/search/list')
  },
  getMusicList () {
    return axios.get('http://rap2api.taobao.org/app/mock/239988/search/songList')
  },
  login (params) {
    return axios.get('http://rap2api.taobao.org/app/mock/239988/qqmusic/login', params)
  },
  register (params) {
    return axios.get('http://rap2api.taobao.org/app/mock/239988/qqmusic/register', params)
  }
}

export default api
