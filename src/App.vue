<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "@/assets/index.scss";

  .page-wrap {
    padding: rem(10) rem(30);
  }

  .page-title {
    font-size: rem(26);
    margin: 1.2em rem(30) 1em;
    font-weight: bold;

    .page-breadcrumb {
      margin-top: rem(8);
      font-size: rem(12);
      *zoom: 1;

      &:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
      }

      li {
        float: left;

        &:last-child {
          &:after {
            display: none;
          }
        }

        &:after {
          font-family: "ddfont" !important;
          content: '\e646';
          margin: 0 rem(8);
        }

        span {
          opacity: .5;
        }

        a {
          color: inherit;
        }
      }
    }
  }
</style>
