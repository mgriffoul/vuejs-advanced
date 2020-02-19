import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    getCount: (state) => state.count,
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    add(state, number) {
      state.count += number;
    },
  },
  actions: {
    addWithTimeout({ commit }) {
      return new Promise(((resolve) => {
        setTimeout(() => {
          commit('add', 5);
          resolve();
        }, 2000);
      }));
    },
  },
  modules: {
  },
});
