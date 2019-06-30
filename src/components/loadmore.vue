<template>
  <div class="loadmore">
    <div class="wrapper">
      <div class="bounce item1"></div>
      <div class="bounce item2"></div>
      <div class="bounce item3"></div>
    </div>
  </div>
</template>

<style scoped>
.loadmore {
  width: 100%;
}
.wrapper {
  margin: auto;
  width: 120rpx;
  display: flex;
  height: 80rpx;
  justify-content: space-between;
  align-items: center;
}
.bounce {
  width: 20rpx;
  height: 20rpx;
  background-color: #EE5E7B;
  border-radius: 50%;
  animation: bouncedelay 1.4s infinite ease-in-out;
  animation-fill-mode: both;
  will-change: auto;
  transform: translate3d(0, 0, 0);
}
.item1 {
  animation-delay: -1.5s;
  animation-delay: -0.32s;
}
.item2 {
  animation-delay: -0.16s;
}
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
  }
  40% {
    transform: scale(1.0);
  }
}
</style>
