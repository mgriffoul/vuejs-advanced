<template>
  <div class="recipe-detail">
    <div class="recipe-detail-body">
      <span class="recipe-detail-title">title: {{ recipe.title }}</span>
      <v-f dishType in recipe.dishTypes>
       {{dishType}}
      </v-f>
      Guest : {{ recipe.servings }}
      Ready in : {{recipe.readyInMinutes}} minutes
      image : <img v-bind:src=recipe.image alt="Card image cap">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getRecipeInformations } from '../../../api/spoonacularClient';

export default {
  name: 'RecipeDetail',
  props: {
    recipeId: Number,
  },
  data() {
    return {
      recipe: {},
    };
  },
  created() {
    this.getRecipeInfos();
  },
  methods: {
    async getRecipeInfos() {
      this.recipe = await getRecipeInformations();
    },
  },
  computed: {
    ...mapGetters([
      'getRecipe',
    ]),
  },
};
</script>

<style scoped lang="scss">
.recipe-detail {
  display: flex;

  .recipe-detail-body {
    margin: 0 $left-space-medium;
    display: flex;
    flex-flow: column;

    .recipe-detail-title {
      border-bottom: 1px solid $shadow-grey;
      font-weight: 700;
      text-align: left;
    }
  }
}
</style>
