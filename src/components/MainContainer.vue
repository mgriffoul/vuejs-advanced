<template>
  <main id="main-container" class="container main-container h-100">
    <keep-alive>
      <router-view/>
    </keep-alive>
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
  background-color: $background-primary;
  box-shadow: 0px 0px 15px 5px $shadow-grey;
  margin-top: $primary-space;
  padding: 0;
}
</style>
