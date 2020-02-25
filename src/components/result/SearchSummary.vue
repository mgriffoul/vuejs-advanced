<template>
  <div id="summary">
    <span>
       <h2>' {{ getSearchIngredient }} '</h2>: {{ getResultsNumber }} résultats
    </span>
    <HeadSearchEngine v-bind:display-gimmik="false"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeadSearchEngine from '../header/HeadSearchEngine.vue';

export default {
  name: 'SearchSummary',
  components: {
    HeadSearchEngine,
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

    h2 {
      display: inline;
    }
  }
</style>
