<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  mounted () {
    this.getSignature()
  },
  methods: {
    getSignature () {
      let location = window.location
      let url = 'http://' + location.host + location.pathname + location.search
      this.$http
        .security
        .getSignature({
          url: url
        })
        .then(res => {
          this.setWx(res)
        })
    },
    setWx (_options) {
      // 必填，需要使用的JS接口列表
      const jsApiList = [
        'checkJsApi',
        'updateAppMessageShareData',
        'updateTimelineShareData',
        'onMenuShareWeibo',
        'onMenuShareQZone'
      ]

      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appConfig.appId, // 必填，公众号的唯一标识
        timestamp: _options.timestamp, // 必填，生成签名的时间戳
        nonceStr: _options.nonceStr, // 必填，生成签名的随机串
        signature: _options.signature, // 必填，签名
        jsApiList: jsApiList // 必填，需要使用的JS接口列表
      })

      wx.ready(() => {
        // 配置成功之后回调
        console.log('微信JS SDK配置成功！')
      })

      wx.error((res) => {
        console.log('微信JS SDK配置错误！')
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      })
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/public.scss";
  @import "@/assets/index.scss";

  .page-wrap {
    position: relative;
    overflow: hidden;
    min-height: 100%;
  }

  .page-title {
    font-size: rem(26);
    padding: 1.2em rem(30) 1em;
    font-weight: bold;

    .page-breadcrumb {
      margin-top: rem(8);
      font-size: rem(12);
      *zoom: 1;

      &:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
      }

      li {
        float: left;

        &:last-child {
          &:after {
            display: none;
          }
        }

        &:after {
          font-family: "ddfont" !important;
          content: '\e646';
          margin: 0 rem(8);
        }

        span {
          opacity: .5;
        }

        a {
          color: inherit;
        }
      }
    }
  }
</style>
