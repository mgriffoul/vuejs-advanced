
<template>
  <div class="result overflow-auto">
    <SearchSummaryBar/>
    <RecipesList/>
  </div>

</template>

<script>

import SearchSummaryBar from './searchSummaryBar/SearchSummaryBar.vue';
import RecipesList from './recipeList/RecipesList.vue';

export default {
  name: 'Result',
  components: {
    SearchSummaryBar,
    RecipesList,
  },

};
</script>

<style scoped>

</style>
