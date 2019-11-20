<template>
  <div class="new-content__wrap new-content__dialog">
    <div class="new-content__title">
      <div class="title-left">
        <button @click="handleCancel">取消</button>
      </div>
      编辑正文
      <div class="title-right">
        <button @click="handleConfirm">保存</button>
      </div>
    </div>

    <div class="new-content__text custom-post__wrap textarea__wrap">
      <textarea class="content-section" v-model="content" id="textarea_title" placeholder="在此输入正文"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newTitle',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    handleCancel () {
      this.$emit('on-cancel')
    },
    handleConfirm () {
      if (!this.content.trim()) {
        weui.topTips('请填写正文内容', 2000)
        return
      }
      this.$emit('on-confirm', {
        type: 'section',
        content: this.content,
        style: {}
      })
    }
  }
}
</script>

<style lang="scss">
  .new-content__wrap {
  }
</style>
