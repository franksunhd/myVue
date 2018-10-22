<template>
  <div class="header clearfix">
    <div class="fl clearfix">
      <div class="logoBox fl">
        <img class="logoImg" src="../assets/img/logo.png" alt="logo">
      </div>
      <span class="fl logoTitle"><strong style="color: #333;">欢迎来到</strong> <strong style="color: #fc9b0e;">孙思研的博客系统</strong></span>
      <span class="loginTime" v-if="isFirstLogin">您是首次登录！</span>
      <span class="loginTime" v-else>您上次登录时间为：{{ loginTime}}</span>
    </div>
    <div class="fr clearfix">
      <a class="loginOut fr" href="javascript:;" @click="returnBack">退出系统</a>
      <div class="fr loginImg" @click="toInfo">
        <img src="../assets/img/user.png" alt="">
        <span class="loginOut">{{userName}}</span>
      </div>
      <el-dropdown class="fr" placement="top">
        <span>消息<span class="MessageNum">{{message.length}}</span></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in message" :key="item.id">{{item.label}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-input id="searchBox" @focus="focus" @blur="blur" class="searchBox fr" v-model="searchVal" placeholder="搜索..." />
    </div>
  </div>
</template>
<script>
export default {
  name: 'app-header',
  data () {
    return {
      isFirstLogin:false,
      loginTime:'',
      searchVal:'',
      userName: localStorage.getItem('userName') || '',
      message:[
        {id:1,label:'新增密码修改功能啦...'},
        {id:2,label:'热烈祝贺中国首架水陆两栖飞机实验成功...'},
        {id:3,label:'博客系统正式发布了...'},
        {id:4,label:'博客注册量过万了...'},
        {id:5,label:'注册页面发布了...'},
      ]
    }
  },
  methods:{
    returnBack(){
      var _t = this;
      _t.$confirm('您确定要退出系统吗','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('loginTime');
        _t.$router.replace({ path: '/login' });
      }).catch(() => {
      });
    },
    timeReturn(item){
      var date = new Date(item);
      var Y = date.getFullYear() + '-';
      var M = date.getMonth() + 1;
      M = M < 10 ? '0' + M + '-': M + '-';
      var D = date.getDate();
      D = D < 10 ? '0' + D : D;
      var H = date.getHours();
      H = H < 10 ? '0' + H + ':' : H + ':';
      var S = date.getMinutes();
      S = S < 10 ? '0' + S + ':' : S + ':';
      var C = date.getSeconds();
      C = C < 10 ? '0' + C : C;
      return Y + M + D + ' ' + H + S + C;
    },
    focus(){
      $('#searchBox').animate({width:"150px"},800);
    },
    blur(){
      $('#searchBox').animate({width:"80px"},800);
    },
    toInfo(){
      this.$router.push({name:'Info'})
    }
  },
  created(){
    this.loginTime = this.timeReturn(Number(localStorage.getItem('loginTime')));
  }
}
</script>
<style scoped>
  .logoImg {width: 165px;height: 40px;}
  .logoBox {width: 200px;}
  .header {height: 50px;background-color: #fff;-webkit-box-sizing: border-box;box-sizing: border-box;padding: 0 20px;line-height: 50px;position: absolute;left: 0;top: 0;width: 100%;z-index: 2;min-width: 900px;-webkit-box-shadow: 0 1px 3px #e3e5e6;box-shadow: 0 1px 3px #e3e5e6;white-space: nowrap;}
  .logoTitle {font-size: 14px;margin-right: 30px;}
  .loginOut {margin-left: 5px;margin-right: 8px;}
  .loginOut:hover {color: #f67a00;
  }
  .MessageNum {width: 18px;height: 18px;display: inline-block;text-align: center;line-height: 18px;font-size: 14px;color: #fff;margin-left: 5px;border-radius: 50%;background-color: #fc9b0e;}
  .el-dropdown {cursor: pointer;}
  .loginImg {line-height: 50px;margin: 0 0 0 20px;cursor: pointer;}
</style>
<style>
  .searchBox {width: 80px !important;height: 50px;margin-right: 20px;}
  .searchBox .el-input__inner {border-radius: 20px;height: 30px;line-height: 30px;position: absolute;right: 0;top: 0;margin-top: 10px;}
  @media screen and (max-width: 1060px){.loginTime {display: none;}  }
</style>
