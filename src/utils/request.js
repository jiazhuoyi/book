import Fly from 'flyio/dist/npm/wx'

const fly = new Fly()

fly.config.baseURL = 'http://192.168.0.106:3000/api/v1'
// fly.config.baseURL = 'http://2b1c831160.iok.la:17476/api/v1'

fly.interceptors.request.use((request) => {
  if (request.url === '/login') return request
  const token = wx.getStorageSync('book_token')
  if (!token) {
    mpvue.navigateTo({ url: '/pages/login/main' })
    return Promise.resolve('no token')
  }
  request.headers.Authorization = `Bearer ${token}`
  if (!request.noLoading) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
  }
})

fly.interceptors.response.use((response) => {
  if (response.data.token) {
    wx.setStorageSync('book_token', response.data.token)
  }
  wx.hideLoading()
  return response.data
}, (error) => {
  if (error.status === 401) {
    mpvue.navigateTo({ url: '/pages/login/main' })
  } else if (error.status === 403 && error.response.data.code === 4011) {
    mpvue.navigateTo({ url: '/pages/bind-up/main' })
  } else if (error.status === 403 && error.response.data.code === 4012) {
    mpvue.navigateTo({ url: '/pages/checking/main' })
  } else {
    console.log('请求错误:', error)
  }
  wx.hideLoading()
})

export default fly
