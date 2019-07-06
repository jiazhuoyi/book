<template>
  <div class="my">
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
  }
}
</script>

<style lang="stylus" scoped>
.my
  background-color: $bg-color
</style>
