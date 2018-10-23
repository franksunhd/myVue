<template>
  <p>技术随笔详情 {{techNoteId}}</p>
</template>

<script>
  export default {
    name: "tech-note-detail",
    data(){
      return {
        techNoteId: localStorage.getItem('techNoteId') || '',

      }
    },
    beforeDestroy(){
      localStorage.removeItem('techNoteId');
    }
  }
</script>

<style scoped>

</style>
