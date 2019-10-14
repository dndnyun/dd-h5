import dayjs from 'dayjs'
import Vue from 'vue'

const filters = {
  dateFormat (_timestamp, _format = 'YYYY-MM-DD HH:mm:ss') {
    if (!_timestamp) return '-'
    return dayjs(_timestamp).format(_format)
  },
  sToHs (s) {
    // 计算分钟
    // 算法：将秒数除以60，然后下舍入，既得到分钟数
    let h
    h = Math.floor(s / 60)
    // 计算秒
    // 算法：取得秒%60的余数，既得到秒数
    s = s % 60
    // 将变量转换为字符串
    h += ''
    s += ''
    // 如果只有一位数，前面增加一个 0
    h = (h.length === 1) ? '0' + h : h
    s = (s.length === 1) ? '0' + s : s
    return h + ':' + s
  }
}

// 注册全局通用过滤器
for (let filter in filters) {
  Vue.filter(filter, filters[filter])
}
