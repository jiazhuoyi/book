<template>
  <div class="my-header">
    <div class="my-header-box">
      <div class="header-container">
        <div class="header-photo">
           <img class="photo-img" :src="user.avatarUrl">
        </div>
        <div class="header-info">
          <div class="center">
            <span class="name">{{user.nickName}}</span>
            <span class="emid">{{emid}}</span>
          </div>
        </div>
        <a class="header-more" hover-class="none" href="../bind-user/main">
          <van-icon name="arrow" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.user
    },
    emid () {
      return this.$store.state.user.emid ? `员工编号：${this.$store.state.user.emid}` : '暂未绑定员工编号'
    }
  },
  async mounted () {
    const result = await this.$fly.get('/user-info')
    this.$store.commit('setUser', result.user)
  },
  methods: {
    useScan () {
      console.log('useScan')
      wx.scanCode({
        success (res) {
          console.log('res:', res)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-header
  width: 100%
  height: 250rpx
  background-color: $theme-color
  display: flex
  justify-content: center
  align-items: center
  padding-bottom: 50rpx
  &-box
    width: 90%
    height: 80%
    background-color: $whiteColor
    border-radius: 10rpx
    opacity: 0.9
    display: flex
    justify-content: center
    align-items: center
  .header-container
    width: 100%
    height: 80%
    display: flex
    .header-photo
      width: 30%
      text-align: center
      .photo-img
        width: 80%
        height: 100%
        border-radius: 50%
    .header-info
      flex: 1
      display: flex
      align-items: center
      .name
        display: block
        font-size: 42rpx
        font-weight: 600
      .emid
        display: block
        font-size: $normal-fs
        color: $gray-text-color
        margin-top: $small-margin
    .header-more
      width: 10%
      margin-right: $margin
      display: flex
      justify-content: flex-end
      align-items: center
</style>

