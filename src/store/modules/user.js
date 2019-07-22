const user = {
  state: {
    id: '',
    avatarUrl: '',
    nickName: '',
    emid: '',
    status: ''
  },
  mutations: {
    setUser: (state, userInfo) => {
      state.nickName = userInfo.nickName
      state.id = userInfo.id
      state.avatarUrl = userInfo.avatarUrl
      state.emid = userInfo.emid
      state.status = userInfo.status
    }
  }
}

export default user
