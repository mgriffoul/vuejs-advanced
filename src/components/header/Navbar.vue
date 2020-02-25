/*eslint-disable*/
<template>
 <div>
      <b-navbar-nav>
        <b-nav-item-dropdown text="Recipes" right>
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
</div>
</template>

<script>


export default {
  name: 'Navbar',
};
</script>
