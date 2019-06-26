<template>
  <div class="btn-bar">
    <div class="footer"></div>
    <div class="bar-container">
      <!-- <div class="other"></div> -->
      <div class="like bar-item">
        <div class="bar-icon">
          <van-icon size="20px" name="like-o"/>
        </div>
        <span class="bar-text">喜欢</span>
      </div>
      <!-- <a class="cart bar-item" hover-class="none" href="/pages/cart/main"> -->
      <a class="cart bar-item" hover-class="none" @click="goCart">
        <div class="bar-icon">
          <van-icon size="18px" name="cart-o" :info="count"/>
        </div>
        <span class="bar-text">购物车</span>
      </a>
      <a href="" v-if="btnStatus > 0 && availableBook" class="commit" @click="addCart">
       加入购物车
      </a>
      <a href="" v-if="btnStatus <= 0 && availableBook" class="commit btn-disable">
       暂不可借
      </a>
      <a href="" v-if="!availableBook" class="commit btn-disable">
       已加入购物车
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    },

    btnStatus: {
      type: Number,
      default: 0
    },
    availableBook: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    goCart () {
      wx.switchTab({ url: '../cart/main' })
    },
    addCart (e) {
      this.$emit('btnclick')
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
  background-color: #fff;
}
.bar-container {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  height: 100rpx;
  background: hsla(0,0%,100%,.95);
}
.like {
  flex: 1;
}
.cart {
  flex: 1;
}
.bar-item {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.bar-icon {
  height: 60rpx;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.bar-text {
  font-size: 20rpx;
  line-height: 40rpx;
  color: #999;
  display: block;
}
.commit {
  /* width: 30%; */
  flex: 2;
  line-height: 100rpx;
  text-align: center;
  background-color: #e4393c;
  color: #fff;
}

.btn-disable {
  opacity: 0.2;
}
</style>
