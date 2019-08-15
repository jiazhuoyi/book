<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-12 17:18:46
 * @LastEditTime: 2019-08-15 14:24:24
 * @LastEditors: Please set LastEditors
 -->
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
  onLoad () {
    this.bookId = {}
  },
  async mounted () {
    const id = this.$root.$mp.query.id
    const result = await this.$fly.get('/book', { id })
    this.book = result.book
    this.cartCount = result.cartInfo.cartCount
    this.availableBook = result.cartInfo.availableBook
  },
  methods: {
    async addCart () {
      const result = await this.$fly.post('/cart',
        { bookId: this.book._id })
      this.cartCount = result.cartInfo.cartCount
      this.availableBook = result.cartInfo.availableBook
      Toast.success('加入成功')
    }
  }
}
</script>

<style lang="stylus" scoped>
.book-detail
  width: 100%;
  background-color: $bg-color
  .detail-header
    display: flex;
    background-color: $cover-bg-color
    padding: $padding
    .picture
      margin-right: $margin
      .image
        width: 200rpx
        height: 300rpx
    .info
      flex: 1
      .author
        color: $gray-text-color
        font-size: $normal-fs
    .status
      width: 20%
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      font-size: $small-fs
</style>

