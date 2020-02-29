<template>
  <router-link :to="{
    name: 'Detail',
    params: {recipeId : recipe.id},
    props: {recipeId: recipe.id}}"
    class="recipe">
    <div class="recipe-image">
      <img v-bind:src=recipe.image alt="Card image cap">
    </div>
    <div class="recipe-body">
      <span class="recipe-title">
        {{ recipe.title }}
      </span>
      <RecipeLikes :likes=recipe.likes />
      <RecipeText :recipe=recipe />
    </div>
  </router-link>
</template>

<script>
import RecipeLikes from './RecipeLikes.vue';
import RecipeText from './RecipeText.vue';

export default {
  name: 'Recipe',
  components: {
    RecipeLikes,
    RecipeText,
  },
  props: {
    recipe: Object,
  },
};
</script>

<style scoped lang="scss">
.recipe {
    display: flex;
    .recipe-body {
      margin: 0 $left-space-medium;
      display: flex;
      flex-flow: column;
      .recipe-title {
        border-bottom: 1px solid $shadow-grey;
        font-weight: 700;
        text-align: left;
      }
      .recipe-text {
        margin-top: $primary-space;
        margin-right: auto;
        .recipe-text-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #515151;
        }
        .recipe-ingredient {
          font-size: 0.8rem;
        }
      }
    }
  }
</style>
