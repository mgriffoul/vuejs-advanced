<template>
<header id="header">
  <b-navbar toggleable="lg" variant="info" class="navbar navbar-dark">
      <b-navbar-brand href="#">
        <img alt="Vue logo" src="../../assets/logo-small.png">
      </b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <Navbar/>
      <HeadSearchEngine v-bind:display-gimmik="false"/>
    </b-collapse>
  </b-navbar>
</header>
</template>

<script>
import Navbar from './Navbar.vue';
import HeadSearchEngine from './HeadSearchEngine.vue';

export default {
  name: 'Header',
  components: {
    Navbar,
    HeadSearchEngine,
  },
};
</script>

<style scoped lang="scss">
#header {
  box-shadow: 0px 5px 5px 5px $shadow-grey;

  ._navbar {
    color: red;
  }

}
</style>
