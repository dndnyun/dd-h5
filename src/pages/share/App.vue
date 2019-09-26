<template>
  <div id="app">
    <Share v-if="channel === 'share'"></Share>
    <Detail v-if="channel === 'detail'"></Detail>
  </div>
</template>

<script>
import { getQueryParameters } from '@/assets/helper.js'
import Detail from './components/Detail'
import Share from './components/Share'

export default {
  components: { Detail, Share },
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
</style>
