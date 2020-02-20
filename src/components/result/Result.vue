/* eslint-disable*/
<template>
  <div class="result">
    Ceci est mon result via le store !!
    {{ getIngredient }}

  <div>
    <p> {{ receipt.id }} </p>
    <p> {{ receipt.title }} </p>
    <p> {{ receipt.image }} </p>
    <p> {{ receipt.imageType }} </p>
    <p> {{ receipt.usedIngredientCount }} </p>
  </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import client from '../../api/spoonacularClient';

export default {
  name: 'Result',
  data() {
    return {
      receipt: {
        id: '',
        title: '',
        image: '',
        imageType: '',
        usedIngredientCount: 0,
      },
    };
  },
  computed: {
    ...mapGetters([
      'getIngredient',
    ]),
  },
  async created() {
    const monReturn = await client.call(this.getIngredient);
    this.receipt = { ...monReturn.data[0] };
  },
};
</script>

<style scoped>

</style>
