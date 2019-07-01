const user = {
  state: {
    id: '',
    avatarUrl: '',
    nickName: '',
    emid: ''
  },
  mutations: {
    setUser: (state, userInfo) => {
      state.nickName = userInfo.nickName
      state.id = userInfo.id
      state.avatarUrl = userInfo.avatarUrl
      state.emid = userInfo.emid
    }
  }
}

export default user
