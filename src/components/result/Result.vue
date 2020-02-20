<template>
  <div class="result">
    Ceci est mon result via le store !!
    {{ getIngredient }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Result',
  computed: {
    ...mapGetters([
      'getIngredient',
    ]),
  },
  mounted: {
    function() {
      axios
      .get('https://api.spoonacular.com/recipes/findByIngredients')
      .
      .then(response => (this.info = response))
    },
  },
};
</script>

<style scoped>

</style>
