<template>
  <div class="banner-wrap">
    <svg version="1.1" class="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 560" preserveAspectRatio="xMidYMid slice">
      <path d="M-5.8,569.6l-0.2-33.6c48-30.2,86.9-85.8,103.6-114.5c18.2-31.4,103.3-166.7,252.9-91.8c131.7,65.9,284.2,149.4,476.4,35.5c21-12.4,76-57.8,139.2-55v259.5"/>
    </svg>
    <div class="banner-body">
      <div class="avatar-wrap">
        <img :src="userInfo.user.avatar" alt="avatar">
      </div>
      <div class="content-wrap">
        <div class="info-wrap">剩余获客次数 {{wallet.hasShareCount}} 次</div>
        <div class="btn-wrap">
          <button>分享</button>
          <button>购买</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      userInfo: {
        user: {}
      },
      wallet: {}
    }
  },
  mounted () {
    this.getUser()
    this.getWallet()
  },
  methods: {
    getUser () {
      this.userInfo = appConfig.getToken()
    },
    getWallet () {
      this.$http
        .security
        .getWallet()
        .then(res => {
          console.log(res)
          this.wallet = res
        })
        .catch(e => {
          console.log('获取用户信息失败', e)
          weui.topTips('获取用户信息失败')
          this.mescroll.endErr()
        })
    }
  }
}
</script>

<style lang="scss">
  .banner-wrap {
    position: relative;
    width: 100%;

    &:before, &:after {
      content: ".";
      display: block;
      height: 0;
      visibility: hidden;
    }

    .wave-svg {
      position: absolute;
      transform: rotateX(180deg);
      fill: #4F5EFB;
      height: rem(400);
      width: 100%;
    }

    .banner-body {
      position: relative;
      display: flex;
      margin: rem(30) rem(30) 0;
      padding: rem(10);
      border-radius: rem(20);
      box-shadow: 0 rem(10) rem(30) rgba(black, .1);
      background: #FFFFFF;
    }

    .avatar-wrap {
      padding-right: rem(20);
      margin: rem(10);

      img {
        height: rem(80);
        width: rem(80);
        border-radius: rem(80);
      }
    }

    .content-wrap {
      padding: rem(10) 0;

      .info-wrap {
        font-size: rem(18);
        margin-bottom: rem(20);
        line-height: rem(30);
      }

      .btn-wrap {
        button {
          height: rem(30);
          padding: 0 rem(13);
          font-size: rem(14);
          border-radius: rem(20);
          border: none;
          margin-right: rem(20);
          background: linear-gradient(to right, #4965F9, #573AE4);
          color: #fff;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
