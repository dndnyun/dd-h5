<template>
  <div class="page-wrap new-material-wrap new-content__wrap">

    <div class="new-content__title">
      <div class="title-left">
        <router-link :to="{ name: 'box'}">
          <button>退出</button>
        </router-link>
      </div>
      新增图文分享
      <div class="title-right">
        <button @click="handleSave">提交</button>
      </div>
    </div>

    <div class="new-content__text custom-post__wrap">

      <div v-for="(item, index) in contents" :key="index">
        <h1 v-if="item.type === 'title' && item.style.size === 'title-h1'" class="content-title" :class="[item.style.align]">{{ item.content }}</h1>
        <h2 v-if="item.type === 'title' && item.style.size === 'title-h2'" class="content-title" :class="[item.style.align]">{{ item.content }}</h2>
        <h3 v-if="item.type === 'title' && item.style.size === 'title-h3'" class="content-title" :class="[item.style.align]">{{ item.content }}</h3>

        <section v-if="item.type === 'section'" class="content-section">{{ item.content }}</section>

        <div v-if="item.type === 'image'" class="content-media">
          <img :src="item.content" :alt="item.content">
        </div>

        <div v-if="item.type === 'video'" class="content-media">
          <img src="/test.jpeg" alt="coding">
        </div>
      </div>

    </div>

    <div class="new-content__bottom new-content__bottom_ave">
      <ul>
        <li v-for="item in buttons" :key="item.icon" @click="handleButton(item)">
          <i class="ddfont" :class="item.icon"></i><span>{{ item.title }}</span>
        </li>
      </ul>
    </div>

    <UploaderInput ref="uploaderInput" @on-success="imageLoadSuccess"></UploaderInput>

    <transition
      name="bounce"
      enter-active-class="bounceInUp"
      leave-active-class="bounceOutDown">
      <newTitle v-if="contentShow === 'new-title'" @on-cancel="handleCancel" @on-confirm="handleConfirm"></newTitle>
      <newSection v-if="contentShow === 'new-section'" @on-cancel="handleCancel" @on-confirm="handleConfirm"></newSection>
    </transition>
  </div>
</template>

<script>
import newTitle from '@/pages/index/components/newTitle'
import newSection from '@/pages/index/components/newSection'

export default {
  name: 'NewMaterial',
  components: {
    newTitle,
    newSection
  },
  data () {
    return {
      contents: [],
      contentShow: '',
      buttons: [
        {
          icon: 'dd-biaoti',
          title: '标题',
          code: 'new-title'
        },
        {
          icon: 'dd-zhengwen',
          title: '正文',
          code: 'new-section'
        },
        {
          icon: 'dd-tu',
          title: '图片',
          code: 'new-image'
        },
        {
          icon: 'dd-shipin',
          title: '视频',
          code: 'new-video'
        }
      ]
    }
  },
  methods: {
    handleButton (_item) {
      if (_item.code === 'new-image') {
        this.handleUploadImage()
        return
      }

      if (_item.code === 'new-video') {
        return
      }
      this.contentShow = _item.code
    },
    handleSave () {
    },
    handleCancel () {
      this.contentShow = ''
    },
    handleConfirm (_item) {
      console.log(_item)
      this.contents.push(_item)
      this.contentShow = ''
    },
    handleUploadImage () {
      this.$refs.uploaderInput.getFile()
    },
    imageLoadSuccess (_url) {
      this.contents.push({
        type: 'image',
        content: _url,
        style: {}
      })
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/newContent.scss";
  @import "@/assets/scss/post.scss";

  .new-material-wrap {
    display: flex;
    flex-flow: column;
    height: 100%;
    overflow: hidden;
  }
</style>
