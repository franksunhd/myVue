<template>
  <Box>
    <p>生活随笔</p>
  </Box>
</template>

<script>
  import Box from '../../components/Box';
  export default {
    name: "life-note",
    components:{Box},
    data(){
      return {

      }
    },
    methods:{
      getData(){
        var _t = this;
        _t.$store.commit('setLoading',false);
      }
    },
    created(){
      this.$store.commit('setLoading',true);
      this.getData();
    }
  }
</script>

<style scoped>

</style>
