<template>
  <div class="new-books">
    <book v-for="book in newBooks" :key="book.id" :book="book"></book>
    <div class="loadmore" v-if="show">----正在加载----</div>
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
    console.log('到底处理........')
    this.show = true
    console.log('加载前....this.newBooks:', this.newBooks.length)
    this.start = this.newBooks.length
    const results = await this.$fly.get('/books',
      { type: 'new', start: this.start, limit: this.limit })
    console.log('results.books:', results.books)
    this.newBooks.concat(results.books)
    console.log('加载后....this.newBooks:', this.newBooks)
    const a = [1, 2].concat([3, 4])
    console.log('a:', a)
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
