<template>
  <a class="carrot" href="" @click="goHome()">
    <img src="../../../assets/carrot.svg">
  </a>
</template>

<script>
export default {
  name: 'HomeLogo',
  methods: {
    goHome() {
      if (!this.$router.path) {
        this.$router.push('/').catch(() => {});
      }
    },
  },
};
</script>

<style>
  .carrot {
      margin-right: 1rem;
      width: 3rem;
      height: 3rem;
    }
</style>
