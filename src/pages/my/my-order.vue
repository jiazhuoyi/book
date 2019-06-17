<template>
  <div class="my-order">
    <a class="new-rank my-order-item" hover-class="none" href="/pages/order/bookshelf/main">
      <img class="my-order-icon" src="/static/images/bookshelf.png">
      <span class="my-order-title">书架</span>
    </a>
    <a class="borrow-rank my-order-item" hover-class="none" href="/pages/order/borrow/main">
      <img class="my-order-icon" src="/static/images/borrow-order.png">
      <span class="my-order-title">借书记录</span>
    </a>
    <a class="all my-order-item" hover-class="none" href="/pages/order/return/main">
      <img class="my-order-icon" src="/static/images/return-order.png">
      <span class="my-order-title">还书记录</span>
    </a>
  </div>
</template>

<style scoped>
.my-order {
  width: 100%;
  display: flex;
  margin-top: -40rpx;
  padding: 40rpx 0;
  border-top-left-radius: 40rpx;
  border-top-right-radius: 40rpx;
  z-index: 2;
  background-color: #fff;
}
.my-order-item {
  flex: 1;
  text-align: center;
}
.my-order-icon {
  width: 70rpx;
  height: 70rpx;
}
.my-order-title {
  display: block;
  font-size: 30rpx;
}
</style>
