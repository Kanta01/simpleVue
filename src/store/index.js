import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [
      {
        date: '25/07/64',
        detail: 'เงินเดือน',
        type: 'income',
        amount: 2000
      },
      {
        date: '25/07/64',
        detail: 'ข้าวเช้า',
        type: 'outcome',
        amount: 50
      }
    ],
    totalIncome: 2000,
    totalOutcome: 50
  },
  getters: {
    moneys: (state) => state.data,
    totalIncome: (state) => state.totalIncome,
    totalOutcome: (state) => state.totalOutcome
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
