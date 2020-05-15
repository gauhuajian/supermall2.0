import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//css样式初始化 字体图标 设置rem单位
import './assets/css/normalize.css'
import './assets/css/iconfont.css'
import './assets/js/font'
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//事件总线
Vue.prototype.$bus = new Vue({})
Vue.config.productionTip = false
//toast插件
import toast from './components/common/toast/index'
Vue.use(toast)
// 懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  // loading: 'dist/loading.gif',
  attempt: 1
})
//初始化 点击事件
import FastClick from 'fastclick'

FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')