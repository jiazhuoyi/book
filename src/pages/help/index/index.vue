<template>
  <div class="help">
    <van-cell-group>
      <van-cell
        is-link
        v-for="help in helps"
        :key="help.id"
        :title="help.title"
        link-type="navigateTo"
        :url="'../detail/main?id='+ help.id"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      helps: [
        {
          id: '1',
          title: '申请采购'
        },
        {
          id: '2',
          title: '如何借还书？'
        }, {
          id: '3',
          title: '"暂不可借"是怎么回事？'
        }
      ]
    }
  }
}
</script>


