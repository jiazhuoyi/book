<template>
  <div class="book-detail">
    <van-toast id="van-toast" />
    <div class="detail-header">
      <div class="picture">
        <img class="image" :src="book.image">
      </div>
      <div class="info">
        <p>{{book.title}}</p>
        <van-rate  allow-half readonly :value="book.rating && (book.rating.average / 2)" size="13"></van-rate>
        <p class="author">{{book.author}}</p>
      </div>
      <div class="status">
        <p>还剩{{book.status}}本</p>
        <p>借阅{{book.borrow_count}}次</p>
      </div>
    </div>
    <basic-info :book="book"></basic-info>
    <btn-detail
      :count="cartCount"
      :btn-status="book.status"
      :available-book="availableBook"
      @btnclick="addCart">
    </btn-detail>
  </div>
</template>
<script>
import basicInfo from '@/pages/detail/basic-info'
import Toast from '../../../static/vant/toast/toast'
import btnDetail from './btn-bar'

export default {
  components: {
    basicInfo,
    btnDetail
  },
  data () {
    return {
      book: {},
      cartCount: 0,
      availableBook: false
    }
  },
  async mounted () {
    const id = this.$root.$mp.query.id
    const result = await this.$fly.get('/book', { id })
    this.book = result.book
    this.cartCount = result.cartInfo.cartCount
    this.availableBook = result.cartInfo.availableBook
    // const result1 = await this.$fly.get('/cart/count')
    // this.cartCount = result1.cartCount
  },
  methods: {
    async addCart () {
      const result = await this.$fly.post('/cart',
        { userId: '1231313', bookId: this.book._id })
      this.cartCount = result.cartInfo.cartCount
      this.availableBook = result.cartInfo.availableBook
      Toast.success('加入成功')
    }
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

