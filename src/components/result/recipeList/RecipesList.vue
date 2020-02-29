<template>
  <ul id="recipes-list">
    <li v-for="recipe in getRecipes" :key="recipe.id" class="_recipe">
      <Recipe :recipe="recipe" :recipeId="recipe.id"/>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import Recipe from '../recipe/Recipe.vue';

export default {
  name: 'RecipesList',
  components: {
    Recipe,
  },
  computed: {
    ...mapGetters([
      'getRecipes',
    ]),
  },
};
</script>

<style scoped lang="scss">
#recipes-list{
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  display: flex;
  list-style: none;

    li {
      margin: $primary-space 0 0 $left-space-large;
      flex-basis: 100%;
    }
}
</style>
