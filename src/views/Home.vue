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

    .main-content {
      flex: 1;
      overflow: auto;
    }

    .main-tab-bar-wrap {
      height: rem(60);
      line-height: rem(60);
      background: #FFFFFF;
      display: flex;

      div {
        text-align: center;
        flex: 1;
        font-size: rem(16);
        color: #252A3B;

        a {
          padding: rem(10) rem(30);

          .ddfont {
            margin-right: rem(5);
          }

          span {
            display: none;
          }

          &.router-link-exact-active {
            background: #F1F4FF;
            border-radius: rem(30);
            color: #3266FF;

            span {
              display: inline;
            }
          }
        }

      }
    }
  }
</style>
