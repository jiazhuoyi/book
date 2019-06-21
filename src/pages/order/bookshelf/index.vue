<template>
  <div class="bookshelf">
    <order-item v-for="order in orders" :key="order._id" :order="order"></order-item>
  </div>
</template>

<script>
import orderItem from '../order-item'

export default {
  components: {
    orderItem
  },
  data () {
    return {
      orders: []
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
    }
  }
}
</script>
