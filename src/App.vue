<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'App',
  }
</script>
<style>
  /* route transitions */

  .route-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }

  .route-enter-active {
    transition: all 0.3s ease-out;
  }

  .route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }

  .route-leave-active {
    transition: all .3s ease-in;
  }
</style>
