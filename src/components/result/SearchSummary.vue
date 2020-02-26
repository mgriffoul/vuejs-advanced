<template>
  <div id="summary">
    <span>
       <h3> {{ getSearchIngredient }} </h3>: {{ getResultsNumber }} results
    </span>
    <ResultSearchEngine v-bind:display-gimmik="false"/>
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
    text-align: left;
    margin-top: $title-primary-space;
    display: flex;
    flex-direction: row;

    span {
      color: $primary-green
    }

    h3 {
      display: inline;
    }
  }
</style>
