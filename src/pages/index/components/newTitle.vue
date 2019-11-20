<template>
  <div class="new-content__wrap new-content__dialog">
    <div class="new-content__title">
      <div class="title-left">
        <button @click="handleCancel">取消</button>
      </div>
      编辑标题
      <div class="title-right">
        <button @click="handleConfirm">保存</button>
      </div>
    </div>

    <div class="new-content__text custom-post__wrap textarea__wrap">
      <textarea class="content-title" :class="[size, align]" v-model="content" id="textarea_title" placeholder="在此输入标题"></textarea>
    </div>

    <div class="new-content__bottom">
      <ul>
        <li @click="handleSize">
          <i class="ddfont dd-daxiaoxie"></i>
          <span>{{ sizeText }}</span>
        </li>
        <li @click="handleAlign">
          <i class="ddfont dd-zuoduiqi"></i>
          <span>{{ alignText }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

const sizeText = {
  'title-h1': '大',
  'title-h2': '标',
  'title-h3': '小'
}

const alignText = {
  'align-center': '中',
  'align-left': '左'
}

const sizeItems = [
  {
    label: '大字号',
    value: 'title-h1'
  },
  {
    label: '标准字号',
    value: 'title-h2'
  },
  {
    label: '小字号',
    value: 'title-h3'
  }
]

const alignItems = [
  {
    label: '居中',
    value: 'align-center'
  },
  {
    label: '左对齐',
    value: 'align-left'
  }
]
export default {
  name: 'newTitle',
  data () {
    return {
      content: '',
      size: 'title-h2',
      align: 'align-center',
      timer: ''
    }
  },
  computed: {
    sizeText: function () {
      return sizeText[this.size]
    },
    alignText: function () {
      return alignText[this.align]
    }
  },
  mounted () {
    this.timer = new Date().getTime()
  },
  methods: {
    handleCancel () {
      this.$emit('on-cancel')
    },
    handleConfirm () {
      if (!this.content.trim()) {
        weui.topTips('请填写标题内容', 2000)
        return
      }

      this.$emit('on-confirm', {
        type: 3,
        content: this.content,
        style: {
          size: this.size,
          align: this.align
        }
      })
    },
    handleSize () {
      weui.picker(sizeItems,
        {
          id: 'sizePicker' + this.timer,
          title: '选择字号',
          defaultValue: [this.size],
          onConfirm: (result) => {
            this.size = result[0].value
          }
        }
      )
    },
    handleAlign () {
      weui.picker(alignItems,
        {
          id: 'alignPicker' + this.timer,
          title: '选择对齐方式',
          defaultValue: [this.align],
          onConfirm: (result) => {
            this.align = result[0].value
          }
        }
      )
    }
  }
}
</script>

<style lang="scss">
  .new-content__wrap {
  }
</style>
