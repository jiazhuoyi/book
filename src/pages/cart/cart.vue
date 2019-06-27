<template>
  <div class="cart">
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
    <abnor title="购物车还是空的" text="去逛逛" v-if="loaded && !carts.length"></abnor>
    <van-checkbox-group :value="checkedValue" @change.stop="onChange">
      <div class="book" v-for="cart in carts" :key="cart._id">
        <van-swipe-cell id="swipe-cell" async-close right-width="65" @close="removeBook($event, id)">
          <div class="cart-container">
            <div class="select" @click.stop="toggle(cart.book._id, $event)">
              <van-checkbox :name="cart.book._id" :class="'checkboxes-'+cart.book._id"></van-checkbox>
            </div>
            <div class="picture" @click="goBookDetail(cart.book._id)">
              <img class="image" :src="cart.book.image">
            </div>
            <div class="info">
              <p class="info-title" @click="goBookDetail(cart.book._id)">{{cart.book.name}}</p>
              <p class="info-author">{{cart.book.author}}</p>
              <van-tag type="success">还剩{{cart.book.status}}本</van-tag>
            </div>
          </div>
          <view slot="right" class="book-right">删除</view>
        </van-swipe-cell>
      </div>
    </van-checkbox-group>
    <commonNav @select="selectAll" :checked="totalChecked" :count="bookCount" @commit="commitOrder"></commonNav>
  </div>
</template>

<script>
import commonNav from '@/pages/cart/common-nav'
import abnor from '@/components/abnor'
import Dialog from '../../../static/vant/dialog/dialog'
import Toast from '../../../static/vant/toast/toast'

export default {
  components: {
    commonNav,
    abnor
  },
  data () {
    return {
      carts: [],
      checkedValue: [],
      bookCount: 0,
      totalChecked: false,
      loaded: false
    }
  },
  async onShow () {
    await this.refreshCart()
  },
  async onPullDownRefresh () {
    await this.refreshCart()
    wx.stopPullDownRefresh()
  },
  async mounted () {
    await this.getCartList()
  },
  methods: {
    async refreshCart () {
      this.carts = []
      this.checkedValue = []
      this.bookCount = 0
      this.totalChecked = false
      await this.getCartList()
    },
    async getCartList () {
      const result = await this.$fly.get('/cart')
      this.carts = result.carts
      this.loaded = true
    },
    selectAll (checked) {
      if (checked) {
        this.totalChecked = checked
        const cartIds = this.carts.map(cart => cart.book._id)
        this.checkedValue = cartIds
        this.bookCount = this.checkedValue.length
        return
      }
      this.checkedValue = []
      this.bookCount = this.checkedValue.length
    },
    onChange (event) {
      this.checkedValue = event.mp.detail
      this.bookCount = this.checkedValue.length
    },
    toggle (id, event) {
      const checkbox = this.$mp.page.selectComponent(`.checkboxes-${id}`)
      checkbox.toggle()
      this.checkedValue.length < this.carts.length ? this.totalChecked = false : this.totalChecked = true
    },
    goBookDetail (id) {
      mpvue.navigateTo({ url: `../detail/main?id=${id}` })
    },
    async commitOrder () {
      if (this.checkedValue.length > 3) {
        Toast.fail('一次性下单不能超过三本')
        return
      }
      await this.$fly.post('/order',
        {
          bookIds: this.checkedValue
        })
      Toast.success('下单成功，正在审核')
      await this.getCartList()
    },
    async removeBook (event, id) {
      const instance = event.mp.detail.instance
      Dialog.confirm({
        message: '你确定要删除吗?'
      }).then(async () => {
        // on close
        await this.$fly.delete('/cart', { bookId: id })
        Toast.success('删除成功')
        instance.close()
        await this.getCartList()
      }).catch(() => {
        instance.close()
        console.log('取消')
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

