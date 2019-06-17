import Fly from 'flyio/dist/npm/wx'

const fly = new Fly()

fly.config.baseURL = 'http://192.168.0.106:3000/api/v1'

fly.interceptors.request.use((request) => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  console.log(request)
})

fly.interceptors.response.use((response) => {
  wx.hideLoading()
  return response.data
}, (error) => {
  console.log('error:', error)
  wx.hideLoading()
})

export default fly
