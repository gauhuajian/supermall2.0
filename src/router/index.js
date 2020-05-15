import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home/Home.vue'
const category = () => import('@/views/category/Category.vue')
const cart = () => import('@/views/cart/Cart.vue')
const my = () => import('@/views/my/My.vue')
const detail = () => import('@/views/detail/Detail.vue')
Vue.use(VueRouter)

const routes = [

  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
    meta: '首页'
  },
  {
    path: '/cart',
    component: cart,
    meta: '购物车'
  },
  {
    path: '/my',
    component: my,
    meta: '我的'

  },
  {
    path: '/category',
    component: category,
    meta: '分类'
  },
  {
    path: '/detail/:id',
    name: 'detali',
    component: detail,
    meta: '详情'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta
  next()
})

export default router