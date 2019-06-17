<template>
  <div class="common-nav">
    <div class="footer"></div>
    <div class="nav-container">
     <div class="all-select">
      <van-checkbox :value="checked"></van-checkbox>
     </div>
     <div class="select-text">全选</div>
     <p class="total">
      图书总计:
      <span class="num">5</span>
      本
     </p>
     <a href="" class="commit">
      下单
     </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false
    }
  }
}
</script>

<style scoped>
/* .common-nav {
} */
.footer {
  width: 100%;
  height: 100rpx;
}
.nav-container {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  height: 100rpx;
  background: hsla(0,0%,100%,.95);
}
.all-select {
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.select-text {
  line-height: 100rpx;
  font-size: 20rpx;
  color: #999;
}
.total {
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 700;
  padding-right: 20rpx;
  justify-content: flex-end;

}
.num {
  color: #e93b3d;
}
.commit {
  width: 30%;
  line-height: 100rpx;
  text-align: center;
  background-color: #e4393c;
  color: #fff;
}
</style>
