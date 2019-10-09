<template>
  <div id="app" class="page">
    <div class="weui-msg" v-if="showFailed">
      <div class="weui-msg__icon-area"><i class="weui-icon-warn weui-icon_msg"></i></div>
      <div class="weui-msg__text-area">
        <h2 class="weui-msg__title">授权失败</h2>
        <p class="weui-msg__desc">内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:void(0);">文字链接</a></p>
      </div>
      <div class="weui-msg__tips-area">
        <p class="weui-msg__tips">提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:void(0);">文字链接</a></p>
      </div>
      <div class="weui-msg__opr-area">
        <p class="weui-btn-area">
          <a href="javascript: void(0)" @click="handleOauth2" class="weui-btn weui-btn_default">重新授权</a>
        </p>
      </div>
      <div class="weui-msg__extra-area">
        <div class="weui-footer">
          <p class="weui-footer__links">
            <a href="javascript:void(0);" class="weui-footer__link">登登获客</a>
          </p>
          <p class="weui-footer__text">Copyright &copy; 2019-2020 dndnyun.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getQueryParameters } from '@/assets/helper.js'

export default {
  data () {
    return {
      showFailed: false,
      queryString: {}
    }
  },
  mounted () {
    this.queryString = getQueryParameters()
    if (this.queryString.code) {
      this.login(this.queryString.code)
    } else {
      if (this.queryString.state === 'app') {
        this.showFailed = true
        console.log('授权失败')
      } else {
        if (appConfig.isiOS) {
          window.WeixinJSBridge.call('closeWindow')
        } else {
          document.addEventListener('WeixinJSBridgeReady', function () {
            window.WeixinJSBridge.call('closeWindow')
          }, false)
        }
      }
    }
  },
  methods: {
    handleOauth2 () {
      window.location.replace(appConfig.wxAuth)
    },
    login (_code) {
      this.$http
        .security
        .login({
          code: _code
        })
        .then(res => {
          console.log(res)
          window.localStorage.setItem('DD_X_USER_INFO', JSON.stringify(res))
          this.goApp()
        })
        .catch(e => {
          console.log('获取用户信息失败', e)
          this.showFailed = true
          weui.topTips('获取用户信息失败')
        })
    },
    goApp () {
      let page = ''
      if (this.queryString.state === 'app') {
        page = '/index.html'
      } else {
        page = '/share.html?channel=share&articleId=' + this.queryString.state
      }
      let path = appConfig.siteUrl + page
      window.location.replace(path)
    }
  }
}
</script>

<style lang="scss">
  html, body {
    height: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: -apple-system-font, "Helvetica Neue", Helvetica, sans-serif;
  }

  ul {
    list-style: none;
  }

  body, .page {
    background-color: #EDEDED;
  }

  .page {
    box-sizing: border-box;
  }

  /* lib */

  .link {
    color: #07C160;
  }

  /* layout */

  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }

  .page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    z-index: 1; // fix 滑动几次后可滚动区域会卡住的问题
  }
</style>
