<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-12 17:18:46
 * @LastEditTime: 2019-08-17 16:21:35
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="category">
    <van-toast id="van-toast" />
    <a class="new-rank category-item" hover-class="none" href="/pages/new-books/main">
      <img class="category-icon" src="https://cdn.jiazhuoyi.cn/new-rank.png">
      <span class="category-title">新书榜</span>
    </a>
    <a class="borrow-rank category-item" hover-class="none" href="/pages/hot-books/main">
      <img class="category-icon" src="https://cdn.jiazhuoyi.cn/borrow-rank.png">
      <span class="category-title">借阅榜</span>
    </a>
    <a class="all category-item" hover-class="none" @click="onerror()">
      <img class="category-icon" src="https://cdn.jiazhuoyi.cn/book-all.png">
      <span class="category-title">图书分类</span>
    </a>
  </div>
</template>

<script>
import Toast from '../../../static/vant/toast/toast'
export default {
  methods: {
    onerror () {
      Toast(`图书分类板块暂未开放`)
    }
  }
}
</script>


<style lang="stylus" scoped>
.category
  width: 100%
  display: flex
  margin-top: -40rpx
  padding: $padding 0
  border-top-left-radius: 40rpx
  border-top-right-radius: 40rpx
  z-index: 2
  background-color: $whiteColor
  &-item 
    flex: 1
    text-align: center
    .category-icon
      width: 100rpx
      height: 100rpx
    .category-title
      display: block
      font-size: $normal-fs
</style>
