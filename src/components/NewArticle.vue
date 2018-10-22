<template>
  <div class="newArticle">
    <h3 class="home-body-title">{{title}}</h3>
    <div class="home-body-contentBox" v-for="item in data">
      <div class="home-body-content-img">
        <a :href="item.url" target="_blank">
          <img :src="item.src" alt="标题图片">
        </a>
      </div>
      <ul class="home-body-content-text">
        <li class="home-body-content-title">
          <h3><a :href="item.url" target="_blank">{{item.title}}</a></h3>
        </li>
        <li class="home-body-content-des">
          {{item.content}}
        </li>
        <li class="clearfix home-body-content-click">
          <div class="fl">
            <i class="fa fa-tag"></i>
            <span class="home-margin-right">{{item.tag}}</span>
            <i class="el-icon-date"></i>
            <span>{{item.date}}</span>
          </div>
          <div class="fr tr">
            <span class="home-margin-right"><i class="el-icon-star-off"></i> 评论({{item.pNum}})</span>
            <span class="home-margin-right"><i class="el-icon-view"></i> 浏览({{item.sNum}})</span>
            <span><i class="fa fa-thumbs-o-up"></i> {{item.dNum}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "new-article",
    props:{
      title:{type:String},
      data:{type:Array},
    }
  }
</script>

<style scoped>
  .newArticle .home-body-title {font-size: 16px;font-weight: bolder;height: 36px;line-height: 36px;border-bottom: 4px solid #fc9b0e;}
  .newArticle .home-body-contentBox {padding: 30px 0;position: relative;border-bottom: 1px solid #BFAB86;overflow: hidden;}
  .newArticle .home-body-content-img {float: left;width: 25%;overflow: hidden;cursor: pointer;}
  .newArticle .home-body-content-img a {display: inline-block;width: 180px;height: 130px;}
  .newArticle .home-body-content-img img {width: 100%;height: 100%;}
  .newArticle .home-body-content-text {float: right;line-height: 22px;width: 72%;color: #777;}
  .newArticle .home-body-content-title h3 {font-size: 16px;font-weight: bold;transition: all .5s;margin-bottom: 10px;}
  .newArticle .home-body-content-title a {display: inline-block;color: #474645;}
  .newArticle .home-body-content-des {font-size: 12px;}
  .newArticle .home-body-content-des a {color: #fc9b0e;}
  .newArticle .home-body-content-click {overflow: hidden;clear: both;margin: 10px 0;display: inline-block;color: #999;width: 100%;}
  .newArticle .home-margin-right {margin-right: 5px;}
</style>
