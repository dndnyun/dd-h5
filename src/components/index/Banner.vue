<template>
  <div class="banner-wrap">
    <div class="avatar-wrap">
      <img :src="userInfo.user.avatar" alt="avatar">
    </div>
    <div class="content-wrap">
      <div class="info-wrap">剩余获客次数 {{}} 次</div>
      <div class="btn-wrap">
        <button>分享</button>
        <button>购买</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      userInfo: {}
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    getUser () {
      this.userInfo = appConfig.getToken()
    }
  }
}
</script>

<style lang="scss">
  .banner-wrap {

    .avatar-wrap {

    }
  }
</style>
