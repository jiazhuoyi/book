<template>
  <div class="my">
    <!-- <div class="header"></div> -->
    <my-header></my-header>
    <my-order></my-order>
    <my-list></my-list>
  </div>
</template>

<script>
import myHeader from '@/pages/my/my-header'
import myOrder from '@/pages/my/my-order'
import myList from '@/pages/my/my-list'

export default {
  components: {
    myHeader,
    myOrder,
    myList
  },
  data () {
    return {
      logs: []
    }
  },
  mounted () {
    wx.authorize({
      scope: 'scope.record',
      success (res) {
        console.log('res:', res)
      }
    })
  }
}
</script>

<style scoped>
.my {
  background-color: #E2E2E2;
}
</style>
