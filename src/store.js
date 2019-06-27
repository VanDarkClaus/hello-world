import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//vuex的插件
const myPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    localStorage.setItem('cart',JSON.stringify(state.cart))
  })
}

const loginUserInfo = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    localStorage.setItem('userInfo',JSON.stringify(state.userInfo))
  })
}

export default new Vuex.Store({
  state: {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
      headerTitle: 'hw商场'
  },
  mutations: {
    //改变标题
    toggleTitle(state, title = 'hw商场') {
      state.headerTitle = title
    },
    //加入购物车
    addToCart(state, payload) {
      let count = 0
      if(state.cart.some((item, index) => {
        count = index
        return item.id === payload.id
      })){
        //如果存在id计数加1
        state.cart[count].amount++
      }else {
        //如果不存在则插入
        state.cart.push(payload)
      }
    },
    //数量加1
    increment(state, id) {
      state.cart.map(item => {
        if(item.id === id) {
          item.amount++
        }
        return item
      })
    },
    //数量减1
    decrement(state, id) {
      state.cart.map(item => {
        if(item.id === id) {
          item.amount--
        }
        return item
      })
      state.cart = state.cart.filter(item => {
        return item.amount > 0
      })
    },
    //改变选中
    toggleChecked(state, id) {
      state.cart.map(item => {
        if(item.id === id) {
          item.isChecked = !item.isChecked
        }
        return item
      })
    },
    //提交用户登录信息
    userInfoSave(state, userInfo) {
      state.userInfo = userInfo
    },
    //改变标题
    changeTitlte( title = '首页') {
      return title
    }
  },
  getters: {
    //计算总价
    sumPrice: (state) => {
      return  state.cart.reduce((sum, current) => {
        if(current.isChecked === true){
          return sum += current.amount * current.price
        }else {
          return sum
        }
      }, 0)
    },
    //计算数量
    sumNum: (state) => {
      return state.cart.reduce((sum, current) => {
        return sum += current.amount
      },0)
    },
    //是否登录
    hasLogin: (state) => {
      return !!state.userInfo.token
    }
  },
  actions: {
    //登录请求返回用户数据
    requireMsg(ctx) {
      const userInfo = {
        token: 'd4sa56dsa46d',
        headerImg: '4154',
        nickName: '4156456dsad'
      }
      setTimeout(() => {
        ctx.commit('userInfoSave', userInfo)
      },2000)
    }
  },
  plugins: [myPlugin,loginUserInfo]
})
