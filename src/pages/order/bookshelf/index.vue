<template>
  <div class="bookshelf">
    <book v-for="i in 8" :key="i"></book>
  </div>
</template>

<script>
import book from '@/components/book'

export default {
  components: {
    book
  }
}
</script>
