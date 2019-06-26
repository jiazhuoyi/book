import Fly from 'flyio/dist/npm/wx'

const fly = new Fly()

fly.config.baseURL = 'http://192.168.0.106:3000/api/v1'

fly.interceptors.request.use((request) => {
  if (request.url === '/login') return request
  const token = wx.getStorageSync('book_token')
  if (!token) {
    mpvue.navigateTo({ url: '/pages/login/main' })
    return Promise.resolve('no token')
  }
  console.log('request.headers:', request)
  request.headers.Authorization = `Bearer ${token}`
  wx.showLoading({
    title: '加载中',
    mask: true
  })
})

fly.interceptors.response.use((response) => {
  if (response.data.token) {
    wx.setStorageSync('book_token', response.data.token)
  }
  wx.hideLoading()
  return response.data
}, (error) => {
  console.log('error:', error)
  wx.hideLoading()
})

export default fly
