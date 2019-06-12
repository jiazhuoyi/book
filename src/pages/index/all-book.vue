<template>
  <div class="all-book">
    <div class="all-book-title">
      <span>所有图书</span>
      <div class="book-switch">
        可借阅<van-switch size="18px" :checked="checked" @change="changeChecked"/>
      </div>
    </div>
    <div class="all-book-item" v-for="i in 8" :key="i" @click="goDetail">
      <div class="all-book-img">
        <img class="all-book-img-photo" :src="book.image">
      </div>
      <div class="all-book-description">
        <span class="description-title">{{book.name}}</span>
        <span class="description-author">{{book.author}}</span>
        <!-- <span>{{book.rating}}分</span> -->
        <van-rate readonly :value="book.rating" size="15"></van-rate>
      </div>
      <div class="all-book-status">
        <span>还剩{{book.status}}本</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true,
      book: {
        image: '/static/images/books/1.jpg',
        name: '人生海海',
        author: '麦家',
        rating: 4,
        status: 2
      }
    }
  },
  methods: {
    goDetail () {
      console.log('goDetail....')
      mpvue.navigateTo({ url: '../detail/main' })
    },
    changeChecked ({ res }) {
      console.log('res:', res)
      console.log('checked:', this.checked)
      this.setData({ checked: res })
    }
  }
}
</script>
<style scoped>
.all-book {
  margin-top: 10rpx;
  background-color: #fff;
}

.all-book-title {
  font-size: 28rpx;
  padding: 15rpx;
}
.book-switch {
  float: right;
}
.all-book-item {
  display: flex;
  padding: 20rpx 15rpx;
  border-bottom: 1px solid #e0e0e0;
  height: 200rpx;
}
.all-book-img {
  width: 20%;
}
.all-book-img-photo {
  width: 100%;
  height: 200rpx;
}
.all-book-description {
  flex: 1;
  margin-left: 15rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
.all-book-status {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28rpx;
}
.description-title {
  display: block;
  font-size: 36rpx;
  /* line-height: 40rpx; */
}
.description-author {
  display: block;
  font-size: 32rpx;
  /* line-height: 40rpx; */
  color: #9B9B9B;
  font-weight: 300;
}
</style>
