<template>
  <b-navbar-nav class="ml-auto search-engine">
    <span class="navbar-text mr-1" v-if="displayGimmik">
      Tell us what you want to cook :
    </span>

    <span class="search-picto" v-if="!displayGimmik"><img src="../../assets/search.svg"></span>

    <b-nav-form @submit.prevent="handleSubmit">
      <b-form-input size="sm" class="mr-sm-2"
        placeholder="Ingredient" v-model="searchIngredient"></b-form-input>
      <b-button size="sm"
        class="my-2 my-sm-0"
        type="submit"
        >Cook !</b-button>
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
  props: {
    displayGimmik: Boolean,
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

      span {
        color: $background-app;
      }

      .search-picto{
        height: 100%;
        filter: $orange-primary;
        display: flex;
        margin-right: 0.5rem;

        img {
          height: 25px;
          width: 25px;
          align-self: center;
        }

      }
  }
</style>
