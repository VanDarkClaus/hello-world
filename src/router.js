import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import header from '@/components/header.vue'
// import footer from '@/components/footer.vue'
// import Shop from '@/views/Shop.vue'
// import ShopCart from '@/views/ShopCart.vue'
// import My from '@/views/My.vue'
// import shopCategory from '@/components/shopCategory.vue'

const Home = () => import('./views/Home.vue')
const header = () => import('@/components/header.vue')
const footer = () => import('@/components/footer.vue')
const Shop = () => import('@/views/Shop.vue')
const ShopCart = () => import('@/views/ShopCart.vue')
const My = () => import('@/views/My.vue')
const shopCategory = () => import('@/components/shopCategory.vue')
const Login = () => import('@/views/Login.vue')

Vue.use(Router)



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/home', meta: { isTableBar: false}},
    {
      path: '/home',
      name: 'home',
      components: {
        default: Home,
        header: header,
        footer: footer,
      },
      meta: {
        isTableBar: true,
        title: '首页',
        font: '&#xe7c6;'
      }
    },
    {
      path: '/shop',
      name: 'shop',
      components: {
        default: Shop,
        header: header,
        footer: footer,
      },
      meta: {
        isTableBar: true,
        title: '商场',
        font: '&#xe7a9;'
      },
      children: [{
        path: ':cid',
        component: shopCategory,
        meta: {
          title: '商场'
        }
      }]
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      components: {
        default: ShopCart,
        header: header,
        footer: footer
      },
      meta: {
        isTableBar: true,
        title: '购物车',
        font: '&#xe864;',
        isAuthLogin: true
      }
    },
    {
      path: '/my',
      name: 'my',
      components: {
        default: My,
        header: header,
        footer: footer
      },
      meta: {
        isTableBar: true,
        title: '我的',
        font: '&#xe7ae;',
        isAuthLogin: true
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: Login,
        header: header
      },
      meta: {
        isTableBar: false,
        title: '登录'
      }
    }
  ]
})
