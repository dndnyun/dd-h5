export default {
  data () {
    return {
      list: [],
      loading: false,
      mescroll: null
    }
  },
  mounted () {
    this.initList()
  },
  methods: {
    initList () {
      this.mescroll = new MeScroll(this.$refs.mescroll, {
        down: {
          isBounce: false,
          callback: this.downCallback
        },
        up: {
          isBounce: false,
          auto: true, // 是否在初始化时以上拉加载的方式自动加载第一页数据; 默认false
          page: {
            num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
            size: 10 // 每页数据的数量
          },
          noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
          htmlNodata: '<p class="upwarp-nodata">没有更多数据了</p>',
          callback: this.upCallback
        }
      })
    },
    downCallback () {
      // 下拉事件
      console.log('下拉')
      this.getList('down')
    },
    upCallback () {
      // 上拉事件
      console.log('上拉')
      this.getList('up')
    },
    // 处理下拉，上拉逻辑
    getList (_action) {
      if (this.loading) {
        this.mescroll.endSuccess()
        return
      }
      this.loading = true
      let id = ''
      if (_action === 'down') {
        this.items = []
        this.getListServer()
      } else {
        if (this.items.length < 1) {
          this.mescroll.endSuccess(this.items.length)
          return
        }
        id = this.items[this.items.length - 1].id
        this.getListServer(id)
      }
    }
  }
}
