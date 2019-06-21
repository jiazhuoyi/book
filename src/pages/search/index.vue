<template>
  <div class="search">
    <div class="header">
      <van-search 
        class="search-text"
        placeholder="书名/作则/ISBN"
        :value="searchText"
        use-action-slot
        @change="change"
        @search="search">
        <view slot="action" @tap="search">搜索</view>
      </van-search>
    </div>
    <search-history :histories="histories" @remove="removeHistory"></search-history>
    <!-- <div class="hist"></div> -->
  </div>
</template>

<script>
import searchHistory from '@/pages/search/search-history'
export default {
  components: {
    searchHistory
  },
  data () {
    return {
      histories: [],
      searchText: ''
    }
  },
  mounted () {
    this.searchText = ''
    this.histories = wx.getStorageSync('searchhistory')
  },
  methods: {
    change (event) {
      this.searchText = event.mp.detail
    },
    removeHistory () {
      wx.removeStorageSync('searchhistory')
      this.histories = []
    },
    search () {
      let histories = wx.getStorageSync('searchhistory')
      if (!histories) histories = []
      histories.unshift(this.searchText)
      wx.setStorageSync('searchhistory', histories)
    }
  }
}
</script>

