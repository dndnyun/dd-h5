<template>
  <div class="page-wrap my-material-wrap">
    <div class="page-title">
      我的素材
      <ul class="page-breadcrumb">
        <li>
          <router-link :to="{ name: 'box'}">首页</router-link>
        </li>
        <li><span>我的素材</span></li>
      </ul>
    </div>

    <ul class="box-list">
      <li v-for="(item, key, index) in items" :key="index" @click="handleStatistical(item)">
        <div class="box-item">

          <div class="box-icon">
            <img class="img" v-if="item.src" src="../../../public/images/icon.png" alt="文章缩略图">
            <i class="ddfont dd-tupian" v-if="!item.src"></i>
          </div>

          <div class="box-content">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>

          <div class="box-right">
            <i class="ddfont dd-gengduo icon-right" @click.stop="handlePost(item)"></i>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          icon: 'dd-chaolianjie',
          title: '这是一篇长篇大论标题的文章',
          desc: '今日0人，近7天0人',
          path: 'my-material'
        },
        {
          icon: 'dd-tuwenxiangqing',
          title: '这是有标题的文章',
          desc: '今日0人，近7天0人',
          path: ''
        },
        {
          icon: 'dd-sucai',
          title: '这是文章',
          desc: '今日0人，近7天0人',
          path: 'my-material'
        },
        {
          icon: 'dd-bangzhu',
          title: '我是一个有文化的文章标题',
          desc: '今日0人，近7天0人',
          path: ''
        },
        {
          icon: 'dd-guanyuwomen',
          title: '我的标题真的很短，信不信由你，反正我是信了',
          desc: '今日0人，近7天0人',
          path: ''
        }
      ]
    }
  },
  methods: {
    handleStatistical (_item) {
      console.log('统计页面', _item)
    },
    handlePost (_item) {
      console.log('文章页面', _item)
    }
  }

}
</script>

<style lang="scss">
  @import "@/assets/index.scss";

  .my-material-wrap {
    background: #F3D45B;
    min-height: 100%;

    .page-title {
      color: rgba(0, 0, 0);
    }

    .box-list {
      li {
        border-bottom: rem(1) solid rgba(0, 0, 0, .1);

        &:first-child {
          border-top: rem(1) solid rgba(0, 0, 0, .1);
        }

        .box-item {
          display: flex;
          padding: rem(10) 0;
          position: relative;

          .box-right {
            position: relative;
            width: rem(70);

            .icon-right {
              position: absolute;
              right: 0;
              height: rem(30);
              width: rem(30);
              line-height: rem(22);
              text-align: center;
              top: 50%;
              color: #000;
              font-weight: bold;
              transform: translate(0, -50%);
              border: rem(4) solid rgba(0, 0, 0, .2);
              border-radius: rem(30);
            }
          }

          .box-icon {
            width: rem(50);
            height: rem(50);
            margin: rem(10) rem(20) rem(10) 0;

            img {
              width: rem(50);
              height: rem(50);
              border-radius: rem(20);
            }

            .ddfont {
              display: flex;
              width: rem(50);
              height: rem(50);
              border-radius: rem(20);
              font-size: rem(30);
              background: rgba(0, 0, 0, .2);

              justify-content: center;
              align-items: center;
            }
          }

          .box-content {
            flex: 1;

            .title {
              margin-top: rem(5);
              font-weight: bold;
              font-size: rem(16);
              line-height: rem(20);
              height: rem(40);
              color: #000;

              display: -webkit-box;
              text-overflow: ellipsis;
              overflow: hidden;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2; //当属性值为3，表示超出3行隐
            }

            .desc {
              color: rgba(0, 0, 0, .4);
              font-weight: bold;
              margin-top: rem(2);
              font-size: rem(14);
            }
          }

        }

      }
    }
  }
</style>
