<template>
  <div class="my-list">
    <van-toast id="van-toast" />
    <van-cell size="large" title="我的书评" is-link icon="comment-o" @click="onerror('我的书评')"></van-cell>
    <van-cell size="large" title="申请采购" is-link icon="bag-o" url="../purchase/main"></van-cell>
    <van-cell size="large" title="新手帮助" is-link icon="question-o" url="../help/index/main"></van-cell>
    <van-cell size="large" title="意见反馈" is-link icon="records" url="../suggestion/main"></van-cell>
  </div>
</template>

<script>
import Toast from '../../../static/vant/toast/toast'

export default {
  methods: {
    onerror (msg) {
      Toast(`${msg}功能暂未开放`)
    }
  }
}
</script>

<style scoped>
.my-list {
  margin-top: 10rpx;
  width: 100%;
  height: 300rpx;
  background-color: #fff;
}
</style>

