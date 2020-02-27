<template>
  <section>
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
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Recipe',
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
  ul {
  list-style: none;
}
  li {
    margin-top: $primary-space;
  }

}
</style>
