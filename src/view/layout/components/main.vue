<template>
  <div>
    <router-view
      :style="`height:${windowHeight}px`"
      :windowHeight="windowHeight"
    ></router-view>
  </div>
</template>

<script>
export default {
  props: {
    windowHeight: Number,
  },
};
</script>

<style>
</style>