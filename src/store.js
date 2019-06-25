import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      cart:[]
  },
  mutations: {
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
      localStorage.setItem('cart',JSON.stringify(state.cart))
    }
  },
  actions: {

  }
})
