<template>
  <div class="uploader-input__wrap">
    <input class="uploader-input" ref="__uploaderInput" type="file" accept="image/*" @change="uploaderChange"/>
  </div>
</template>

<script>
export default {
  name: 'UploaderInput',
  props: {
    size: {
      type: [Number],
      default: function () {
        return 2097152
      }
    }
  },
  data () {
    return {
      loading: null
    }
  },
  methods: {
    getFile () {
      this.$refs.__uploaderInput.click()
    },
    uploaderChange () {
      let file = this.$refs.__uploaderInput.files[0]

      if (file.size > this.size) { // 文件大小超出限制
        weui.topTips('图片超出大小限制', 2000)
      } else {
        let formData = new FormData()
        formData.append('img', this.$refs.__uploaderInput.files[0])

        this.uploadImage(formData)
      }
    },
    uploadImage (_formData) {
      this.loading = weui.loading('图片上传中')
      this
        .$http
        .material
        .uploadImage(_formData)
        .then(res => {
          console.log(res)
          this.$emit('on-success', res.url)
          this.loading.hide()
          weui.toast('上传成功', 3000)
        })
        .catch(e => {
          console.log('上传失败', e)
          this.loading.hide()
          weui.topTips('上传失败')
        })
    },
    uploadProgress (evt) {
      console.log('上传中', evt)
    },
    uploadComplete (evt) {
      console.log(evt) // 获取上传成功后返回的结果
    },
    uploadFailed (evt) {
      console.log('上传失败', evt)
    },
    uploadCanceled (evt) {
      alert('上传取消')
    }
  }
}
</script>

<style lang="scss">
  .uploader-input__wrap, .uploader-input {
    position: absolute;
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
  }
</style>
