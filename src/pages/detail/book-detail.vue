<template>
  <div class="book-detail">
    <div class="detail-header">
      <div class="picture">
        <img class="image" :src="book.image">
      </div>
      <div class="info">
        <p>{{book.name}}</p>
        <van-rate readonly :value="book.rating" size="13"></van-rate>
        <p class="author">{{book.author}}</p>
      </div>
      <div class="status">
        <p>还剩{{book.status}}本</p>
        <p>借阅{{book.borrowTotal}}次</p>
      </div>
    </div>
    <basic-info></basic-info>
  </div>
</template>
<script>
import basicInfo from '@/pages/detail/basic-info'

export default {
  components: {
    basicInfo
  },
  data () {
    return {
      book: {
        image: '/static/images/books/1.jpg',
        name: '人生海海',
        author: '麦家',
        rating: 4,
        status: 2,
        borrowTotal: 5
      }
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

