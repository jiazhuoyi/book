<template>
  <div class="loadmore">
    <div class="wrapper" v-if="loading">
      <div class="bounce item1"></div>
      <div class="bounce item2"></div>
      <div class="bounce item3"></div>
    </div>
    <div class="absence" v-else>
      <span class="line"></span>
      <span class="content">到底啦</span>
      <span class="line"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      defalut: true
    }
  }
}
</script>


<style lang="stylus" scoped>
.loadmore
  .wrapper
    margin: auto
    width: 120rpx
    display: flex
    height: 80rpx
    justify-content: space-between
    align-items: center
    .bounce
      width: 20rpx
      height: 20rpx
      background-color: $theme-color
      border-radius: 50%
      animation: bouncedelay 1.4s infinite ease-in-out
      -webkit-animation: bouncedelay 1.4s infinite ease-in-out
      animation-fill-mode: both
      -webkit-animation-fill-mode: both
      will-change: auto
      transform: translate3d(0, 0, 0)
    .item1
      -webkit-animation-delay: -0.32s
      animation-delay: -0.32s
    .item2
      -webkit-animation-delay: -0.32s
      animation-delay: -0.16s
  .absence
    line-height: 120rpx
    height: 120rpx
    font-size: $normal-fs
    display: flex
    justify-content: center
    align-items: center
    .line
      display: inline-block
      width: 100rpx
      border-bottom: 1rpx solid $border-color
    .content
      color: $border-color
      margin: 0 $small-margin
</style>
<style scoped>
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0)
  }
  40% {
    transform: scale(1.0)
  }
}
@-webkit-keyframes bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0.0)
  }
  40% {
    -webkit-transform: scale(1.0)
  }
}
</style>

