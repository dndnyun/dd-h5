<template>
  <div id="app">
    <iframe :src="article.url" height="100%" width="100%" frameborder="0" class="__dd_content-wrap"></iframe>
    <Share v-if="channel === 'share'"></Share>
    <Detail v-if="channel === 'detail'"></Detail>
  </div>
</template>

<script>
import qs from 'qs'
import { getQueryParameters } from '@/assets/helper.js'
import Detail from './components/Detail'
import Share from './components/Share'

export default {
  components: { Detail, Share },
  data () {
    return {
      queryString: {},
      channel: '',
      article: {}
    }
  },
  mounted () {
    this.queryString = getQueryParameters()
    console.log(this.queryString)
    this.judgeChannel(this.queryString.channel)
    this.getArticleById()
  },
  methods: {
    judgeChannel (_channel) {
      if (_channel === 'detail') {
        this.channel = 'detail'
      } else {
        this.channel = 'share'
      }
      console.log('分辨平台', _channel)
    },
    getArticleById () {
      this.$http
        .content
        .getArticleById({
          articleId: this.queryString.articleId
        })
        .then(res => {
          this.article = res

          let params = {
            channel: 'share', // 分享页 - share ， 详情页 - detail
            userId: this.queryString.userId, // 用户 id
            articleId: this.queryString.articleId // 文章 id
          }

          let paramsStr = qs.stringify(params)

          wx.ready(() => {
            // 配置成功之后回调
            console.log('微信JS SDK配置成功！')
            wx.updateAppMessageShareData({
              title: this.article.title + ' - 登登获客', // 分享标题
              desc: this.article.summary + ' - 登登获客', // 分享描述
              link: appConfig.siteUrl + '/share.html?' + paramsStr, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: appConfig.siteUrl + '/favicon.jpeg', // 分享图标
              success: function () {
                // 设置成功
                console.log('设置成功')
              }
            })
          })
          console.log('获取文章', res)

          this.getSignature()
        })
    },
    getSignature () {
      let location = window.location
      this.$http
        .security
        .getSignature({
          url: location.href
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
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appConfig.appId, // 必填，公众号的唯一标识
        timestamp: _options.timestamp, // 必填，生成签名的时间戳
        nonceStr: _options.nonceStr, // 必填，生成签名的随机串
        signature: _options.signature, // 必填，签名
        jsApiList: jsApiList // 必填，需要使用的JS接口列表
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

  html, body, #app {
    overflow: hidden;
  }

  .__dd_content-wrap {
    height: 100%;
    width: 100%;
  }
</style>
