
<template>
  <div class="result overflow-auto">
    <SummaryBar/>
    <RecipesList/>
  </div>

</template>

<script>

import SummaryBar from './summaryBar/SummaryBar.vue';
import RecipesList from './recipeList/RecipesList.vue';

export default {
  name: 'Result',
  components: {
    SummaryBar,
    RecipesList,
  },
};
</script>
