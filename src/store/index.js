import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: []
  },
  mutations: {
    SET_TRANSACTIONS(state, transactions){
      state.transactions = transactions;
    }
  },
  actions: {
    async loadTransactions({commit}){
      let response = await Api().get('/transaction/list');
      commit('SET_TRANSACTIONS', response.data);
    }
  },
  modules: {
  }
})
