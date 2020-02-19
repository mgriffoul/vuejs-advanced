import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ingredient: '',
  },
  getters: {
    getIngredient: (state) => state.ingredient,
  },
  mutations: {
    setIngredient(state, ingredient) {
      state.ingredient = ingredient;
    },
  },
  actions: {
    /*  addWithTimeout({ commit }) {
      return new Promise(((resolve) => {
        setTimeout(() => {
          commit('add', 5);
          resolve();
        }, 2000);
      }));
    },  */
  },
  modules: {
  },
});
