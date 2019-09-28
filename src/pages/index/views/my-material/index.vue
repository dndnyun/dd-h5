<template>
  <div ref="mescroll" class="my-material-wrap mescroll">

    <div class="mescroll-scroll">

      <div class="page-title">
        我的素材
        <ul class="page-breadcrumb">
          <li>
            <router-link :to="{ name: 'box'}">首页</router-link>
          </li>
          <li><span>我的素材</span></li>
        </ul>
      </div>

      <ul class="box-list">
        <li v-for="(item, key, index) in items" :key="index" @click="handleStatistical(item)">
          <div class="box-item">

            <div class="box-icon">
              <img class="img" v-if="item.src" :src="item.src" alt="文章缩略图">
              <i class="ddfont dd-tupian" v-if="!item.src"></i>
            </div>

            <div class="box-content">
              <div class="title">{{ item.title }}</div>
            </div>

            <div class="box-right">
              <i class="ddfont dd-gengduo icon-right" @click="handleDetail(item)"></i>
            </div>
          </div>
          <div class="desc">{{ item.desc }}</div>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
import qs from 'qs'

export default {
  data () {
    return {
      userInfo: {
        user: {}
      },
      mescroll: null,
      loading: false,
      items: [
        // {
        //   src: '',
        //   title: '这是一篇长篇大论标题的文章',
        //   desc: '今日0人，近7天0人',
        //   path: 'my-material'
        // }
      ]
    }
  },
  mounted () {
    this.initList()
    this.userInfo = appConfig.getToken()
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
    handleStatistical (_item) {
      console.log('统计页面', _item)
    },
    handleDetail (_item) {
      let params = {
        channel: 'detail', // 分享页 - share ， 详情页 - detail
        userId: this.userInfo.user.id, // 用户 id
        articleId: _item.id // 文章 id
      }

      let paramsStr = qs.stringify(params)

      window.location.href = `${appConfig.siteUrl}/share.html?${paramsStr}`
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
    getList (_action) {
      if (this.loading) {
        this.mescroll.endSuccess()
        return
      }
      this.loading = true
      let id = ''
      if (_action === 'down') {
        this.items = []
        this.getPostList()
      } else {
        if (this.items.length < 1) {
          this.mescroll.endSuccess(this.items.length)
          return
        }
        id = this.items[this.items.length - 1].id
        this.getPostList({
          articleId: id
        })
      }
    },
    getPostList (_params) {
      this.$http
        .content
        .getPostList(_params)
        .then(res => {
          console.log(res)

          this.loading = false

          if (res.length > 0) this.items = this.items.concat(res)

          this.mescroll.endSuccess(res.length)

          console.log(this.mescroll)
        })
        .catch(e => {
          console.log('获取页面列表失败', e)
          weui.topTips('获取页面列表失败')
          this.mescroll.endErr()
        })
    }
  }

}
</script>

<style lang="scss">
  .my-material-wrap {
    /*background: linear-gradient(to bottom, #FCCE02, #FEA909);*/
    background: #FCCE02;
    /*min-height: 100%;*/

    .minirefresh-scroll {
      background: #FCCE02;
    }

    .page-title {
      color: #fff7d1;
    }

    .box-list {
      padding: rem(10) rem(30);

      li {

        margin-bottom: rem(20);
        border-radius: rem(20);
        box-shadow: 0 rem(10) rem(30) rgba(black, .1);

        .desc {
          color: rgba(0, 0, 0, .6);
          font-weight: bold;
          font-size: rem(14);
          background: #ffd53b;
          margin-top: rem(-20);
          padding: rem(20) rem(20) 0;
          height: rem(60);
          line-height: rem(40);
          border-radius: 0 0 rem(20) rem(20);
        }

        .box-item {
          display: flex;
          position: relative;
          background: #FFF9EC;
          border-radius: rem(20);
          padding: rem(10) rem(20);

          .box-right {
            position: relative;
            width: rem(30);
            margin-left: rem(20);

            .icon-right {
              position: absolute;
              right: 0;
              height: rem(30);
              width: rem(30);
              line-height: rem(22);
              text-align: center;
              top: 50%;
              color: #000;
              font-weight: bold;
              transform: translate(0, -50%);
              border: rem(4) solid rgba(0, 0, 0, .2);
              border-radius: rem(30);
            }
          }

          .box-icon {
            width: rem(50);
            height: rem(50);
            margin: rem(10) rem(20) rem(10) 0;

            img {
              width: rem(50);
              height: rem(50);
              border-radius: rem(20);
              background: #ffdd46;
            }

            .ddfont {
              display: flex;
              width: rem(50);
              height: rem(50);
              border-radius: rem(20);
              font-size: rem(30);
              background: #ffdd46;
              color: #fff;
              justify-content: center;
              align-items: center;
            }
          }

          .box-content {
            flex: 1;
            display: flex;
            align-items: center;

            .title {
              font-weight: bold;
              font-size: rem(16);
              line-height: rem(20);
              color: #504A62;
              display: -webkit-box;
              text-overflow: ellipsis;
              overflow: hidden;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2; //当属性值为3，表示超出3行隐
            }
          }
        }
      }
    }
  }
</style>
