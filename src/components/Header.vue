<template>
  <div id="header">
    <div class="header-list">
      <span>Home</span>
      <span>Next</span>
      <span>Re-next</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang='scss'>
#header {
  width: 100%;
  text-align: left;
  background-color: #637640;

  .header-list {
    padding: 20px 0;
  }

  span {
    margin-left: 10px;
  }

}
</style>
