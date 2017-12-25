<template>
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script>
  const prefixCls = 'zan-carousel-item'

  export default {
    name: 'zan-carousel-item',
    data() {
      return {
        prefixCls,
      }
    },
    mounted() {
      console.log('mounted- carousel - item')
      this.$parent.swipeItemCreated(this)
    },
    beforeDestroy() {
    },
  }
</script>
