<template>
  <div class="abnor">
    <!-- <van-icon ></van-icon> -->
    <!-- <img class="abnor-image" :src="image"> -->
    <p class="title">{{title}}</p>
    <van-button size="small" type="danger" @click="goIndex">{{text}}</van-button>
  </div>
</template>
<script>
export default {
  props: ['image', 'title', 'text'],
  methods: {
    goIndex () {
      wx.switchTab({ url: '/pages/index/main' })
    }
  }
}
</script>

<style scoped>
.abnor {
  width: 100%;
  height: 400rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* .abnor-image {
  width: 200rpx;
  height: 200rpx;
  color: rgba(0,0,0,.27);
} */
.title {
  margin: 30rpx 0rpx;
  color: rgba(0,0,0,.27);
  font-size: 28rpx;
}
</style>

