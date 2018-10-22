<template>
  <div class="app-side">
    <el-menu :default-active="current" class="el-menu-demo" :router="true" background-color="#363f47" :unique-opened="true">
      <el-submenu v-for="(item,index) in sideData" :index="item.id" :key="index">
        <template slot="title"><i class="icon-top"></i><span class="app-side-title">{{item.label}}</span></template>
        <template v-for="(i,index2) in item.children">
          <el-menu-item :index="i.router" :key="index2"><i class="icon-item"></i><span>{{i.label}}</span></el-menu-item>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "side",
    data(){
      return {
        sideData:[
          {id:'1',label:'首页',children:[{id:'1-1',label:'首页',router:'/index/home'}]},
          {id:'2',label:'随笔/追忆',children:[{id:'2-1',label:'生活随笔',router:'/index/LifeNote'},{id:'2-2',label:'技术随笔',router:'/index/techNote'}]},
          {id:'3',label:'技术分享',children:[{id:'3-1',label:'工具/软件',router:'/index/UiShare'},{id:'3-2',label:'技术开发',router:'/index/webShare'}]},
          {id:'4',label:'文章归档',children:[{id:'4-1',label:'生活归档',router:'/index/lifeCount'},{id:'4-2',label:'技术归档',router:'/index/techCount'}]},
          {id:'5',label:'留言/评论',children:[{id:'5-1',label:'评论区',router:'/index/review'},{id:'5-2',label:'留言给我',router:'/index/leaveMessage'}]},
          {id:'6',label:'关于我',children:[{id:'6-1',label:'关于博客',router:'/index/aboutBlog'},{id:'6-2',label:'关于博主',router:'/index/aboutBlogger'}]},
          {id:'7',label:'设置管理',children:[{id:'7-1',label:'个人信息',router:'/index/info'},{id:'7-2',label:'账户管理',router:'/index/account'}]},
        ]
      }
    },
    computed:{
      // 监听url的层级三层以上显示第二层的导航状态
      current(){
        var arr=this.$route.path.split('/');
        if(arr.length>3){
          arr.pop();
          return arr.join("/");
        }else{
          return this.$route.path;
        }
      }
    },
  }
</script>

<style>
  .app-side{
    width:200px;
    background-color:#363F47;
    position:absolute;
    left:0;
    top:53px;
    bottom:0;
    overflow:auto;
    z-index: 2;
  }

  .el-submenu.is-active {
    background:url('../assets/img/sidebac.png') no-repeat !important;
  }

  .el-submenu__title:hover {
    color:#fc9b0e !important;
  }
  .el-submenu .el-menu-item:hover{
    background: url('../assets/img/sidebacer.png') no-repeat center !important;
    color:#fc9b0e !important;
  }
  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
  .el-menu-item.is-active{
    background: url('../assets/img/sidebacer.png') no-repeat center !important;
    color:#fc9b0e !important;
  }

  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active i.icon-item,
  .el-menu-item.is-active i.icon-item{
    background: url('../assets/img/icon2-hover.png')no-repeat center !important;
  }
  .icon-top{
    display:inline-block;
    vertical-align:middle;
    margin-right:10px;
    margin-top:-1px;
    width:17px;
    height:17px;
    border:none;
    background:url('../assets/img/icon-2.png') no-repeat center;
    -ms-transform:none;
    transform:none;
  }
  .icon-item{
    display:inline-block;
    vertical-align:middle;
    margin-top:-1px;
    margin-right:5px;
    width:10px;
    height:10px;
    background:url('../assets/img/icon-3.png') no-repeat center;
  }
  .el-submenu__title:hover .icon-top{
    background-image:url('../assets/img/icon1-hover.png') !important;
  }
  .icon-item:hover,.icon-item:active {
    background: url('../assets/img/icon2-hover.png')no-repeat center;
  }
  .el-submenu .el-menu-item:hover i.icon-item, .el-submenu__title:hover i.icon-item{
    background: url('../assets/img/icon2-hover.png')no-repeat center !important;
  }
  /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
  .app-side::-webkit-scrollbar{
    width: 6px;
    height: 6px;
    background-color: #f5f5f5;
  }
  /*定义滚动条的轨道，内阴影及圆角*/
  .app-side::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    border-radius: 5px;
    background-color: #f5f5f5;
  }
  /*定义滑块，内阴影及圆角*/
  .app-side::-webkit-scrollbar-thumb{
    height: 20px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
</style>
