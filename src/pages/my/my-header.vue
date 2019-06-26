<template>
  <div class="my-header">
    <div class="my-header-box">
      <div class="header-container" @click="useScan">
        <div class="header-photo">
           <img class="photo-img" :src="user.avatarUrl">
        </div>
        <div class="header-info">
          <div class="center">
            <span class="name">{{user.nickName}}</span>
            <span class="id">员工编号: T13583</span>
          </div>
        </div>
        <div class="header-more"></div>
      </div>
    </div>
    <!-- <button open-type="getUserInfo" bindgetuserinfo="getUserInfo">123</button> -->
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  async mounted () {
    const result = await this.$fly.get('/user-info')
    this.$store.commit('setUser', result.user)
  },
  methods: {
    useScan () {
      console.log('useScan')
      wx.scanCode({
        success (res) {
          console.log('res:', res)
        }
      })
    }
  }
}
</script>

<style scoped>
.my-header {
  width: 100%;
  height: 250rpx;
  background-color: #EE5E7B;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50rpx;
}
.my-header-box {
  width: 90%;
  height: 80%;
  background-color: #fff;
  border-radius: 10rpx;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-container {
  width: 100%;
  height: 80%;
  display: flex;
}
.header-photo {
  width: 30%;
  text-align: center;
}
.photo-img {
  width: 80%;
  height: 100%;
  border-radius: 50%;
}
.header-info {
  flex: 1;
  display: flex;
  align-items: center;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
.name {
  display: block;
  font-size: 42rpx;
  font-weight: 600;
}
.id {
  display: block;
  font-size: 28rpx;
  color: #9B9B9B;
  margin-top: 10rpx;
}
/* .name {
  display: block;

} */
.header-more {
  width: 10%;
}
</style>

