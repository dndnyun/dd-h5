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
      queryString: {},
      readId: '',
      timer: null
    }
  },
  mounted () {
    this.queryString = getQueryParameters()
    console.log(this.queryString)
    clearInterval(this.timer)
    if (!this.queryString.userId) {
      this.readArticleById()
    } else {
      window.location.replace(appConfig.getWxAuth(this.queryString.articleId))
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    readArticleById (_readId) {
      console.log('articleId', this.queryString.articleId)
      this
        .$http
        .content
        .readArticleById({
          articleId: Number(this.queryString.articleId),
          readId: _readId
        })
        .then(res => {
          this.readId = res.id
          this.timer = setInterval(() => {
            this.readArticleByReadId(res.id)
          }, 1000 * 10)
        })
    },
    readArticleByReadId (_readId) {
      this
        .$http
        .content
        .readArticleById({
          articleId: Number(this.queryString.articleId),
          readId: _readId
        })
    }
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
