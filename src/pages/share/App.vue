<template>
  <div id="app">
    <div class="__dd_copyright-wrap" v-if="channel === 'share'">版权归原作者所有，侵权立删</div>
    <Detail v-if="channel === 'detail'"></Detail>
  </div>
</template>

<script>
import { getQueryParameters } from '@/assets/helper.js'
import Detail from './components/Detail'

export default {
  components: { Detail },
  data () {
    return {
      queryString: {},
      channel: ''
    }
  },
  mounted () {
    this.queryString = getQueryParameters()
    console.log(this.queryString)
    this.judgeChannel(this.queryString.channel)
  },
  methods: {
    judgeChannel (_channel) {
      if (_channel === 'detail') {
        this.channel = 'detail'
      } else {
        this.channel = 'share'
      }
      console.log('分辨平台', _channel)
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/index.scss";

  html, body {
    font-size: 16px;
    padding: 0;
    margin: 0;
    font-family: "PingFang SC", "Source Han Sans CN", "Helvetica Neue", "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro", Helvetica, Arial, sans-serif;
    overflow: hidden;
    height: 100%;
  }

  :focus {
    outline: none;
  }

  ::selection {
    background: none;
  }

  #app {
    height: 0;
    width: 0;
  }

  .__dd_content-wrap {
    height: 100%;
    width: 100%;
  }

  .__dd_copyright-wrap {
    position: fixed;
    bottom: rem(30);
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
