<template>
  <div class="all-book">
    <div class="all-book-title">
      <span class="title">所有图书</span>
      <div class="book-switch">
        <span class="book-switch-text" v-show="checked">可借阅</span>
        <span class="book-switch-text" v-show="!checked">全部</span>
        <van-switch size="20px" :checked="checked" @change="onChange"/>
        <!-- <van-switch size="14px" :checked="checked" @change="onChange"/> -->
      </div>
    </div>
    <div class="all-book-item" v-for="book in books" :key="book.id" @click="goDetail(book.id)">
      <div class="all-book-img">
        <img class="all-book-img-photo" :src="book.image">
      </div>
      <div class="all-book-description">
        <p class="description-title">{{book.title}}</p>
        <p class="description-author">{{book.author}}</p>
        <van-rate allow-half readonly :value="book.rating.average / 2" size="15"></van-rate>
      </div>
      <div class="all-book-status">      
        <span>还剩{{book.status}}本</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['books', 'checked'],
  methods: {
    goDetail (id) {
      mpvue.navigateTo({ url: `../detail/main?id=${id}` })
    },
    async onChange (event) {
      this.checked = event.mp.detail
      this.$emit('change', this.checked)
    }
  }
}
</script>
<style lang="stylus" scoped>
.all-book
  position: relative
  margin-top: $small-margin
  background-color: $whiteColor
  &-title
    display: flex
    width: 100%
    box-sizing: border-box
    font-size: $normal-fs
    padding: $padding $padding 0 $padding
    justify-content: space-between
    align-items: center
    .book-switch
      display: flex
      align-items: center
      &-text
        margin-right: $margin
  &-item
    display: flex
    padding: $padding
    border-bottom: 1px solid #e0e0e0
    .all-book-img
      &-photo
        width: $img-width
        height: $img-height
    .all-book-description
      flex: 1
      margin-left: $margin
      .description-title
        font-size: $normal-fs
      .description-author
        font-size: $small-fs
        color: $gray-text-color
    .all-book-status
      width: 20%
      display: flex
      justify-content: center
      align-items: center
      font-size: $normal-fs
</style>
