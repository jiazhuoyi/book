import Vue from 'vue'
import App from './App'
import fly from './utils/request'
import store from './store/index'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$fly = fly
Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()
