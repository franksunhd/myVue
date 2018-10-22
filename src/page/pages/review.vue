<template>
  <Box>
    <comments :isShow="true" :showBtn="false" @shou="shou($event)" />
  </Box>
</template>

<script>
  import Box from '../../components/Box';
  import comments from '../../components/comments';
  export default {
    name: "review",
    components:{Box,comments},
    data(){
      return {
        data:{},
      }
    },
    methods:{
      shou(info) {
        this.data = info;
      }
    }
  }
</script>

<style scoped>

</style>
