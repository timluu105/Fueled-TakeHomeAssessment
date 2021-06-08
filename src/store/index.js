import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItems: [
      {
        img: require('@/assets/products/item-1.png'),
        title: 'Jet Ski',
        id: '434556256',
        price: 1500,
        quantity: 1,
      },
      {
        img: require('@/assets/products/item-2.png'),
        title: 'Bubble Wrap',
        id: '345245865',
        price: 440,
        quantity: 1,
      },
      {
        img: require('@/assets/products/item-3.png'),
        title: 'Crock-Pot',
        id: '987123654',
        price: 55,
        quantity: 1,
      }
    ]
  },
  mutations: {
    UPDATE_QUANTITY(state, data) {
      state.cartItems.find(item => item.id === data.id).quantity = data.quantity
    },
    REMOVE_ITEM_FROM_CART(state, id) {
      const index =  state.cartItems.findIndex(item => item.id === id)
      state.cartItems.splice(index, 1)
    },
  },
  actions: {
    UPDATE_QUANTITY({ commit }, data) {
      commit('UPDATE_QUANTITY', data)
    },
    REMOVE_ITEM_FROM_CART({ commit }, id) {
      commit('REMOVE_ITEM_FROM_CART', id)
    },
    CHECKOUT(...args) {
      const data = args[1];
      return new Promise((resolve) => {
        resolve('Your order has been placed with total $' + data.pricing.total)
      })
    },
  },
  getters: {
    getCart: state => state.cartItems,
    getCartLength: state => state.cartItems.length
  }
})
