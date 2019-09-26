<template>
  <div class="detail-wrap">

    <div class="btn-wrap" v-if="action === 0">
      <button class="share-button" @click="handleAction(1)">立即分享<i class="ddfont dd-fenxiang btn-icon"></i></button>
    </div>

    <div class="share-bg-wrap" v-if="action === 1">
      <div class="share-text">
        <img src="../images/share.png" alt="share">
      </div>
      <button class="share-btn" @click="handleAction(0)"></button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      action: 0
    }
  },
  methods: {
    handleAction (_action) {
      this.action = _action
    }
  }
}
</script>

<style lang="scss">
  .detail-wrap {

    .btn-wrap {
      position: fixed;
      left: rem(30);
      right: rem(30);
      bottom: rem(30);

      .share-button {
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

        .btn-icon {
          position: absolute;
          right: rem(30);
          top: 50%;
          transform: translateY(-50%);
          color: #FFF;
        }
      }
    }

    .share-bg-wrap {
      top: 0;
      left: 0;
      position: fixed;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, .5);

      .share-text {
        padding: rem(30) rem(30) rem(30) rem(70);

        img {
          width: 100%;
        }
      }

      .share-btn {
        position: absolute;
        bottom: 20%;
        left: 50%;
        transform: translate(-50%, 0);

        background: url("../images/btn.png") center;
        background-size: 100% 100%;
        width: rem(110);
        height: rem(50);
        border: none;
        padding: 0;
        margin: 0;
      }
    }
  }
</style>
