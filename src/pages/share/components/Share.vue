<template>
  <div class="share-wrap">
    <div class="copyright-wrap">版权归原作者所有，侵权立删</div>
  </div>
</template>

<script>
import { getQueryParameters } from '@/assets/helper.js'

export default {
  name: 'Share',
  data () {
    return {
      queryString: {}
    }
  },
  beforeCreate () {
    this.queryString = getQueryParameters()
    if (!this.queryString.userId) return
    window.location.replace(appConfig.getWxAuth(this.queryString.articleId))
  }
}
</script>

<style lang="scss">
  .share-wrap {
    .copyright-wrap {
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
  }
</style>
