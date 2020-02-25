<template>
<div id="header">
  <Navbar/>
</div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'Header',
  components: {
    Navbar,
  },
};
</script>

<style scoped lang="scss">
#header {
  box-shadow: 0px 5px 5px 5px $shadow-grey;
}
</style>
