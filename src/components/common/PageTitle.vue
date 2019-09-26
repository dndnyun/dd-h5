<template>
  <div class='box-title'>
    <svg version="1.1" class="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 560" preserveAspectRatio="xMidYMid slice">
      <path d="M-5.8,569.6l-0.2-33.6c48-30.2,86.9-85.8,103.6-114.5c18.2-31.4,103.3-166.7,252.9-91.8c131.7,65.9,284.2,149.4,476.4,35.5c21-12.4,76-57.8,139.2-55v259.5"/>
    </svg>

    <div class='title'>{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: [String],
      default: '标题'
    }
  },
  name: 'PageTitle'
}
</script>

<style lang="scss">
  .box-title {
    width: 100%;
    background: none;
    transform: translate3d(0, 0, 0);
    position: relative;

    &:before, &:after {
      content: ".";
      display: block;
      height: 0;
      visibility: hidden;
    }

    .wave-svg {
      position: absolute;
      transform: rotateX(180deg);
      fill: #4F5EFB;
      height: rem(400);
      width: 100%;
    }

    .title {
      font-size: rem(26);
      margin: 1.2em rem(30) 1em;
      font-weight: bold;
      z-index: 1;
      transform: translate3d(0, 0, 0);
      color: #fff;
      text-transform: uppercase;
    }
  }
</style>
