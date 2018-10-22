<template>
  <div class="hotTags">
    <h3 class="home-body-title">{{title}}</h3>
    <div class="tagsBox">
      <template v-for="item in data">
        <a :href="item.url" target="_blank" >{{item.label}}</a>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hot-tags",
    props:{
      title:{type:String},
      data:{type:Array}
    }
  }
</script>

<style scoped>
  .hotTags .home-body-title {font-size: 16px;font-weight: bolder;height: 36px;line-height: 36px;border-bottom: 4px solid #fc9b0e;}
  .hotTags .tagsBox {margin-top: 30px;}
  .hotTags .tagsBox a {text-transform: uppercase;display: inline-block;vertical-align: top;font-size: 13px;line-height: 20px;padding: 4px 15px;margin: 0 8px 8px 0;border: 1px solid #66666c;border-radius: 2px;color: #333;background-color: rgba(255,255,255,.97);}
  .hotTags .tagsBox a:hover {background-color: #fc9b0e;color: #fff;border: 1px solid #fc9b0e;}
</style>
