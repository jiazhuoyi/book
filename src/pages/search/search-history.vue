<template>
  <div class="search-history">
    <div class="header">
      历史搜索
      <van-icon  @click = "removeHistory" class="delete" name="delete"/>
    </div>
    <div class="history-container">
      <div class="history-item" v-for="history in histories" :key="history">
        <span class="history-name">{{history}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['histories'],
  methods: {
    removeHistory () {
      this.$emit('remove')
    }
  }
}
</script>


<style scoped>
.search-history {
  padding: 30rpx;
}
.header {
  font-size: 28rpx;
  /* line-height: 50rpx; */
}
.delete {
  float: right;
  font-size: 28rpx;
}
.history-container {
  display: flex;
  flex-wrap: wrap;
  /* padding: 20rpx 0; */
}
.history-item {
  margin-top: 20rpx;
  padding: 10rpx;
  margin-right: 20rpx;
  background: #f5f5f5;
  font-size: 24rpx;
  color: #686868;
}
</style>
