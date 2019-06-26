<template>
  <div class="bookshelf">
    <order-item v-for="order in orders" :key="order._id" :order="order"></order-item>
    <abnor title="暂无还书记录" text="去逛逛" v-if="loaded && !orders.length"></abnor>
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
      loaded: false
    }
  },
  async onPullDownRefresh () {
    await this.getOrders()
    wx.stopPullDownRefresh()
  },
  async mounted () {
    await this.getOrders()
  },
  methods: {
    async getOrders () {
      const result = await this.$fly.get('/order', {
        start: 0,
        limit: 10,
        type: 'all'
      })
      this.orders = result.orders
      this.loaded = true
    }
  }
}
</script>
