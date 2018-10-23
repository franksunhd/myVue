<template>
  <p>生活随笔详情 {{lifeNoteId}}</p>
</template>

<script>
  export default {
    name: "life-note-detail",
    data(){
      return {
        lifeNoteId: localStorage.getItem('lifeNoteId') || '',

      }
    },
    beforeDestroy(){
      localStorage.removeItem('lifeNoteId');
    }
  }
</script>

<style scoped>

</style>
