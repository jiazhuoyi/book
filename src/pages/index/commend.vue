<template>
  <div class="hot-commend">
      <div class="hot-title">
        <span class="name">热门推荐</span>
      </div>
      <div class="hot-book">
        <a class="book-item"
          v-for="book in books"
          :key="book.id"
          hover-class="none" 
          :href="'/pages/detail/main?id='+book.id">
          <img class="book-item-img" :src="book.image">
          <span class="book-item-title">{{book.title}}</span>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  props: ['books']
}
</script>

<style lang="stylus" scoped>
.hot-commend
  margin-top: $small-margin
  padding-bottom: $padding
  background-color: $whiteColor
  .hot-title
    font-size: $normal-fs
    padding: $padding
    .name
      line-height: 40rpx
  .hot-book
    display: flex
    justify-content: space-between
    padding: 0 $padding
    .book-item
      text-align: center
      &-img
        width: $img-width
        height: $img-height
      &-title
        display: block
        font-size: $normal-fs
        width: $img-width
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
</style>
