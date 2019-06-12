<template>
  <div class="category">
    <a class="new-rank category-item">
      <img class="category-icon" src="/static/images/new-rank.png">
      <span class="category-title">新书榜</span>
    </a>
    <a class="borrow-rank category-item">
      <img class="category-icon" src="/static/images/borrow-rank.png">
      <span class="category-title">借阅榜</span>
    </a>
    <a class="all category-item">
      <img class="category-icon" src="/static/images/all.png">
      <span class="category-title">所有图书</span>
    </a>
  </div>
</template>

<style scoped>
.category {
  width: 100%;
  display: flex;
  margin-top: -40rpx;
  padding: 40rpx 0;
  border-top-left-radius: 40rpx;
  border-top-right-radius: 40rpx;
  z-index: 2;
  background-color: #fff;
}
.category-item {
  flex: 1;
  text-align: center;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.category-icon {
  width: 100rpx;
  height: 100rpx;
}
.category-title {
  display: block;
  font-size: 30rpx;
}
</style>
