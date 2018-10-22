<template>
  <div class="hitArticle">
    <h3 class="home-body-title">{{title}}</h3>
    <ul class="articleBox">
      <li v-for="item in data">
        <a :href="item.url">
          <img class="articleBox-img" :src="item.src" alt="标题图片">
          <div class="articleBox-mask">
            <div class="articleBox-date">
              <span><i class="el-icon-view"></i> {{item.sNum}}</span>
              <span><i class="el-icon-date"></i> {{item.date}}</span>
            </div>
            <h4 class="articleBox-title">{{item.title}}</h4>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "hot-article",
    props:{
      data:{type:Array},
      title:{type:String}
    }
  }
</script>

<style scoped>
  .home-body-title {font-size: 16px;font-weight: bolder;height: 36px;line-height: 36px;border-bottom: 4px solid #fc9b0e;}
  .articleBox {margin-top: 30px;}
  .articleBox li {height: 180px;margin-bottom: 20px;position: relative;}
  .articleBox .articleBox-img {width: 100%;height: 100%;}
  .articleBox-mask {position: absolute;bottom: 0;left: 0;right: 0;background: rgba(0,0,0,0.5);padding: 5px 15px;color: #fff;}
  .articleBox-date span {margin-right: 10px;}
  .articleBox-title {white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin: 10px 0;}
</style>
