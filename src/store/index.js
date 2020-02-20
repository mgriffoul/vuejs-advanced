import Vue from 'vue';
import Vuex from 'vuex';
import setIngredient from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ingredient: '',
  },
  getters: {
    getIngredient: (state) => state.ingredient,
  },
  mutations: {
    setIngredient,
  },
  actions: {
  },
  modules: {
  },
});
