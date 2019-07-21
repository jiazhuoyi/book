<template>
  <div class="hot-books">
    <book v-for="book in hotBooks" :key="book.id" :book="book"></book>
    <loadmore :loading="loading"></loadmore>
  </div>
</template>

<script>
import book from '@/components/book'
import loadmore from '@/components/loadmore'

export default {
  components: {
    book,
    loadmore
  },
  data () {
    return {
      hotBooks: [],
      loading: true,
      start: 0,
      limit: 12
    }
  },
  async onPullDownRefresh () {
    this.hotBooks = await this.getBooks(0, this.limit)
    wx.stopPullDownRefresh()
  },
  async mounted () {
    this.hotBooks = await this.getBooks(0, this.limit)
  },
  async onReachBottom () {
    if (this.loading) {
      this.start = this.hotBooks.length
      const books = await this.getBooks(this.start, this.limit)
      this.hotBooks = this.hotBooks.concat(books)
    }
  },
  methods: {
    async getBooks (start, limit) {
      this.loading = true
      const results = await this.$fly.get('/books',
        { type: 'hot', start, limit }, { noLoading: true })
      if (results.books.length < this.limit) {
        this.loading = false
      }
      return results.books
    }
  }
}
</script>
