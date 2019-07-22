<template>
  <div class="bookshelf">
    <order-item v-for="order in orders" :key="order._id" :order="order" @refresh="refresh"></order-item>
    <abnor title="暂无还书记录" text="去逛逛" v-if="loaded && !orders.length"></abnor>
    <div v-if="loaded && orders.length">
      <loadmore :loading="loading"></loadmore>
    </div>
  </div>
</template>

<script>
import orderItem from '../order-item'
import abnor from '@/components/abnor'
import loadmore from '@/components/loadmore'

export default {
  components: {
    orderItem,
    abnor,
    loadmore
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
    this.orders = await this.getOrders(0, this.limit)
  },
  async onReachBottom () {
    this.start = this.orders.length
    this.loading = true
    const orders = await this.getOrders(this.start, this.limit, true)
    this.orders = this.orders.concat(orders)
  },
  methods: {
    async refresh () {
      this.orders = await this.getOrders(0, this.limit)
    },
    async getOrders (start, limit, noLoading = false) {
      const result = await this.$fly.get('/order', {
        start,
        limit,
        type: 'all'
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
