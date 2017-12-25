<template>
  <div class="carousel-wrap">
    <Carousel>
      <Carousel-item>1</Carousel-item>
      <Carousel-item>2</Carousel-item>
      <Carousel-item>3</Carousel-item>
    </Carousel>
  </div>
</template>

<script>
  import Carousel from '~components/carousel/index.js'
  export default {
    data() {
      return {}
    },
    components: {
      Carousel,
      CarouselItem: Carousel.item,
    },
  }
</script>

<style lang="less" scoped>
.carousel-wrap {
  height: 200px;
}
</style>

