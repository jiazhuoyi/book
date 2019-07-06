<template>
  <div class="abnor">
    <p class="title">{{title}}</p>
    <van-button size="small" type="danger" @click="goIndex">{{text}}</van-button>
  </div>
</template>
<script>
export default {
  props: ['image', 'title', 'text'],
  methods: {
    goIndex () {
      wx.switchTab({ url: '/pages/index/main' })
    }
  }
}
</script>

<style lang="stylus" scoped>
.abnor
  width: 100%
  height: 400rpx
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  .title
    margin: $margin 0rpx
    color: rgba(0,0,0,.27)
    font-size: $normal-fs
</style>

