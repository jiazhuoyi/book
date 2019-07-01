<template>
  <div class="home">
    <div class="header">
      <div class="title">
        <span class="content">印象晓书馆</span>
      </div>
      <div class="serach-area">
        <van-search 
          class="search"
          placeholder="书名/作则/ISBN"
          shape="round"
          disabled
          background="#EE5E7B"
          @click="goSearchPage">
        </van-search>
      </div>
    </div>
    <category></category>
    <commend :books="commendBooks"></commend>
    <all-book :books="allBooks" :checked="checked" @change="onChange"></all-book>
    <div class="loading">
      <loadmore :loading="loading"></loadmore>
    </div>
  </div>
</template>

<script>
import commend from '@/pages/index/commend'
import allBook from '@/pages/index/all-book'
import category from '@/pages/index/category'
import loadmore from '@/components/loadmore'

export default {
  components: {
    commend,
    allBook,
    category,
    loadmore
  },
  data () {
    return {
      start: 0,
      limit: 12,
      allBooks: [],
      commendBooks: [],
      checked: false,
      type: 'all',
      loading: true
    }
  },
  async onPullDownRefresh () {
    await this.getAll()
    wx.stopPullDownRefresh()
  },
  async mounted () {
    await this.getAll()
  },
  async onReachBottom () {
    this.start = this.allBooks.length
    this.loading = true
    // const books = await this.getBooks(this.start, this.limit)
    const books = await this.getAllBooks(this.start, this.limit, this.type)
    if (books.length < this.allBooks.length) {
      this.loading = false
    }
    this.allBooks = this.allBooks.concat(books)
  },
  methods: {
    goSearchPage () {
      mpvue.navigateTo({ url: '../search/main' })
    },
    async getAll () {
      [this.commendBooks, this.allBooks] = await Promise.all(
        [this.getCommendBooks(), this.getAllBooks(0, this.limit, this.type)])
    },
    async getAllBooks (start, limit, type) {
      const result = await this.$fly.get('/books', { type, start, limit })

      return result.books
    },
    async getCommendBooks () {
      const result = await this.$fly.get('/books',
        { type: 'hot', start: 0, limit: 4 })
      return result.books
    },
    async onChange (checked) {
      console.log('checked:', checked)
      this.checked = checked
      this.type = checked ? 'noSeen' : 'all'
      const result = await this.getAllBooks(0, this.limit, this.type)
      this.allBooks = result
    }
  }
}
</script>


<style scoped>
.home {
  background-color: #E2E2E2;
  /* padding-bottom: 50rpx; */
}
.header {
  width: 100%;
  height: 400rpx;
  background-color: #EE5E7B;
  z-index: 1;
}
.title {
  width: 100%;
  height: 200rpx;
  text-align: center;
  line-height: 200rpx;
  color: #fff;
  font-size: .5rem;
}
.content {
  display: inline-block;
}
.serach-area {
  height: 180rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search {
  width: 100%;
}
.loading {
  background-color: #fff;
}
/* .serach {
  width: 80%;
  border-radius: 1rem;
  height: .7rem;
  line-height: .7rem;
  background-color: #fff;
} */
</style>