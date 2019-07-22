<template>
  <div class="checking">
    <div class="background">
      <span class="content">审核中</span>
    </div>
    <div class="info">
      <span class="content">
        您的资料已提交，请耐心等待审核...
      </span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.checking
  .background
    width: 100%
    height: 600rpx
    background-color: $theme-color
    display: flex
    justify-content: center
    align-items: center
    .content
      color: $text-color
      font-size: .6rem
  .info
    padding: $padding
    color: $gray-text-color 
    text-align: center
    margin-top: $margin
    font-size: $normal-fs
    

</style>

