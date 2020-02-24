import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchIngredient: '',
    receipts: [],
  },
  getters: {
    getSearchIngredient: (state) => state.searchIngredient,
    getReceipts: (state) => state.receipts,
  },
  mutations: {
    updateReceipts(state, receipts) {
      state.receipts = [];
      receipts.map((receipt) => state.receipts.push(receipt));
    },
    setSearchIngredient: (state, value) => { state.searchIngredient = value.ingredient; },
  },
  actions: {
    updateReceipts(context, receipts) {
      context.commit('updateReceipts', receipts);
    },
  },
  modules: {
  },
});
