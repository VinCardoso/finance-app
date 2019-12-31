import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: [],
    accounts: []
  },
  mutations: {
    SET_TRANSACTIONS(state, transactions){
      state.transactions = transactions;
    },
    SET_ACCOUNTS(){
      state.accounts = accounts;
    }
  },
  actions: {
    async loadTransactions({commit}){
      let response = await Api().get('/transaction/list');
      commit('SET_TRANSACTIONS', response.data);
      commit('SET_ACCOUNTS', response.data);
    }
  },
  modules: {}
})
