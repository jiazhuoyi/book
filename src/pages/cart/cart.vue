<template>
  <div class="cart">
    <van-dialog id="van-dialog" />
    <div class="book" v-for="i in 6" :key="i">
      <van-swipe-cell id="swipe-cell" right-width="65" @close="removeBook">
        <div class="cart-container">
          <div class="select">
            <van-checkbox :value="checked" title="看过"></van-checkbox>
          </div>
          <div class="picture" @click="goBookDetail">
            <img class="image" :src="book.image">
          </div>
          <div class="info">
            <p class="info-title" @click="goBookDetail">{{book.name}}</p>
            <p class="info-author">{{book.author}}</p>
            <van-tag type="success">还剩{{book.status}}本</van-tag>
          </div>
        </div>
        <view slot="right" class="book-right">删除</view>
      </van-swipe-cell>
    </div>

    <!-- <van-swipe-cell id="swipe-cell" right-width="65" >
      <div class="book" v-for="i in 6" :key="i">
        <div class="cart-container">
          <div class="select">
            <van-checkbox :value="checked" title="看过"></van-checkbox>
          </div>
          <div class="picture" @click="goBookDetail">
            <img class="image" :src="book.image">
          </div>
          <div class="info">
            <p class="info-title" @click="goBookDetail">{{book.name}}</p>
            <p class="info-author">{{book.author}}</p>
            <van-tag type="success">还剩{{book.status}}本</van-tag>
          </div>
        </div>
    </div>
      <view slot="right" class="book-right">删除</view>
    </van-swipe-cell> -->
    <commonNav></commonNav>
  </div>
</template>

<script>
import commonNav from '@/pages/cart/common-nav'
import Dialog from '../../../static/vant/dialog/dialog'

export default {
  components: {
    commonNav
  },
  data () {
    return {
      values: [],
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
    goBookDetail () {
      mpvue.navigateTo({ url: '../detail/main' })
    },
    removeBook (index) {
      console.log('index:', index)
      Dialog.alert({
        message: `确定要删除这个商品吗？${index}`
      }).then(() => {
        // on close
        console.log('删除成功')
      })
    }
  }
}
</script>

<style scoped>
/* .cart {
  padding-bottom: 100rpx;
} */
.checkbox-item {
  text-align: center;
}
.book {
  /* display: flex; */
  /* width: 100%; */
  box-sizing: border-box;
  width: 100%;
  padding: 30rpx 0;
  border-bottom: 1px solid #e0e0e0;
}

.book-right {
  display: flex;
  width: 130rpx;
  height: 100%;
  background-color: #f44;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.cart-container {
  display: inline-block;
  display: flex;
}
.select {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.picture {
  width: 140rpx;
  height: 200rpx;
}
.image {
  /* width: 80%; */
  /* height: 200rpx;
   */
   width: 100%;
   height: 100%;
}
.info {
  flex: 1;
  margin-left: 30rpx;
}
.info-title {
  font-size: 28rpx;
}
.info-author {
  font-size: 24rpx;
  color: #999;
}
.info-status {
  font-size: 28rpx;
}
</style>

