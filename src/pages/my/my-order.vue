<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-12 17:18:46
 * @LastEditTime: 2019-08-17 16:23:23
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="my-order">
    <a class="new-rank my-order-item" hover-class="none" href="/pages/order/bookshelf/main">
      <img class="my-order-icon" src="https://cdn.jiazhuoyi.cn/bookshelf.png">
      <span class="my-order-title">书架</span>
    </a>
    <a class="borrow-rank my-order-item" hover-class="none" href="/pages/order/borrow/main">
      <img class="my-order-icon" src="https://cdn.jiazhuoyi.cn/borrow-order.png">
      <span class="my-order-title">借书记录</span>
    </a>
    <a class="all my-order-item" hover-class="none" href="/pages/order/return/main">
      <img class="my-order-icon" src="https://cdn.jiazhuoyi.cn/return-order.png">
      <span class="my-order-title">还书记录</span>
    </a>
  </div>
</template>

<style lang="stylus" scoped>
.my-order
  width: 100%
  display: flex
  margin-top: -40rpx
  padding: 40rpx 0
  border-top-left-radius: 40rpx
  border-top-right-radius: 40rpx
  z-index: 2
  background-color: #fff
  &-item
    flex: 1
    text-align: center
    .my-order-icon
      width: 70rpx
      height: 70rpx
    .my-order-title
      display: block
      font-size: $margin
</style>
