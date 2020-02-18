<template>
 <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">GreenFood</b-navbar-brand>

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
            Tell us what ingredient you want to cook :
          </span>

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Ingredient"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Go Cooking</b-button>
          </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

</style>
