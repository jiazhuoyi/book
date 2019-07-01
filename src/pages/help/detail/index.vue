<template>
  <div class="help-detail">
    <div class="question">
      <p>Q：{{help.title}}</p>
    </div>
    <div class="answer">
      <p>A：</p>
      <p>{{help.answer}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      help: {
        title: '申请采购',
        answer: '为了更好地服务读者，图书馆没有该图书的话，读者也可以申请采购，图书馆管理员将会审核。审核通过后，管理员将尽快采购该图书供读者借阅。'
      }
    }
  }
}
</script>

<style scoped>
.help-detail {
  padding: 30rpx;
}
.question {
  padding-bottom: 30rpx;
  border-bottom: 1px solid #e0e0e0;
}
.answer {
  padding-top: 30rpx;
  font-size: 28rpx;
  line-height: 40rpx;
}
</style>


