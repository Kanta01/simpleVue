import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [
      {
        date: '2021-07-25',
        detail: 'เงินเดือน',
        type: 'income',
        amount: 2000
      },
      {
        date: '2021-07-25',
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
    add(state, { payload }) {
      state.data.push(payload)
      if(payload.type === 'income') state.totalIncome += payload.amount
      else state.totalOutcome += payload.amount
    }
  },
  actions: {
    addMoney({ commit }, payload) {
      commit("add", { payload })
    }
  },
  modules: {
  }
})
