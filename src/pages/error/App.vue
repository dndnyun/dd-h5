<template>
  <div id="app" class="page">
    <div class="weui-msg">
      <div class="weui-msg__icon-area"><i class="weui-icon-warn weui-icon_msg"></i></div>
      <div class="weui-msg__text-area">
        <h2 class="weui-msg__title">异常访问</h2>
        <p class="weui-msg__desc">请使用微信内置浏览器访问此页面</p>
      </div>
      <div class="weui-msg__tips-area">
        <p class="weui-msg__tips">提示详情，请使用微信内置浏览器访问此页面，暂时不支持其他浏览器访问</p>
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

export default {
  data () {
    return {}
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
