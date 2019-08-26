<template>
  <div class="main-wrap">
    <div class="main-content">
      <router-view/>
    </div>
    <div class="main-tab-bar-wrap">
      <div>
        <router-link :to="{ name: 'box'}"><i class="ddfont dd-index"></i><span>首页</span></router-link>
      </div>
      <div>
        <router-link :to="{ name: 'user'}"><i class="ddfont dd-wode"></i><span>我的</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
  @import "@/assets/index.scss";

  .main-wrap {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    background: #EDECED;

    .main-content {
      flex: 1;
      overflow: auto;
    }

    .main-tab-bar-wrap {
      border-radius: rem(20) rem(20) 0 0;
      height: rem(60);
      background: #F3CF47;
      display: flex;

      div {
        text-align: center;
        flex: 1;
        font-size: rem(16);

        a {
          height: rem(60);
          color: rgba(0, 0, 0, 0.3);
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
