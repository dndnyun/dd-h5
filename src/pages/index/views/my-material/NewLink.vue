<template>
  <div class="page-wrap new-link-wrap">
    <div class="page-title">
      链接分享
      <ul class="page-breadcrumb">
        <li>
          <router-link :to="{ name: 'box'}">首页</router-link>
        </li>
        <li><span>链接分享</span></li>
      </ul>
    </div>

    <div class="link-content">

      <p>输入分享的链接地址，生成属于你自己的分享内容</p>

      <div class="input-wrap">
        <input type="text" v-model="url" placeholder="请输入分享的链接地址" v-clear-jack>
      </div>

      <div class="btn-wrap" @click="handleCreate">
        <button class="next-btn">生成</button>
        <i class="ddfont dd-arrow-right arrow-right"></i>
      </div>

    </div>

    <div class="declaration-wrap">
      您分享的内容版权归原作者所有
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewLink',
  data () {
    return {
      url: '',
      loading: null
    }
  },
  mounted () {
    console.log(1111)
    this.$dialog({
      title: '温馨提示',
      content: '您的分享次数已不足，是否充值获得更多分享次数？',
      confirmText: '充值',
      cancelText: '返回',
      onClose: this.dialogOnClose
    })
  },
  methods: {
    dialogOnClose (_activity) {
      // if (_activity === 'cancel') {
      this.$router.back()
      // }
    },
    handleCreate () {
      if (!this.url) {
        weui.topTips('请输入分享的链接地址')
        return
      }
      this.createLink()
    },
    createLink () {
      this.loading = weui.loading('创建中...')
      this.$http
        .content
        .createLink({
          url: this.url
        })
        .then(res => {
          console.log(res)
          this.loading.hide()
          this.successAlert()
        })
        .catch(e => {
          console.log('创建分享的链接地址失败', e)
          weui.topTips('创建分享的链接地址失败')
          this.loading.hide()
        })
    },
    successAlert () {
      weui.alert('请到我的素材中查看已生成的页面', {
        title: '生成链接成功',
        buttons: [{
          label: '立即查看',
          type: 'primary',
          onClick: () => {
            this.$router.push({ name: 'my-material' })
          }
        }]
      })
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/index.scss";

  .new-link-wrap {
    min-height: 100%;
    background: #FDCE03;
    position: relative;

    .page-title {
      color: #fff7d1;
    }

    .link-content {
      padding: rem(10) rem(30);

      p {
        color: #fff7d1;
        margin: rem(30);
      }

      .input-wrap {
        background: #FFF9EC;
        border-radius: rem(20);
        box-shadow: 0 rem(10) rem(30) rgba(black, .1);
        overflow: hidden;

        input {
          width: 100%;
          height: rem(60);
          padding: 0 rem(30);
          margin: 0;
          border: none;
          font-size: rem(16);
          color: #333;

          &::placeholder {
            color: #666;
          }
        }
      }

      .btn-wrap {
        position: relative;
        margin-top: rem(50);

        .next-btn {
          color: #FFF;
          background: linear-gradient(to right, #4965F9, #573AE4);
          box-shadow: 0 rem(10) rem(30) rgba(black, .1);
          border: none;
          margin: 0;
          padding: 0 rem(30);
          font-size: rem(16);
          width: 100%;
          height: rem(50);
          line-height: rem(50);
          border-radius: rem(10);
          text-align: left;
        }

        .arrow-right {
          position: absolute;
          right: rem(30);
          top: 50%;
          transform: translateY(-50%);
          color: #FFF;
        }
      }

    }

    .declaration-wrap {
      width: 100%;
      font-size: rem(14);
      color: #fff7d1;
      position: absolute;
      bottom: rem(30);
      text-align: center;
    }
  }
</style>
