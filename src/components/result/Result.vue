
<template>
  <div class="result">
    <p> {{ getSearchIngredient }} </p>
    <ul id="example-1">
      <li v-for="recipe in getRecipes" :key="recipe.id">
        <div class="card" style="width: 18rem;">
          <div class="card-header">
            {{ recipe.title }}
          </div>
          <img class="card-img-top" v-bind:src=recipe.image alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
                Some quick example
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Result',
  computed: {
    ...mapGetters([
      'getSearchIngredient',
      'getRecipes',
    ]),
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
