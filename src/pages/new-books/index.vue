<template>
  <div class="new-books">
    <book v-for="book in newBooks" :key="book.id" :book="book"></book>
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
      newBooks: []
    }
  },
  async mounted () {
    const results = await this.$fly.get('/books',
      { type: 'new' })
    this.newBooks = results.books
  }
}
</script>
