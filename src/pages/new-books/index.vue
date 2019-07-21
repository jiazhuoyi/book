<template>
  <div class="new-books">
    <book v-for="book in newBooks" :key="book.id" :book="book"></book>
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
      newBooks: [],
      start: 0,
      limit: 12,
      loading: true
    }
  },
  async onPullDownRefresh () {
    this.newBooks = await this.getBooks(0, this.limit)
    wx.stopPullDownRefresh()
  },
  async onReachBottom () {
    if (this.loading) {
      this.start = this.newBooks.length
      const books = await this.getBooks(this.start, this.limit)
      this.newBooks = this.newBooks.concat(books)
    }
  },
  async mounted () {
    this.newBooks = await this.getBooks(0, this.limit)
  },
  methods: {
    async getBooks (start, limit) {
      this.loading = true
      const results = await this.$fly.get('/books',
        { type: 'new', start, limit }, { noLoading: true })
      if (results.books.length < this.limit) {
        this.loading = false
      }
      return results.books
    }
  }
}
</script>
