<template>
<div id="background">
  <div id="app">
    <Header/>
    <MainContainer/>
  </div>
</div>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue';
import Header from '@/components/header/Header.vue';

export default {
  name: 'App',
  components: {
    MainContainer,
    Header,
  },
};
</script>

<style lang="scss">
#background {
  background-color: $background-app;
  position: fixed;
  height: 100%;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

</style>
