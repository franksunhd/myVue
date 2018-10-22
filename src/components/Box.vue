<template>
  <div id="appMain" class="app-main" v-loading.body.lock="loading" element-loading-text="拼命加载中">
    <div class="box-wrap">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "box",
    computed:{
      loading(){
        return this.$store.state.loading;
      }
    },
  }
</script>

<style>
  .app-main {
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    overflow-x: hidden;
    position: relative;
    background-color: #fff;
  }

  .box-wrap {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    padding: 30px 20px 20px;
    min-height: 99%;
  }

</style>
