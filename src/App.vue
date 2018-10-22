<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import $ from 'jquery';
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    min-height: 100%;
  }
</style>
