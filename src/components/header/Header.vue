<template>
  <header id="header">
    <b-navbar toggleable="md" class="bg-custom">
      <MainSearchEngine v-bind:display-gimmik="true"/>
    </b-navbar>
  </header>
</template>

<script>
import MainSearchEngine from '../searchEngine/MainSearchEngine.vue';

export default {
  name: 'Header',
  components: {
    MainSearchEngine,
  },
};
</script>

<style scoped lang="scss">
#header {
  box-shadow: 0px 5px 5px 5px $shadow-grey;

  .bg-custom {
    background-color: $primary-green;
    height: 7rem;
    padding-right: 2rem;
  }

}
</style>
