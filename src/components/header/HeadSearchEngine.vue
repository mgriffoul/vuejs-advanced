<template>
 <b-navbar-nav class="ml-auto">
          <span class="navbar-text mr-1">
            <em>Tell us what you want to cook :</em>
          </span>

          <b-nav-form @submit.prevent="handleSubmit">
            <b-form-input size="sm" class="mr-sm-2"
            placeholder="ex : sprouts" v-model="searchIngredient"></b-form-input>
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
  name: 'HeadSearchEngine',
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

</style>
