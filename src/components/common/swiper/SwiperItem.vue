<template>
  <div class="swiper-item">
      <div><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem'
}
</script>

<style>
  .swiper-item {
    width: 100%;
    flex-shrink: 0;
  }
  .swiper-item img {
    width: 100%;
  }
</style>
