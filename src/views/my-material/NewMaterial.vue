<template>
  <div class="page-wrap new-material-wrap">
    <div class="post-content"></div>
    <div class="post-btn">
      <div>
        <router-link :to="{ name: 'box'}"><i class="ddfont dd-index"></i><span>标题</span></router-link>
      </div>
      <div>
        <router-link :to="{ name: 'user'}"><i class="ddfont dd-wode"></i><span>正文</span></router-link>
      </div>
      <div>
        <router-link :to="{ name: 'user'}"><i class="ddfont dd-wode"></i><span>图片</span></router-link>
      </div>
      <div>
        <router-link :to="{ name: 'user'}"><i class="ddfont dd-wode"></i><span>视频</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewMaterial',
  data () {
    return {
      buttons: [
        {
          icon: 'dd-tuwenxiangqing',
          title: '标题',
          path: 'new-material'
        },
        {
          icon: 'dd-tuwenxiangqing',
          title: '正文',
          path: 'new-material'
        },
        {
          icon: 'dd-tuwenxiangqing',
          title: '图片',
          path: 'new-material'
        },
        {
          icon: 'dd-tuwenxiangqing',
          title: '视频',
          path: 'new-material'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/index.scss";

  .new-material-wrap {
    display: flex;
    flex-flow: column;
    .post-content {
      flex: 1;
    }

    .post-btn {
      border-radius: rem(20) rem(20) 0 0;
      height: rem(60);
      background: #FDCE03;
      display: flex;
      div {
        text-align: center;
        flex: 1;
        font-size: rem(16);

        a {
          height: rem(60);
          color: rgba(0, 0, 0, .3);
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;

          .ddfont {
            display: block;
            margin-right: rem(5);
            font-size: rem(24);
          }

          span {
            display: block;
          }

          &.router-link-exact-active {
            color: #000;
          }
        }
      }
    }
  }
</style>
