import dayjs from 'dayjs'
import Vue from 'vue'

const filters = {
  dateFormat (_timestamp, _format = 'YYYY-MM-DD HH:mm:ss') {
    if (!_timestamp) return '-'
    return dayjs(_timestamp).format(_format)
  },
  mediaTypeFilter (_type) {
    return {
      '001': '新闻动态',
      '002': '通知公告'
    }[_type]
  }
}

// 注册全局通用过滤器
for (let filter in filters) {
  Vue.filter(filter, filters[filter])
}
