/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-17 16:52:35
 * @LastEditTime: 2019-08-19 01:41:21
 * @LastEditors: Please set LastEditors
 */
import Fly from 'flyio/dist/npm/wx'

const fly = new Fly()

fly.config.baseURL = 'https://book.jiazhuoyi.cn/api/v1/m'
// fly.config.baseURL = 'http://192.168.0.106:3001/api/v1/m'

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
  wx.hideLoading()
  if (error.status === 401) {
    mpvue.navigateTo({ url: '/pages/login/main' })
  } else if (error.status === 403 && error.response.data.code === 4011) {
    mpvue.navigateTo({ url: '/pages/bind-user/main' })
  } else if (error.status === 403 && error.response.data.code === 4012) {
    mpvue.navigateTo({ url: '/pages/checking/main' })
  } else if (error.status === 403 && error.response.data.code === 4010) {
    mpvue.navigateTo({ url: '/pages/login/main' })
  } else {
    wx.showToast({
      title: '网络发生故障',
      icon: 'none'
    })
  }
})

export default fly
