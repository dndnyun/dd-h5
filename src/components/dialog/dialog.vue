<template>
  <div class="s-dialog-wrap" @touchumove.self.prevent>
    <!--    <transition name="s-dialog-fade">-->
    <div class="s-dialog-content" v-show="visible">
      <div class="s-dialog-body">
        <div class="title">{{title}}</div>
        <div class="content">{{content}}</div>
        <div class="button-wrap">
          <button @click="close('cancel')">{{cancelText}}</button>
          <button @click="close('confirm')">{{confirmText}}</button>
        </div>
      </div>
    </div>
    <!--    </transition>-->
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
      closed: false,
      title: '温馨提示',
      content: '系统操作异常，请稍后重试！',
      confirmText: '确定',
      cancelText: '取消'
    }
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false
        this.destroyElement()
        // this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },
  methods: {
    destroyElement () {
      // this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    close (_activity) {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(_activity)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @function rem($args) {
    @return $args / 16+rem;
  }

  .s-dialog-wrap {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .5);
    -webkit-overflow-scrolling: touch;
    overflow: hidden;
    z-index: 1;

    .s-dialog-content {
      background: #fff;
      text-align: center;
      border-radius: rem(20);
      width: 80%;
      color: #fff;
      overflow: hidden;
      transition: .3s;

      .s-dialog-body {

        .title {
          margin: rem(30) 0 .8em;
          font-size: rem(16);
          color: #000;
          font-weight: 700;
        }

        .content {
          padding: 0 rem(30);
          font-size: rem(16);
          color: rgba(0, 0, 0, .8);
          line-height: rem(30);
        }

        .button-wrap {
          display: flex;
          margin: rem(15) 0 0;

          button {
            &:last-child {
              color: #06AE56;
            }

            flex: 1;
            height: rem(50);
            line-height: rem(50);
            background: none;
            padding: 0;
            margin: 0;
            border: 0;
            color: #828282;
            font-size: rem(16);
          }
        }
      }
    }
  }

  .s-dialog-fade-enter-active, .s-dialog-fade-leave-active {
    transition: opacity .5s;
    transform: scale(1);
  }

  .s-dialog-fade-enter, .s-dialog-fade-leave-to, .s-dialog-fade-leave-active {
    opacity: 0;
    transform: scale(.3);
  }
</style>
