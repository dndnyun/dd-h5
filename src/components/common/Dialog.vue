<template>
  <transition name="slide-fade">
    <div class="cms-dialog" :style="{ width: `${width}`}">
      <div class="cms-dialog-title">
        <span>{{title}}</span>
        <span class="close"><i class="el-icon-close" @click="handleClose"></i></span>
      </div>
      <div class="cms-dialog-body">
        <slot></slot>
      </div>
      <div class="cms-dialog-btn">
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Dialog',
  props: {
    title: [String, Object],
    width: {
      type: [String],
      default: function () {
        return '360px'
      }
    }
  },
  data () {
    return {
      submitLoading: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('on-close')
    },
    handleSubmit () {
      this.submitLoading = true
      this.$emit('on-submit')
    }
  }
}
</script>

<style lang="scss">
  .cms-dialog {
    position: fixed;
    top: 60px;
    bottom: 10px;
    right: 10px;
    z-index: 11;
    width: 360px;
    background: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    overflow: auto;
    border: 1px solid #ebeef5;
    border-radius: 4px;

    .cms-dialog-title {
      display: inline-block;
      line-height: 40px;
      height: 40px;
      width: 100%;
      padding: 0 10px;
      color: #fff;
      font-size: 16px;
      background: linear-gradient(to right, #2365dc, #1890ff);

      .close {
        float: right;
        cursor: pointer;
      }
    }

    .cms-dialog-body {
      position: absolute;
      top: 43px;
      bottom: 43px;
      width: 100%;
      overflow: hidden;

      .dialog-scrollbar__wrap {
        height: 100%;
        overflow-x: hidden;
      }
    }

    .cms-dialog-btn {
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      line-height: 43px;
      height: 43px;
      border-top: 1px solid #ebeef5;

      &:before {
        position: absolute;
        top: -31px;
        left: 0;
        display: inline-block;
        content: ' ';
        height: 30px;
        width: 100%;
        background-image: linear-gradient(-180deg, #fff0 0%, #fff 100%);
        pointer-events: none;
      }
    }

    .ql-toolbar {
      border-radius: 4px 4px 0 0;
    }

    .ql-container {
      border-radius: 0 0 4px 4px;

      .ql-video {
        margin: auto;
        width: 469px;
        height: 300px;
      }

      img {
        max-width: 469px;
        max-height: 300px;
      }
    }

    .quill-wrap {
      padding: 0 0 20px;
    }
  }
</style>
