<template>
  <div class="basic-info">
    <div class="info-container">
      <van-row>
        <van-col span="5">出版社</van-col>
        <van-col span="19">{{book.publisher}}</van-col>
      </van-row>
      <van-row>
        <van-col span="5">ISBN</van-col>
        <van-col span="19">{{book.isbn13}}</van-col>
      </van-row>
      <van-row>
        <van-col span="5">出版时间</van-col>
        <van-col span="9">{{book.pubdate}}</van-col>
        <van-col span="4">页数</van-col>
        <van-col span="6">{{book.pages}}</van-col>
      </van-row>
      <van-row>
        <van-col span="5">装帧</van-col>
        <van-col span="9">{{book.binding}}</van-col>
        <van-col span="4">价格</van-col>
        <van-col span="6">{{book.price}}</van-col>
      </van-row>
    </div>
    <div class="book-summary">
      <p class="summary-title">内容介绍</p>
      <p class="summary-text">{{book.catalog}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    book: {
      type: Object,
      default: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.basic-info
  margin-top: $small-margin
  box-sizing: border-box
  width: 100%
  background-color: $cover-bg-color
  padding: $padding
  .info-container
    border: 1rpx solid $border-color
    padding: $padding
    font-size: $normal-fs
  .book-summary
    margin-top: $margin
    .summary-title
      color: $warnning-color
    .summary-text
      font-size: $normal-fs
      line-height: 40rpx
      margin-top: $margin
</style>
