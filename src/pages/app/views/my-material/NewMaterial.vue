<template>
  <div class="page-wrap new-material-wrap">
    <div class="page-title">
      新增图文分享
      <ul class="page-breadcrumb">
        <li>
          <router-link :to="{ name: 'box'}">首页</router-link>
        </li>
        <li><span>图文编辑</span></li>
      </ul>
    </div>

    <div class="post-content">

      <div>
        <h2>我是一个标题</h2>
      </div>

      <div>
        <section>我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章</section>
      </div>

      <div>
        <h2>我是一个标题</h2>
      </div>

      <div>
        <section>我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章</section>
      </div>

      <div>
        <div class="img">
          <img src="//ws1.sinaimg.cn/large/6a39992dly1fglotksjpdj20m206o0te.jpg" alt="coding">
        </div>
      </div>

      <div>
        <section>我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章</section>
      </div>

      <div>
        <section>我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章</section>
      </div>

      <div>
        <section>我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章我是文章</section>
      </div>

    </div>

    <div class="post-btn">
      <div v-for="item in buttons" :key="item.icon">
        <router-link :to="{ name: item.path}"><i class="ddfont" :class="item.icon"></i><span>{{ item.title }}</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewMaterial',
  data () {
    return {
      buttons: [
        {
          icon: 'dd-biaoti',
          title: '标题',
          path: 'new-material'
        },
        {
          icon: 'dd-zhengwen',
          title: '正文',
          path: 'new-material'
        },
        {
          icon: 'dd-tu',
          title: '图片',
          path: 'new-material'
        },
        {
          icon: 'dd-shipin',
          title: '视频',
          path: 'new-material'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/index.scss";

  .new-material-wrap {
    display: flex;
    flex-flow: column;
    height: 100%;

    .page-title {
      background: #FDCE03;
    }

    .post-content {
      flex: 1;
      overflow: auto;
      padding: 0 rem(15);

      h2 {
        font-size: rem(17);
        font-weight: 500;
        color: #333;
        line-height: rem(24);
        margin: 0 0 rem(7);
        text-align: center;
        padding-bottom: rem(10);
        margin-top: rem(30);
        border-bottom: rem(.5) solid #E5E5E5;
      }

      > div {
        padding-bottom: rem(10);

        &:last-child {
          border-bottom: none;
        }
      }

      .product-detail {
        img {
          display: block;
          margin: auto;
          max-width: 100%;
        }
      }

      section {
        font-size: rem(15);
        color: #666;
        line-height: rem(26);
        white-space: pre-wrap;
      }

      .img {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000;
        border-radius: rem(10);

        img {
          //height: rem(200);
          width: 100%;
        }

        .player {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: rem(46);
          width: rem(46);
          //background: url('./assets/player.png') no-repeat center;
          background-size: 100% 100%;
        }
      }
    }

    .post-btn {
      height: rem(60);
      background: #FDCE03;
      display: flex;

      div {
        text-align: center;
        flex: 1;
        font-size: rem(16);

        a {
          height: rem(60);
          color: rgba(0, 0, 0, .3);
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;

          .ddfont {
            display: block;
            margin-right: rem(5);
            font-size: rem(24);
          }

          span {
            display: block;
          }

          &.router-link-exact-active {
            color: #000;
          }
        }
      }
    }
  }
</style>
