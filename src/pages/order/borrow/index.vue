<template>
  <div class="borrow">
    <order-item v-for="order in orders" :key="order._id" :order="order"></order-item>
    <abnor title="暂无借书记录" text="去逛逛" v-if="loaded && !orders.length"></abnor>
    <div v-if="loaded && orders.length">
      <loadmore :loading="loading"></loadmore>
    </div>
  </div>
</template>

<script>
import orderItem from '../order-item'
import abnor from '@/components/abnor'

export default {
  components: {
    orderItem,
    abnor
  },
  data () {
    return {
      orders: [],
      loaded: false,
      loading: true,
      start: 0,
      limit: 12
    }
  },
  async onPullDownRefresh () {
    this.orders = await this.getOrders(0, this.limit)
    wx.stopPullDownRefresh()
  },
  async mounted () {
    await this.getOrders()
  },
  async onReachBottom () {
    this.start = this.orders.length
    this.loading = true
    const orders = await this.getOrders(this.start, this.limit, true)
    this.orders = this.orders.concat(orders)
  },
  methods: {
    async getOrders (start, limit, noLoading = false) {
      const result = await this.$fly.get('/order', {
        start,
        limit,
        type: 'borrowed'
      }, {
        noLoading
      })
      this.loaded = true
      if (result.orders.length < this.limit) {
        this.loading = false
      }
      return result.orders
    }
  }
}
</script>
