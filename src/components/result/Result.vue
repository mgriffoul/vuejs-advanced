
<template>
  <div class="result">
    <p> {{ getSearchIngredient }} </p>
    <ul id="example-1">
      <li v-for="receipt in getReceipts" :key="receipt.id">
        <div class="card" style="width: 18rem;">
          <h5 class="card-title">{{ receipt.title }}</h5>
          <img class="card-img-top" v-bind:src=receipt.image alt="Card image cap">
            <div class="card-body">
            <p class="card-text">
              Some quick example
              </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
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
      'getReceipts',
    ]),
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
