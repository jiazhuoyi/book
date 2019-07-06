<template>
  <div class="book">
    <a class="picture" hover-class="none" :href="'/pages/detail/main?id='+book.id">
      <img class="img" :src="book.image">
    </a>
    <div class="book-content">
      <p class="book-title">{{book.title}}</p>
      <div class="book-status">
        <van-rate allow-half :value="book.rating && book.rating.average/2" size="15"></van-rate>
        <van-tag type="danger" v-if="book.status == 0">暂不可借</van-tag>
        <van-tag type="success" v-else>还剩{{book.status}}本</van-tag>
      </div>
      <p class="book-author">{{book.author}}</p>
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
.book
  width: 100%
  overflow: hidden
  box-sizing: border-box
  padding: $padding
  border-bottom: 1px solid $border-color
  display: flex;
  .picture
    margin-right: $margin
    width: $img-width
    height: $img-height
    .img
      width: 100%
      height: 100%
  .book-content
    flex: 1
    .book-title
      font-size: $normal-fs
    .book-author
      font-size: $small-fs
      color: $gray-text-color
    .book-status
      display: flex
      justify-content: space-between
</style>

