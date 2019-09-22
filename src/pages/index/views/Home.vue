<template>
  <div class="main-wrap">
    <router-view/>
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
      -webkit-overflow-scrolling: touch;
    }

    .main-tab-bar-wrap {
      border-radius: rem(20) rem(20) 0 0;
      box-shadow: 0 rem(-10) rem(30) rgba(black, .1);
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
