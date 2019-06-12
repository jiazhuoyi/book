<template>
  <div class="hot-commend">
      <div class="hot-title">
        <span>热门推荐</span>
      </div>
      <div class="hot-book">
        <a class="book-item" hover-class="none" href="/pages/detail/main">
          <img class="book-item-img" src="/static/images/books/1.jpg">
          <span class="book-item-title">人生如海</span>
        </a>
        <a class="book-item" hover-class="none" href="/pages/detail/main">
          <img class="book-item-img" src="/static/images/books/2.jpg">
          <span class="book-item-title">坏血</span>
        </a>
        <a class="book-item" hover-class="none" href="/pages/detail/main">
          <img class="book-item-img" src="/static/images/books/3.jpg">
          <span class="book-item-title">巴黎圣母院</span>
        </a>
        <a class="book-item" hover-class="none" href="/pages/detail/main">
          <img class="book-item-img" src="/static/images/books/4.jpg">
          <span class="book-item-title">追风筝的人</span>
        </a>
      </div>
    </div>
</template>

<style scoped>
.hot-commend {
  margin-top: 10rpx;
  width: 100%;
  padding-bottom: 20rpx;
  background-color: #fff;  
}

.hot-title {
  font-size: 28rpx;
  padding: 15rpx;
}
.hot-book {
  display: flex;
  justify-content: space-between;
  padding-left: 15rpx;
  padding-right: 15rpx;
}
.book-item {
  width: 20%;
  text-align: center;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.book-item-img {
  width: 100%;
  height: 200rpx;
}
.book-item-title {
  display: block;
  font-size: 28rpx;
}
</style>
