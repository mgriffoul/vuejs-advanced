<template>
  <div class="heart mr-auto">
    <img class="heart-icon" src="@/assets/heart-fill.svg">
    <span :class=likes>{{ likes }} likes</span>
  </div>
</template>

<script>

export default {
  name: 'Likes',
  props: {
    likes: Number,
  },
};
</script>

<style scoped lang="scss">
.heart {
  display: flex;
  line-height: 1;
  align-items: center;
  margin-top: $primary-space;
  .heart-icon {
    filter: invert(10%) sepia(97%) saturate(7491%)
    hue-rotate(9deg) brightness(96%) contrast(105%);
    width: 1.2rem;
    height: 1.2rem;
  }
  span {
    margin-left: $left-space-small;
    color: #808080;
  }
}
</style>
