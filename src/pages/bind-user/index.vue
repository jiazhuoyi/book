<template>
  <div class="bind-user">
    <van-toast id="van-toast" />
    <van-cell-group>
      <van-field
        :value="user.emid"
        id="emid"
        required
        label="员工编号"
        :error="emidError"
        placeholder="请输入员工编号(必填项)"
        @change="change">
      </van-field>
      <van-field
        :value="user.name"
        id="name"
        required
        label="真实姓名"
        :error="nameError"
        placeholder="请输入员工真实姓名(必填项)"
        @change="change">
      </van-field>
    </van-cell-group>
    <div class="commit">
      <van-button 
        round
        type="danger"
        size="large"
        @click="bindUser">
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
      user: {},
      emidError: false,
      nameError: true
    }
  },
  methods: {
    async bindUser () {
      if (!this.user.emid) {
        this.emidError = true
        return
      }
      if (!this.user.name) {
        this.nameError = true
        return
      }
      const result = await this.$fly.post('/user-emid', { emid: this.user.emid, name: this.user.name })
      this.$store.commit('setUser', result.user)
      Toast.success('绑定成功')
    },
    change (event) {
      this.user[event.mp.target.id] = event.mp.detail
    },
    async mounted () {
      const result = await this.$fly.get('/user-info')
      this.$store.commit('setUser', result.user)
      this.user = result.user
    }
  }
}
</script>

<style lang="stylus" scoped>
.commit
  margin-top: $margin
  padding: 0 $padding
  box-sizing: border-box
  width: 100%
</style>


