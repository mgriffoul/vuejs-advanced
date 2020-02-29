<template>
  <div>
    detail view !!
   ID from path : {{ $route.params.recipeId }},
   ID from props : {{ recipeId }}
  </div>
</template>

<script>
export default {
  name: 'RecipeDetail',
  props: {
    recipeId: String,
  },
};
</script>

<style scoped>

</style>
