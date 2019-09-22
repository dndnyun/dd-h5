<template>
  <div id="app" class="__dd_copyright-wrap">
    版权归原作者所有，侵权立删
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
  $fontSize: 16;

  @function rem($args) {
    @return $args / $fontSize+rem;
  }

  html, body {
    font-size: 16px;
    padding: 0;
    margin: 0;
    font-family: "PingFang SC", "Source Han Sans CN", "Helvetica Neue", "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro", Helvetica, Arial, sans-serif;
    overflow: hidden;
    height: 100%;
  }

  body {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .__dd_content-wrap {
    height: 100%;
    width: 100%;
  }

  .__dd_copyright-wrap {
    position: fixed;
    bottom: rem(3);
    left: 50%;
    transform: translate(-50%);
    font-size: rem(12);
    background: rgba(0, 0, 0, .7);
    padding: rem(2) rem(5);
    white-space: nowrap;
    border-radius: rem(6);
    color: #fff;
  }
</style>
