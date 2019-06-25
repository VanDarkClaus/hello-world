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

import * as $http from '@/requests'

Vue.prototype.$http = $http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
