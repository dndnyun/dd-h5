<template>
  <div class="page-wrap new-material-wrap new-content__wrap">

    <div class="new-content__title">
      <div class="title-left">
        <router-link :to="{ name: 'box'}">
          <button>退出</button>
        </router-link>
      </div>
      创建图文分享
      <div class="title-right">
        <button @click="handleSave">创建</button>
      </div>
    </div>

    <div class="new-content__text custom-post__wrap">

      <div v-for="(item, index) in contents" :key="index">
        <h1 v-if="item.type === 3 && item.style.size === 'title-h1'" class="content-title" :class="[item.style.align]">{{ item.content }}</h1>

        <h2 v-if="item.type === 3 && item.style.size === 'title-h2'" class="content-title" :class="[item.style.align]">{{ item.content }}</h2>

        <h3 v-if="item.type === 3 && item.style.size === 'title-h3'" class="content-title" :class="[item.style.align]">{{ item.content }}</h3>

        <section v-if="item.type === 1" class="content-section">{{ item.content }}</section>

        <div v-if="item.type === 2" class="content-media">
          <img :src="item.content" :alt="item.content">
        </div>

        <div v-if="item.type === 4" class="content-media">
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
      name="fade"
      enter-active-class="fadeInUp"
      leave-active-class="fadeOutDown">
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
      contents: [
        // {
        //   type: 0, // 类型 1 - 文本， 2 - 图片， 3 - 标题， 4 - 视频
        //   content: '', // 内容
        //   style: { // 文本样式 JSON 字符串
        //     align: '', // 对齐方式
        //     size: '' // 字号
        //   }
        // }
      ],
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
      this.createPost()
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
        type: 2,
        content: _url,
        style: {}
      })
    },
    createPost () {
      if (this.contents.length < 1) {
        weui.topTips('请填写素材内容', 2000)
        return
      }
      this.loading = weui.loading('创建中...')
      this.$http
        .material
        .createPost(this.contents)
        .then(res => {
          console.log(res)
          this.loading.hide()
          this.successAlert()
        })
        .catch(e => {
          console.log('创建素材失败', e)
          weui.topTips('创建素材失败')
          this.loading.hide()
        })
    },
    successAlert () {
      this.$dialog({
        title: '创建素材成功',
        content: '请到我的素材中查看已创建的页面',
        confirmText: '立即查看',
        cancelText: '取消',
        onClose: (_activity) => {
          if (_activity === 'confirm') {
            this.$router.replace({ name: 'my-material' })
          }
        }
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
