/* eslint-disable*/
<template>
  <div class="result">
    <p> {{ getSearchIngredient }} </p>
    <p> {{ getReceiptTitle }} </p>
    <img alt="receipt" :src="getReceiptImage">
    <p> {{ getReceiptIngredientCount }} </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Result',
  computed: {
    ...mapGetters([
      'getSearchIngredient',
      'getReceiptTitle',
      'getReceiptImage',
      'getReceiptIngredientCount',
    ]),
  },
};
</script>

<style scoped>

</style>
