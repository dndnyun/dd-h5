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
  }
</style>
