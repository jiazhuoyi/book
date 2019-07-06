<template>
  <div class="search-history">
    <div class="header">
      历史搜索
      <van-icon  @click = "removeHistory" class="delete" name="delete"/>
    </div>
    <div class="history-container">
      <div class="history-item" v-for="history in histories" :key="history">
        <span class="history-name">{{history}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['histories'],
  methods: {
    removeHistory () {
      this.$emit('remove')
    }
  }
}
</script>


<style lang="stylus" scoped>
.search-history
  padding: $padding
  .header
    font-size: $normal-fs
    .delete
      float: right
      font-size: $normal-fs
  .history-container
    display: flex
    flex-wrap: wrap
    .history-item
      margin-top: $margin
      padding: $small-padding
      margin-right: $margin
      background: $search-bg-color
      font-size: $small-fs
      color: $search-fs-color
</style>
