
<template>
  <div class="result">
    <SearchSummary/>
    <RecipesList/>
  </div>

</template>

<script>

import SearchSummary from './SearchSummary.vue';
import RecipesList from './recipeList/RecipesList.vue';

export default {
  name: 'Result',
  components: {
    SearchSummary,
    RecipesList,
  },

};
</script>

<style scoped>
</style>
