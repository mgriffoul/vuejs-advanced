<template>
  <b-navbar-nav class="ml-auto search-engine">
    <b-nav-form @submit.prevent="handleSubmit">
      <b-form-input size="sm" class="mr-sm-2"
        placeholder="Ingredient" v-model="searchIngredient"></b-form-input>
        <button type="submit" class="search-icon">
                <img src="@/assets/search.svg">
            </button>
    </b-nav-form>
  </b-navbar-nav>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';
import findByIngredients from '../../api/spoonacularClient';

export default {
  name: 'ResultSearchEngine',
  data() {
    return {
      searchIngredient: '',
    };
  },
  computed: {
    ...mapGetters([
      'getSearchIngredient',
    ]),
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
  .search-engine{
      display: flex;
      flex-direction: row;
      margin-right: $left-space-medium;

      span {
        color: $background-app;
      }

      .search-icon {
      height: 100%;
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
</style>
