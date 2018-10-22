<template>
  <Box>
    <el-row>
      <el-col :span="16" class="home-body-left">
        <new-article :data="articleData" title="最新文章"></new-article>
      </el-col>
      <el-col :span="8" class="home-body-right">
        <!--关注我-->
        <div class="followBox">
          <p class="followBox-title">
            <img src="../../assets/img/left.png" alt="">
            <span>关注我</span>
            <img src="../../assets/img/right.png" alt="">
          </p>
          <div class="followBox-div">
            <a href="javascript:;" target="_blank"><i class="fa fa-qq"></i></a>
            <a href="javascript:;" target="_blank"><i class="fa fa-weixin"></i></a>
            <a href="javascript:;" target="_blank"><i class="fa fa-weibo"></i></a>
            <a href="javascript:;" target="_blank"><i class="fa fa-github"></i></a>
          </div>
        </div>
        <!--热门文章-->
        <hot-article :data="articleData" title="热门文章"/>
        <!--热门标签-->
        <hot-tags :data="tags" title="热门标签"/>
        <!--友情链接-->
        <hot-tags :data="linkData" title="友情链接"/>
      </el-col>
    </el-row>
  </Box>
</template>

<script>
  import Box from '../../components/Box';
  import newArticle from '../../components/NewArticle';
  import hotArticle from '../../components/HotArticle';
  import hotTags from '../../components/HotTags';
  export default {
    name: "home",
    components:{Box,newArticle,hotArticle,hotTags},
    data(){
      return {
        articleData:[
          {
            url:'javascript:;',src:'../../../static/img/img1.jpeg',title:'时间都去哪里了',
            content:'时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了',
            tag:'追忆',date:'2018-09-20 10:10:10',pNum:1,sNum:1,dNum:1
          },
          {
            url:'javascript:;',src:'../../../static/img/img1.jpeg',title:'时间都去哪里了',
            content:'时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了',
            tag:'追忆',date:'2018-09-20 10:10:10',pNum:2,sNum:2,dNum:2
          },
          {
            url:'javascript:;',src:'../../../static/img/img1.jpeg',title:'时间都去哪里了',
            content:'时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了' +
            '时间都去哪里了时间都去哪里了时间都去哪里了',
            tag:'追忆',date:'2018-09-20 10:10:10',pNum:3,sNum:3,dNum:3
          }
        ],
        tags:[
          {url:'javascript:;',label:'HTML'},
          {url:'javascript:;',label:'CSS'},
          {url:'javascript:;',label:'JavaScript'},
          {url:'javascript:;',label:'Python'},
          {url:'javascript:;',label:'Java'},
          {url:'javascript:;',label:'PHP'},
        ],
        linkData:[
          {url:'javascript:;',label:'叶子博客'},
          {url:'javascript:;',label:'林晓博客'},
          {url:'javascript:;',label:'叶子博客'},
          {url:'javascript:;',label:'林小屋博客'},
          {url:'javascript:;',label:'博客园'},
        ]
      }
    },
    methods:{
      TextLength(ele, num) {
        $(ele).each(function() {
          if($(this).text().length >= num) {
            var b = $(this).children().is("p");
            if(b) {
              $(this).children().text($(this).children().text().substring(0, num) + "...");
            } else {
              $(this).text($(this).text().substring(0, num));
              $(this).text($(this).text() + "...");
            }
          }
        });
      }
    },
    mounted() {
      this.TextLength('li.home-body-content-des',150);
    }
  }
</script>

<style scoped>
  .home-body-left {padding-right: 15px;}
  .home-body-right {padding: 0 20px 0 60px;}
  .followBox {text-align: center;margin-bottom: 20px;}
  .followBox-title {font-size: 16px;margin-bottom: 15px;}
  .followBox-div a {width: 40px;height: 40px;text-align: center;line-height: 40px;margin: 0 5px;display: inline-block;color: #fff;font-size: 16px;margin-bottom: 10px;}
  .followBox-div a:nth-child(1) {background-color: #00C5FF;}
  .followBox-div a:nth-child(2) {background-color: #01C271;}
  .followBox-div a:nth-child(3) {background-color: #F52C71;}
  .followBox-div a:nth-child(4) {background-color: #FF6B00;}
</style>
