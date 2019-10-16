<template>
  <div ref="mescroll" class="material-user-wrap mescroll">

    <div class="mescroll-scroll">

      <div class="page-title">
        用户统计
        <ul class="page-breadcrumb">
          <li>
            <router-link :to="{ name: 'box'}">首页</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'my-material'}">我的素材</router-link>
          </li>
          <li>
            <a href="javascript: void(0)" @click="goDetail">文章统计</a>
          </li>
          <li><span>用户统计</span></li>
        </ul>
      </div>

      <ul class="box-list">
        <li v-for="(item, key, index) in list" :key="index">
          <div class="box-item">

            <div class="box-icon">
              <img class="img" v-if="item.avatar" :src="item.avatar" alt="文章缩略图">
              <i class="ddfont dd-user" v-if="!item.avatar"></i>
            </div>

            <div class="box-content">
              <div class="title">点击时间 {{ item.createTime | dateFormat('YYYY年M月D日') }}， 浏览时长 {{ item.readTime }} 秒</div>
            </div>
          </div>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
import scrollMixins from '@/mixins/scrollMixins'

export default {
  name: 'User',
  mixins: [scrollMixins],
  data () {
    return {}
  },
  mounted () {
    this.userInfo = appConfig.getToken()
  },
  methods: {
    goDetail () {
      this.$router.push({ name: 'detail-material', query: { id: this.$route.query.article } })
    },
    getListServer (_params) {
      this.$http
        .content
        .getPostDetailUser({
          articleId: Number(this.$route.query.article),
          userId: Number(this.$route.query.user)
        })
        .then(res => {
          console.log(res)

          this.loading = false

          if (res.length > 0) this.list = this.list.concat(res)

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
  .material-user-wrap {
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
