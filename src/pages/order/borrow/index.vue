<template>
  <div class="borrow">
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
  async mounted () {
    const result = await this.$fly.get('/order', {
      start: 0,
      limit: 10,
      type: 'borrowed'
    })
    this.orders = result.orders
  }
}
</script>
