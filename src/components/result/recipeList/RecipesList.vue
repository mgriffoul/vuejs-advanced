<template>
  <ul id="recipes-list">
    <li v-for="recipe in getRecipes" :key="recipe.id" class="_recipe">
      <div class="recipe">
        <div class="recipe-image">
          <img v-bind:src=recipe.image alt="Card image cap">
        </div>
        <div class="recipe-body">
          <span class="recipe-title">
            {{ recipe.title }}
          </span>
          <div class="heart mr-auto">
            <img class="heart-icon" src="@/assets/heart-fill.svg">
            <span class="likes">{{ recipe.likes }} likes</span>
          </div>
          <span class="recipe-text">
            <span class="recipe-text-title"> Ingredients : </span>
            <span class="recipe-ingredient"
            v-for="missedIngredients in recipe.missedIngredients" :key="missedIngredients">
              {{ missedIngredients.name}},
            </span>
            <span class="recipe-ingredient"
            v-for="usedIngredient in recipe.usedIngredients" :key="usedIngredient">
              {{ usedIngredient.name}},
            </span>
            <span class="recipe-ingredient"
            v-for="unusedIngredient in recipe.unusedIngredients" :key="unusedIngredient">
              {{ unusedIngredient.name}},
            </span>
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'RecipesList',
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
      .heart {
        display: flex;
        line-height: 1;
        align-items: center;
        margin-top: $primary-space;
        .heart-icon {
          filter: $orange-primary;
          width: 1.2rem;
          height: 1.2rem;
        }
        span {
          margin-left: $left-space-small;
          color: #808080;
        }
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

}
</style>
