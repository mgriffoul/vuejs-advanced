<template>
  <main id="main-container" class="container main-container h-100">
    <router-view/>
  </main>
</template>

<script>


export default {
  name: 'MainContainer',
};
</script>

<style scoped lang="scss">
.main-container{
  text-align: center;
  overflow: hidden;
  background-color: $background-primary;
  box-shadow: 0px 0px 15px 5px $shadow-grey;
  margin-top: $primary-space;
  padding-left: 3rem;
}
</style>
