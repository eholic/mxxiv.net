<template>
  <div>
    <p class="title">{{ title }}</p>
    <p class="subtitle">{{ subtitle }}</p>
    <figure
      class="image has-image-centered"
      :class="ratio"
    >
      <img :src="img">
    </figure>
  </div>
</template>

<script>
export default {
  name: 'TileChild',
  props: ['title', 'subtitle', 'img', 'ratio'],
};
</script>

<style scoped>
p.title {
  font-size: 1.8rem;
}
p.subtitle {
  font-size: 1.1rem;
}
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>
