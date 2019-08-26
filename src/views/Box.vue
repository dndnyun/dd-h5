<template>
  <div class="box-wrap">

    <!--    <div class="page-title">登登获客</div>-->

    <ul class="box-list">
      <li v-for="(item, key, index) in items" :key="index">
        <div class="box-item">
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
          desc: '通过输入链接分享你的页面',
          path: ''
        },
        {
          icon: 'dd-tuwenxiangqing',
          title: '图文编辑分享',
          desc: '通过自己手动编辑图文，生成你的分享页面',
          path: ''
        },
        {
          icon: 'dd-sucai',
          title: '我的素材',
          desc: '自己保存的页面列表',
          path: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/index.scss";

  .box-wrap {
    padding: rem(10) rem(20);

    .page-title {
      font-size: rem(26);
      margin: 1.2em 0 1.5em;
      font-weight: bold;
    }

    .box-list {
      li {
        margin: rem(15) 0;

        &:nth-child(1) {
          i {
            color: #4776FF;
          }
        }

        &:nth-child(2) {
          i {
            color: #F86C4F;
          }
        }

        &:nth-child(3) {
          i {
            color: #F5B535;
          }
        }

        &:nth-child(1) {
          i {
            color: #7288FF;
          }
        }

        .box-item {
          display: flex;
          border-radius: rem(10);
          background: #FFFFFF;
          padding: rem(10);
          box-shadow: 0 rem(1) rem(10) rgba(0, 0, 0, 0.1);;

          .box-icon {
            width: rem(80);
            height: rem(80);
            margin-right: rem(10);

            display: flex;
            justify-content: center;
            align-items: center;

            i {
              font-size: rem(50);
              height: rem(50);
            }
          }

          .box-content {
            flex: 1;

            .title {
              font-weight: bold;
              font-size: rem(18);
              line-height: rem(40);
            }

            .desc {
              color: #656875;
              line-height: rem(20);
              font-size: rem(14);
            }
          }

        }

      }
    }
  }
</style>
