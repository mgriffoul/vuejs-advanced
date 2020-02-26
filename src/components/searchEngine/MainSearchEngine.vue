<template>
  <div class="wrapper  m-auto">
        <span class="carrot">
          <img src="../../assets/carrot.svg">
        </span>
        <form class="form-wrapper" @submit.prevent="handleSubmit">
            <input type="text" placeholder="Looking for veggy recipes ?" v-model="searchIngredient">
            <button type="submit" class="search-icon">
                <img src="../../assets/search.svg">
            </button>
        </form>
  </div>
</template>

<script>

import { mapMutations } from 'vuex';
import findByIngredients from '../../api/spoonacularClient';

export default {
  name: 'MainSearchEngine',
  data() {
    return {
      searchIngredient: '',
    };
  },
  computed: {
    ...mapMutations([
      'setSearchIngredient',
    ]),
  },
  methods: {
    async handleSubmit() {
      this.$store.commit('setSearchIngredient', { ingredient: this.searchIngredient });
      const mock = await findByIngredients();
      this.$store.dispatch('updateRecipes', mock);
      if (!this.$router.path || this.$router.path !== '/result') {
        this.$router.push('/result').catch(() => {});
      }
      this.searchIngredient = '';
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper{
  display: flex;

  .carrot {
    margin-right: 1rem;
    width: 3rem;
    height: 3rem;
  }

  .form-wrapper {
    background-color: rgb(255, 255, 255);
    border-radius: 1rem;
    height: 3rem;
    overflow: hidden;
    display: flex;
    padding-left: 0.6rem;
    width: 30rem;
    padding: 0.7rem;

    input {
      height: 100%;
      width: 100%;
      border: none;
      border-right: 1px solid #d5d5d6;
      outline: none;
      text-align: start;
    }

    .search-icon {
      width: 6rem;
      height: 100%;
      margin-left: auto;
      border: none;
      outline: none;
      background-color: white;
      line-height: 1;

      img {
        filter: $orange-primary;
        height: 1.4rem;
        width: 1.4rem;
      }

    }

  }

  }
</style>
