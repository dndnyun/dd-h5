<template>
  <div class="page-wrap box-wrap">

    <PageTitle title="登登获客"></PageTitle>

    <ul class="box-list">
      <li v-for="(item, key, index) in items" :key="index" @click="handleClick(item)">
        <div class="box-item">
          <i class="ddfont dd-arrow-right arrow-right"></i>
          <div class="box-icon">
            <i class="ddfont" :class="item.icon"></i>
          </div>

          <div class="box-content">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Box',
  data () {
    return {
      items: [
        {
          icon: 'dd-chaolianjie',
          title: '链接分享',
          desc: '输入你分享的链接地址',
          path: 'new-link'
        },
        {
          icon: 'dd-tuwenxiangqing',
          title: '图文编辑分享',
          desc: '进入编辑分享你的长图文',
          path: 'new-material'
        },
        {
          icon: 'dd-sucai',
          title: '我的素材',
          desc: '今日点击0人，本月4人',
          path: 'my-material'
        },
        {
          icon: 'dd-bangzhu',
          title: '如何使用',
          desc: '教你使用登登获客',
          path: ''
        },
        {
          icon: 'dd-guanyuwomen',
          title: '关于我们',
          desc: '登登获客可以做什么',
          path: ''
        }
      ]
    }
  },
  methods: {
    handleClick (_item) {
      if (!_item.path) return
      this.$router.push({ name: _item.path })
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/index.scss";

  .box-wrap {
    .box-list {
      padding: rem(10) rem(30);

      li {
        margin: rem(26) 0;
        border-radius: rem(20);
        box-shadow: 0 rem(10) rem(30) rgba(black, .1);

        .box-item {
          display: flex;
          border-radius: rem(20);
          background: #FFFFFF;
          padding: rem(10);
          position: relative;

          .arrow-right {
            position: absolute;
            right: rem(30);
            top: 50%;
            transform: translate(0, -50%);
          }

          .box-icon {
            width: rem(50);
            height: rem(50);
            border-radius: rem(20);
            margin: rem(10) rem(20) rem(10) rem(10);
            background: #4F5EFB;

            display: flex;
            justify-content: center;
            align-items: center;

            i {
              color: #fff;
              font-size: rem(24);
            }
          }

          .box-content {
            flex: 1;

            .title {
              margin-top: rem(13);
              font-weight: bold;
              font-size: rem(16);
              color: #504A61;
            }

            .desc {
              color: #5F5D6E;
              margin-top: rem(2);
              font-size: rem(14);
            }
          }

        }

      }
    }
  }
</style>
