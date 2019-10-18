<template>
  <div class="page-wrap user-wrap">

    <div class="page-title">
      我的登登
      <ul class="page-breadcrumb">
        <li>
          <router-link :to="{ name: 'box'}">首页</router-link>
        </li>
        <li><span>我的登登</span></li>
      </ul>
    </div>

    <ul class="box-list">
      <li v-for="(item, key, index) in items" :key="index" @click="handleClick(item)">
        <div class="box-item">

          <i class="ddfont dd-arrow-right arrow-right"></i>
          <div class="box-icon">
            <i class="ddfont" :class="item.icon"></i>
          </div>

          <div class="box-content">
            <div class="title">{{ item.title }}</div>
          </div>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      items: [
        {
          icon: 'dd-bangdingshouji',
          title: '绑定手机',
          action: 'bind'
        },
        {
          icon: 'dd-clear-cache',
          title: '清除缓存',
          action: 'clear'
        }
      ]
    }
  },
  methods: {
    handleClick (_item) {
      this[_item.action + 'Handle'](_item)
      console.log(_item)
    },
    clearHandle (_item) {
      appConfig.removeToken()
      window.location.reload()
    }
  }
}
</script>

<style lang="scss">
  .user-wrap {
    background: #FCCE02;

    .page-title {
      color: #fff7d1;
    }

    .box-list {
      margin: rem(26) rem(30);
      border-radius: rem(20);
      box-shadow: 0 rem(10) rem(30) rgba(black, .1);
      background: #FFFFFF;
      overflow: hidden;

      li {
        &:first-child {
          .box-item {
            margin-top: rem(10);
          }
        }

        &:last-child {
          .box-item {
            border-bottom: none;
            margin-bottom: rem(10);
          }
        }

        .box-item {
          display: flex;
          margin: 0 rem(20);
          border-bottom: rem(1) solid #dedede;
          position: relative;

          .arrow-right {
            position: absolute;
            right: rem(10);
            top: 50%;
            transform: translate(0, -50%);
          }

          .box-icon {
            width: rem(50);
            height: rem(50);
            border-radius: rem(20);
            margin: rem(10) rem(20) rem(10) 0;
            background: #ffdd46;

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
            line-height: rem(50);

            .title {
              margin-top: rem(13);
              font-weight: bold;
              font-size: rem(16);
              color: #504A61;
            }
          }

        }

      }
    }
  }
</style>
