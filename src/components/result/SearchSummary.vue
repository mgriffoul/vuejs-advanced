<template>
  <div id="summary">
    <span>
       <h2>' {{ getSearchIngredient }} '</h2>: 100 résultats
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SearchSummary',
  computed: {
    ...mapGetters([
      'getSearchIngredient',
    ]),
  },
};
</script>

<style scoped lang="scss">
  #summary{
    text-align: left;
    margin-top: $title-primary-space;

    span {
      color: $primary-green
    }

    h2 {
      display: inline;
    }
  }
</style>
