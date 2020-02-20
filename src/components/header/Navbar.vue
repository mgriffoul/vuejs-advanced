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
            User
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
          <span class="navbar-text mr-1">
            <em>Tell us what you want to cook :</em>
          </span>

          <b-nav-form @submit.prevent="submit">
            <b-form-input size="sm" class="mr-sm-2"
            placeholder="ex : sprouts" v-model="ingredient"></b-form-input>
            <b-button size="sm"
              class="my-2 my-sm-0"
              type="submit"
              >Cook !</b-button>
          </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
      ingredient: '',
    };
  },
  methods: {
    submit() {
      this.$store.commit('setIngredient', this.ingredient);
      this.ingredient = '';
      this.$router.push('/result');
    },
  },
};
</script>
