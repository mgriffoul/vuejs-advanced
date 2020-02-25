/*eslint-disable*/
<template>
 <nav>
      <b-navbar-nav >
        <b-nav-item-dropdown text="Recipes" right >
          <b-dropdown-item href="#">French</b-dropdown-item>
          <b-dropdown-item href="#">Asian</b-dropdown-item>
          <b-dropdown-item href="#">Fancy</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped lang="scss">
.navbar{
  color: red;
}
</style>
