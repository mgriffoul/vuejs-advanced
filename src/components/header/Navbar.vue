<template>
 <div>
  <b-navbar toggleable="lg" type="dark" variant="info">

    <b-navbar-brand href="#">
      <img alt="Vue logo" src="../../assets/logo-small.png">
    </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav>
        <b-nav-item-dropdown text="Receipts" right>
          <b-dropdown-item href="#">French</b-dropdown-item>
          <b-dropdown-item href="#">Asian</b-dropdown-item>
          <b-dropdown-item href="#">Fancy</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
          <span class="navbar-text mr-1">
            Tell us what you want to cook :
          </span>

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="ex : sprouts"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Go Cooking</b-button>
          </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <button class="myButon" v-on:click="increment">+</button>
  <button class="myButon" v-on:click="decrement">-</button>
  <button class="myButon" v-on:click="addFive">+5</button>
  <p> is true ? --> {{ getCount }} </p>
</div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';
import { INCREMENT, DECREMENT } from '../../constants/mutations';

export default {
  name: 'Navbar',
  methods: {
    ...mapMutations([
      INCREMENT,
      DECREMENT,
    ]),
    addFive() {
      return this.$store.dispatch('addWithTimeout');
    },
  },
  computed: {
    ...mapGetters([
      'getCount',
    ]),
  },
};
</script>

<style scoped>

</style>
