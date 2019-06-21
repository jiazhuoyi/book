<template>
  <div class="hot-books">
    <book v-for="book in hotBooks" :key="book.id" :book="book"></book>
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
      hotBooks: []
    }
  },
  async onPullDownRefresh () {
    await this.getBooks()
    wx.stopPullDownRefresh()
  },
  async mounted () {
    await this.getBooks()
  },
  methods: {
    async getBooks () {
      const results = await this.$fly.get('/books', { type: 'hot' })
      this.hotBooks = results.books
    }
  }
}
</script>
