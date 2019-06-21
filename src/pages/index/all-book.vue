<template>
  <div class="all-book">
    <div class="all-book-title">
      <span class="title">所有图书</span>
      <div class="book-switch">
        <span class="book-switch-text" v-show="checked">可借阅</span>
        <span class="book-switch-text" v-show="!checked">全部</span>
        <van-switch size="14px" :checked="checked" @change="onChange"/>
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
  data () {
    return {
      checked: false,
      books: []
    }
  },
  async mounted () {
    const results = await this.$fly.get('/books', { type: 'all' })
    this.books = results.books
  },
  methods: {
    goDetail (id) {
      mpvue.navigateTo({ url: `../detail/main?id=${id}` })
    },
    async onChange (event) {
      this.checked = event.mp.detail
      let type = 'noSeen'
      if (!this.checked) type = 'all'
      const results = await this.$fly.get('/books', { type })
      this.books = results.books
    }
  }
}
</script>
<style scoped>
.all-book {
  position: relative;
  margin-top: 10rpx;
  background-color: #fff;
}

.all-book-title {
  font-size: 28rpx;
  padding: 30rpx;
  overflow: hidden;
}
.title {
  line-height: 40rpx;
}
.book-switch {
  float: right;
  display: flex;
  align-items: flex-start;
}
.book-switch-text {
  margin-right: 20rpx;
}
.all-book-item {
  display: flex;
  padding: 20rpx 30rpx;
  border-bottom: 1px solid #e0e0e0;
  height: 200rpx;
}
.all-book-item:first-child {
  padding-top: 0rpx;
}
.all-book-img {
  width: 20%;
}
.all-book-img-photo {
  width: 100%;
  height: 200rpx;
}
.all-book-description {
  flex: 1;
  margin-left: 15rpx;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
.description-title {
  font-size: 28rpx;
}

.description-author {
  font-size: 24rpx;
  color: #999;
} 
.all-book-status {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28rpx;
}
/* .description-title {
  display: block;
  font-size: 36rpx;
}
.description-author {
  display: block;
  font-size: 32rpx;
  color: #9B9B9B;
  font-weight: 300;
} */
</style>
