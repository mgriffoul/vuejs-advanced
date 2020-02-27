<template>
  <div id="summary">
    <div class="summary-block">
      <span class="_search-summary">
        <h3> {{ getSearchIngredient }} </h3>: {{ getResultsNumber }} results
      </span>
      <ResultSearchEngine v-bind:display-gimmik="false"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ResultSearchEngine from '../searchEngine/ResultSearchEngine.vue';

export default {
  name: 'SearchSummary',
  components: {
    ResultSearchEngine,
  },
  computed: {
    ...mapGetters([
      'getSearchIngredient',
      'getResultsNumber',
    ]),
  },
};
</script>

<style scoped lang="scss">
  #summary{

  border-bottom: 1px solid $shadow-grey;

    .summary-block {
      text-align: left;
      display: flex;
      flex-direction: row;
      padding: 1rem;
    }

    span {
      color: $primary-green
    }

    h3 {
      display: inline;
    }

  }
</style>
