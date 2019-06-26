<template>
  <div class="new-books">
    <book v-for="book in newBooks" :key="book.id" :book="book"></book>
    <div class="loadmore">----正在加载----</div>
  </div>
</template>

<script>
import book from '@/components/book'

export default {
  components: {
    book
  },
  data () {
    return {
      newBooks: [],
      start: 0,
      limit: 12,
      show: true
    }
  },
  async onPullDownRefresh () {
    await this.getBooks()
    wx.stopPullDownRefresh()
  },
  async onReachBottom () {
    this.show = true
    this.start = this.newBooks.length
    const results = await this.$fly.get('/books',
      { type: 'new', start: this.start, limit: this.limit }, { noLoading: true })
    this.newBooks = this.newBooks.concat(results.books)
    this.show = false
  },
  async mounted () {
    await this.getBooks()
  },
  methods: {
    async getBooks () {
      const results = await this.$fly.get('/books',
        { type: 'new', start: 0, limit: this.limit })
      this.newBooks = results.books
    }
  }
}
</script>
<style scoped>
.loadmore {
  display: flex;
  justify-content: center;
}
</style>
