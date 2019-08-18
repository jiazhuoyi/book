<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-23 22:07:19
 * @LastEditTime: 2019-08-19 01:09:29
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="login">
    <div class="info">
      <img class="logo" src="../../../static/images/avatar.jpg" alt="">
      <span class="title">印象晓书馆</span>
    </div>
    <div class="tips">
      <p clss="tips-title"> 申请获取以下权限</p>
      <ul>
        <li class="tips-item">获取你的公开信息(昵称、头像等)</li>
      </ul>
    </div>
    <div class="auth-btn">
      <van-button 
        round
        type="danger"
        size="large"
        open-type="getUserInfo"
        @getuserinfo="getUserInfo">
        微信授权
      </van-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: ''
    }
  },
  mounted () {
    const _this = this
    wx.login({
      success (res) {
        _this.code = res.code
      }
    })
  },
  methods: {
    async getUserInfo (data) {
      const _this = this
      const detail = data.mp.detail
      const result = await this.$fly.post('/login', {
        code: _this.code,
        encryptedData: detail.encryptedData,
        iv: detail.iv,
        signature: detail.signature
      })
      const user = result.user
      this.$store.commit('setUser', result.user)
      if (user.status === 0) {
        mpvue.reLaunch({ url: '/pages/signup/main' })
      } else if (user.status === 1) {
        mpvue.reLaunch({ url: '/pages/checking/main' })
      } else {
        wx.switchTab({ url: '../index/main',
          success: function (e) {
            const page = getCurrentPages().pop()
            if (page === undefined || page === null) return
            page.onLoad()
          } })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.login
  .info
    width: 100%
    height: 500rpx
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    .logo
      width: 200rpx
      height: 200rpx
      border-radius: 50%
    .title
      line-height: 100rpx
      font-size: $large-fs
  .tips
    padding: 0rpx 50rpx
    margin-bottom: 50rpx
    &-item
      font-size: $normal-fs
      color: $gray-text-color
      margin-top: $margin
      list-style-type: disc
  .auth-btn
    width: 100%
    padding: 0rpx 50rpx
    box-sizing: border-box
</style>

