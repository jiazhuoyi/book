<template>
  <div class="book">
    <a class="picture" hover-class="none" :href="'/pages/detail/main?id='+book.id">
      <img class="img" :src="book.image">
    </a>
    <div class="book-content">
      <p class="book-title">{{book.title}}</p>
      <div class="book-status">
        <van-rate allow-half :value="book.rating && book.rating.average/2" size="15"></van-rate>
        <van-tag type="danger" v-if="book.status == 0">暂不可借</van-tag>
        <van-tag type="success" v-else>还剩{{book.status}}本</van-tag>
      </div>
      <p class="book-author">{{book.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      default: true
    }
  }
  // data () {
  //   return {
  //     book: {
  //       name: '追风筝的人',
  //       rating: 3.5,
  //       status: 0,
  //       author: 'The Kite Runner'
  //     }
  //   }
  // }
}
</script>

<style scoped>
.book {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 30rpx;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
}
.picture {
  margin-right: 30rpx;
  width: 140rpx;
  height: 200rpx;
}
/* .content {
  margin-left: 30rpx;
} */
.img {
  width: 100%;
  height: 100%;
}
.book-content {
  flex: 1;
}
.book-title {
  font-size: 28rpx;
}

.book-author {
  font-size: 24rpx;
  color: #999;
} 
.book-status {
  display: flex;
  justify-content: space-between;
}
</style>

