import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  getters: {
    Cartlength(state) {
      return state.list.length
    },
    allCkeck(state) {
      return state.list.find(item => !item.check)
    }
  },
  mutations: {
    AddCart(state, payload) {
      state.list.find(item => {
        if (item.data.styleId == payload.data.styleId && item.data.sizeId == payload.data.sizeId) {
          item.count += payload.count
        }
      })
    },
    AddToCart(state, payload) {
      payload.check = true
      state.list.push(payload)
    }

  },
  actions: {
    selectAll({
      state
    }) {
      state.list.find(item => {
        if (!item.check) {
          state.list.forEach(item => {
            item.check = true
          })
        } else {
          state.list.forEach(item => {
            item.check = false
          })
        }
      })

    },
    getAddCart({
      commit,
      state
    }, payload) {
      return new Promise((resolve) => {
        let products = state.list.find((item) => {
          return item.data.styleId == payload.data.styleId && item.data.sizeId == payload.data.sizeId
        })
        if (products) {
          commit('AddCart', products)
          resolve('该商品商品+' + payload.count)
        } else {
          commit('AddToCart', payload)
          resolve('成功添加商品')
        }
      })
    },
    getCheck({
      state
    }, payload) {
      state.list.find(item => {
        if (item.data.styleId == payload.data.styleId && item.data.sizeId == payload.data.sizeId) {
          item.check = !item.check
        }
      })

    }
  },
  modules: {}
})