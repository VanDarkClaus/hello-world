import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
//引入elm全部组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//引入backtop组件
import { backTop } from './components/backTop/backTop.js'
Vue.use(backTop)
//把请求方法写在原型上
import * as $http from '@/requests'
Vue.prototype.$http = $http

//全局混入
Vue.mixin({
  filters: {
    toFixed2 (value) {
      return value.toFixed(2)
    },
    more100 (value) {
      if(value>99){
        return '99+'
      }else{
        return value
      }
    }
  }
}) 

//全局导航守卫
router.beforeEach((to, from, next) => {
  store.commit('toggleTitle', to.meta.title)
  if(to.meta.isAuthLogin) {
    if(store.getters.hasLogin) {
      next()
    }else{
      next({
        name: 'login',
        params: {
          to
        }
      })
    }
  }else{
    next()
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
