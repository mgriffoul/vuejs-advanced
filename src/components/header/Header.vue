<template>
<header id="header">
  <b-navbar toggleable="lg" class="bg-custom">
      <b-navbar-brand href="#">
        <img alt="Vue logo" src="../../assets/logo-small.png">
      </b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <Navbar/>
      <HeadSearchEngine v-bind:display-gimmik="true"/>
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

  .bg-custom {
    background-color: $primary-green;
  }

}
</style>
