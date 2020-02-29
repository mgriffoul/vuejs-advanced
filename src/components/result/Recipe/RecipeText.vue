<template>
  <span class="recipe-text">
    <span class="recipe-text-title"> Ingredients : </span>
    <span class="recipe-ingredient"
    v-for="missedIngredients in recipe.missedIngredients" :key="missedIngredients.id">
      {{ missedIngredients.name}},
    </span>
    <span class="recipe-ingredient"
    v-for="usedIngredient in recipe.usedIngredients" :key="usedIngredient.id">
      {{ usedIngredient.name}},
    </span>
    <span class="recipe-ingredient"
    v-for="unusedIngredient in recipe.unusedIngredients" :key="unusedIngredient.id">
      {{ unusedIngredient.name}},
    </span>
  </span>
</template>

<script>

export default {
  name: 'RecipeText',
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
