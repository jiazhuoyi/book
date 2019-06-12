<template>
  <div class="home">
    <div class="header">
      <div class="title">
        <span class="content">印象晓书馆</span>
      </div>
      <div class="serach-area">
        <!-- <div class="serach"></div> -->
        <!-- <div class="serach"></div> -->
        <van-search class="search" placeholder="书名/作则/ISBN" shape="round" background="#EE5E7B"></van-search>
      </div>
    </div>
    <category></category>
    <commend></commend>
    <all-book></all-book>
  </div>
</template>

<script>
import commend from '@/pages/index/commend'
import allBook from '@/pages/index/all-book'
import category from '@/pages/index/category'

export default {
  components: {
    commend,
    allBook,
    category
  }
}
</script>


<style scoped>
.home {
  background-color: #E2E2E2;
  padding-bottom: 50rpx;
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
/* .serach {
  width: 80%;
  border-radius: 1rem;
  height: .7rem;
  line-height: .7rem;
  background-color: #fff;
} */
</style>