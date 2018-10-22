<template>
  <Box>
    <!--顶部标签-->
    <ul class="clearfix webShareBox-menu">
      <li>方向:</li>
      <li>
        <a href="javascript:;" v-for="(item,index) in tags" @click="tagsIndex(index)">{{item.title}}</a>
      </li>
    </ul>
    <ul class="clearfix webShareBox-menu">
      <li>分类:</li>
      <li>
        <a href="javascript:;" v-for="(item,index) in tags[val]['children']">{{item}}</a>
      </li>
    </ul>
    <ul class="clearfix webShareBox-menu">
      <li>难度:</li>
      <li>
        <a href="javascript:;" v-for="(item,index) in diff">{{item}}</a>
      </li>
    </ul>
  </Box>
</template>

<script>
  import Box from '../../components/Box';
  export default {
    name: "web-share",
    components:{Box},
    data(){
      return {
        tags:[
          {title:'前沿技术',children:['微服务','区块链','以太坊','人工智能','机器学习','深度学习','计算机视觉','数据分析&挖掘']},
          {title:'前端开发',children:['HTML/CSS','Javascript','Vue.js','React.Js','Angular','Node.js','Jquery','BootStrap','Sass/Less','WebApp']},
          {title:'后端开发',children:['Java','PHP','Python','爬虫','C','C++','C#']},
          {title:'移动开发',children:['Android','iOS','React native','WEEX']},
          {title:'算法&数学',children:['算法与数据结构','数学']},
          {title:'云计算&大数据',children:['大数据','云计算']},
          {title:'运维&测试',children:['接口测试','安全测试','性能测试','功能测试']},
          {title:'数据库',children:['MySQL','SQL Server','MongoDB','Oracel']},
          {title:'UI设计',children:['UI','UE','UX']},
          {title:'游戏',children:['游戏建模']},
        ],
        diff:['入门','初级','中级','高级'],
        val:0
      }
    },
    methods:{
      tagsIndex(index){
        this.val = index;
      }
    }
  }
</script>

<style scoped>
  .webShareBox-menu li {
    float: left;
    height: 36px;
    line-height: 36px;
  }

  .webShareBox-menu li:nth-child(1) {
    margin-right: 10px;
    font-weight: bolder;
  }

  .webShareBox-menu li > a {
    padding: 0 10px;
  }

  .webShareBox-menu li > a.active {
    height: 25px;
    line-height: 25px;
    border-radius: 5px;
    display: inline-block;
    background-color: #fc9b0e;
    color: #fff;
  }
</style>
