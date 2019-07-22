<template>
  <div class="btn-bar">
    <van-button plain type="primary"
      round size="small"
      class="btn"
      v-if="status == 1 || status == 2"
      @click="returnBook">
      归还图书
    </van-button>
    <van-button plain type="info"
      round size="small"
      class="btn"
      v-if="status == 1"
      @click="renewBook">
      续借图书
    </van-button>
    <!-- <van-button plain type="default"
      round size="small"
      class="btn"
      v-if="status == 0 || status == 3"
      @click="returnBook">
      取消订单
    </van-button> -->
  </div>
</template>

<script>
export default {
  props: ['status', 'id'],
  methods: {
    async renewBook () {
      await this.updateOrder('order_renew')
    },
    async returnBook () {
      await this.updateOrder('order_return_apply')
    },
    async updateOrder (operation) {
      await this.$fly.put('/order', { id: this.id, operation })
      this.$emit('refresh')
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn-bar
  padding: 0 $padding $padding $padding
  text-align: right
  .btn
    margin-left: $padding
</style>

