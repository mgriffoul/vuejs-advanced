import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchIngredient: '',
    receipt: {
      id: 0,
      title: '',
      image: '',
      usedIngredientCount: 0,
      missedIngredientCount: 0,
      missedIngredients: [],
      usedIngredients: [
        {
          id: 0,
          amount: 0,
          unit: '',
          unitLong: '',
          unitShort: '',
          aisle: '',
          name: '',
          original: '',
          originalString: '',
          originalName: '',
          metaInformation: [],
          meta: [],
          image: '',
        },
      ],
      unusedIngredients: [],
      likes: 0,
    },
  },
  getters: {
    getSearchIngredient: (state) => state.searchIngredient,
    getReceiptTitle: (state) => state.receipt.title,
    getReceiptImage: (state) => state.receipt.image,
    getReceiptIngredientCount: (state) => state.receipt.usedIngredientCount,
  },
  mutations: {
    updateReceipt(state, receipt) {
      state.receipt = { ...receipt };
    },
    setIngredient(state, searchIngredient) { state.searchIngredient = searchIngredient; },
  },
  actions: {
    updateReceipt(context, receipt) {
      context.commit('updateReceipt', receipt);
    },
  },
  modules: {
  },
});
