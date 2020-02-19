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
};
</script>

<style scoped>

</style>
