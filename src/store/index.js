import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchIngredient: '',
    recipes: [],
  },
  getters: {
    getSearchIngredient: (state) => state.searchIngredient,
    getRecipes: (state) => state.recipes,
  },
  mutations: {
    updateRecipes(state, recipes) {
      state.recipes = [];
      recipes.map((recipe) => state.recipes.push(recipe));
    },
    setSearchIngredient: (state, value) => { state.searchIngredient = value.ingredient; },
  },
  actions: {
    updateRecipes(context, recipes) {
      context.commit('updateRecipes', recipes);
    },
  },
  modules: {
  },
});
