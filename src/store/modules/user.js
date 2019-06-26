const user = {
  state: {
    id: '',
    avatarUrl: '',
    employeeId: '',
    nickName: ''
  },
  mutations: {
    setUser: (state, userInfo) => {
      state.nickName = userInfo.nickName
      state.id = userInfo.id
      state.avatarUrl = userInfo.avatarUrl
    }
  }
}

export default user
