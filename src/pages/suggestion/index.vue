<template>
  <div class="suggestion">
    <van-toast id="van-toast" />
    <div class="suggestion-wrapper">
      <p class="title">反馈意见</p>
      <div class="content">
        <van-field
          type="textarea"
          placeholder="请输入反馈意见"
          class="input-class"
          size="large"
          autosize
          :value="content"
          @change="onChange" />
        <!-- <textarea
          placeholder="请输入反馈意见"
          :value="content"
          row="2"></textarea> -->
      </div>
      <div class="btn">
        <van-button type="danger" size="large" @click="commitSuggetsion">确定提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '../../../static/vant/toast/toast'

export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    onChange (event) {
      this.content = event.mp.detail
    },
    async commitSuggetsion () {
      await this.$fly.post('/suggestion', { content: this.content })
      Toast.success('反馈意见提交成功')
      this.content = ''
    }
  }
}
</script>


<style lang="stylus" scoped>
.suggestion
  &-wrapper
    width: 100%
    box-sizing: border-box
    padding: $padding
    .title
      font-size: $normal-fs
      margin-bottom: $margin
    .btn
      margin-top: 80rpx
</style>

