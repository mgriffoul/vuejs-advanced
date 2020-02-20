export default addWithTimeout({ commit }) {
      return new Promise(((resolve) => {
        setTimeout(() => {
          commit('add', 5);
          resolve();
        }, 2000);
      }));
    }
    