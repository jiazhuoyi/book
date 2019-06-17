<template>
  <div class="book-detail">
    <div class="detail-header">
      <div class="picture">
        <img class="image" :src="book.image">
      </div>
      <div class="info">
        <p>{{book.title}}</p>
        <van-rate readonly :value="book.rating && (book.rating.average / 2)" size="13"></van-rate>
        <p class="author">{{book.author}}</p>
      </div>
      <div class="status">
        <p>还剩{{book.status}}本</p>
        <p>借阅{{book.borrow_count}}次</p>
      </div>
    </div>
    <basic-info :book="book"></basic-info>
    <btn-detail></btn-detail>
  </div>
</template>
<script>
import basicInfo from '@/pages/detail/basic-info'
import btnDetail from './btn-bar'

export default {
  components: {
    basicInfo,
    btnDetail
  },
  data () {
    return {
      book: {}
    }
  },
  async mounted () {
    console.log('params:', this.$root.$mp.query.id)
    const id = this.$root.$mp.query.id
    // const results = await this.$fly.get('/notice')
    const result = await this.$fly.get('/book', { id })
    this.book = result.book
    console.log('book:', result.book.rating.average)
  }
}
</script>

<style scoped>
.book-detail {
  width: 100%;
  background-color: #E2E2E2;
}
.detail-header {
  display: flex;
  background-color: #fff;
  padding: 40rpx;
}
.picture {
  margin-right: 20rpx;
}
.image {
  width: 200rpx;
  height: 300rpx;
}
.author {
  color: #979997;
  font-size: 28rpx;
}
.info {
  flex: 1;
}
.status {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24rpx;
}
</style>

