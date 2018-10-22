<template>
  <div>
    <app-header/>
    <app-side/>
    <div id="BoxName" class="BoxName">
      <router-view />
    </div>
  </div>
</template>

<script>
  import appHeader from '../components/Header';
  import appSide from '../components/Side';
  import appBox from '../components/Box';
  export default {
    name: "index",
    components:{appHeader,appSide,appBox}
  }
</script>

<style>
  .BoxName {
    position: absolute;
    left: 203px;
    top: 53px;
    right: 0;
    bottom: 0;
  }
</style>
