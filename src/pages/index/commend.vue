<template>
  <div class="hot-commend">
      <div class="hot-title">
        <span class="name">热门推荐</span>
      </div>
      <div class="hot-book">
        <a class="book-item"
          v-for="book in hotBooks"
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
  data () {
    return {
      hotBooks: []
    }
  },
  async mounted () {
    const results = await this.$fly.get('/books',
      { type: 'hot', start: 0, limit: 4 })
    this.hotBooks = results.books
  }
}
</script>

<style scoped>
.hot-commend {
  margin-top: 10rpx;
  width: 100%;
  padding-bottom: 20rpx;
  background-color: #fff;  
}

.hot-title {
  font-size: 28rpx;
  padding: 30rpx;
}
.name {
  line-height: 40rpx;
}
.hot-book {
  display: flex;
  justify-content: space-between;
  padding-left: 30rpx;
  padding-right: 30rpx;
}
.book-item {
  /* width: 20%; */
  text-align: center;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.book-item-img {
  width: 140rpx;
  height: 200rpx;
  /* width: 100%;
  height: 200rpx; */
}
.book-item-title {
  display: block;
  font-size: 28rpx;
  width: 140rpx;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
</style>
