<template>
  <div class="purchase">
    <van-toast id="van-toast" />
    <van-cell-group>
      <van-field
        :value="book.title"
        id="title"
        required
        label="书名"
        :error="titleError"
        placeholder="请输入书名(必填项)"
        @change="change">
      </van-field>
      <van-field
        :value="book.author"
        label="作者"
        id="author"
        @change="change"
        placeholder="请输入作者">
      </van-field>
      <van-field
        :value="book.isbn"
        label="ISBN"
        id="isbn"
        border="false"
        @change="change"
        placeholder="请输入ISBN">
      </van-field>
    </van-cell-group>
    <div class="commit">
      <van-button 
        round
        type="danger"
        size="large"
        @click="commitPurchase">
        提交申请
      </van-button>
    </div>
  </div>
</template>

<script>
import Toast from '../../../static/vant/toast/toast'

export default {
  data () {
    return {
      book: {
        title: '',
        author: '',
        isbn: ''
      },
      titleError: false
    }
  },
  methods: {
    async commitPurchase () {
      if (!this.book.title) {
        this.titleError = true
        return
      }
      await this.$fly.post('/purchase', { book: this.book })
      Toast.success('申请成功')
      this.book = {
        title: '',
        author: '',
        isbn: ''
      }
    },
    change (event) {
      this.book[event.mp.target.id] = event.mp.detail
    }
  }
}
</script>

<style lang="stylus" scoped>
.commit
  margin-top: $margin
  padding: 0rpx $padding
  box-sizing: border-box
</style>


