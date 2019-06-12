<template>
  <div class="cart">
    <h1>购物车</h1>
    <van-checkbox :value="checked" title="看过"></van-checkbox>
    <!-- <van-checkbox-group :value="value">
      <div class="book" v-for="i in 5" :key="i">
        <van-row>
          <van-col span="6">
            <div class="checkbox-item">
              <van-checkbox :name="i"></van-checkbox>
            </div>
          </van-col>
          <van-col span="18">123</van-col>
        </van-row>
      </div>
    </van-checkbox-group> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      values: [],
      checked: false
    }
  }
}
</script>

<style scoped>
.checkbox-item {
  text-align: center;
}
</style>

