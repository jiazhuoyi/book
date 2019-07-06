<template>
  <div class="order">
    <a class="picture" hover-class="none" :href="'/pages/detail/main?id='+order.book._id">
      <img class="img" :src="order.book.image">
    </a>
    <div class="order-content">
      <div class="info">
        <p class="book-title">{{order.book.title}}</p>
        <p class="book-author">{{order.book.author}}</p>
      </div>
      <div class="book-status">
        <van-tag type="danger" v-if="order.status == 99">已过期</van-tag>
        <van-tag type="primary" v-if="order.status == 0 || order.status== 3">审核中</van-tag>
        <van-tag type="success" v-if="order.status == 1 || order.status==2">借书中</van-tag>
        <van-tag type="success" v-if="order.status == 1 || order.status==2">1月5日前还书</van-tag>
        <van-tag v-if="order.status == 4">已还书</van-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      default: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.order
  overflow: hidden
  box-sizing: border-box
  padding: $padding
  border-bottom: 1px solid $border-color
  display: flex
  .picture
    margin-right: $margin
    width: $img-width
    height: $img-height
    .img
      width: 100%
      height: 100%
  .order-content
    flex: 1
    display: flex
    justify-content: space-between
    .book-title
      font-size: $normal-fs
    .book-author
      font-size: $small-fs
      color: $gray-text-color
    .book-status
      display: flex
      flex-direction: column
      align-items: flex-end
      justify-content: center
</style>

