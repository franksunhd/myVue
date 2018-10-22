<template>
  <Box>
    <div class="user-info">
      <div class="info-Box tc">
        <img src="../../assets/img/userName.png" alt="">
      </div>
      <div class="info-text-Box">
        <p class="info">
          <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</span>
          <span>{{Info.userName}}</span>
        </p>
        <p class="info">
          <span>绑定手机:</span>
          <span>{{Info.mobile | formatPhone}}</span>
          <a href="javascript:;" @click="upDateMobile">修改</a>
        </p>
        <p class="info">
          <span>登录密码:</span>
          <span>{{Info.info?'已设置':'未设置'}}</span>
          <a href="javascript:;" @click="upDatePassword">修改</a>
        </p>
      </div>
    </div>
  </Box>
</template>

<script>
  import Box from "../../components/Box";
  export default {
    name: "info",
    components:{Box},
    data(){
      return {
        Info:{
          userName: localStorage.getItem('userName') || '',
          mobile: localStorage.getItem('mobile') || '',
          info:localStorage.getItem('info') || false,
        }
      }
    },
    methods:{
      upDateMobile(){
        this.$router.push({name:'changeMobile'});
      },
      upDatePassword(){
        this.$router.push({name:'updatePassword'});
      }
    },
    filters:{
      formatPhone(phone){
        var a = /(\d{3})\d{4}(\d{4})/;
        var str = String(phone);
        return str.replace(a,'$1****$2')
      }
    }
  }
</script>

<style scoped>
  .user-info {
    width: 500px;
    margin: 0 auto;
  }

  .info-text-Box {
    margin-top: 30px;
    margin-left: 115px;
  }

  .info-text-Box p.info {
    height: 35px;
    line-height: 35px;
  }

  .info-text-Box p.info > span:nth-child(1),
  .info-text-Box p.infoBox > span:nth-child(1) {
    font-family: '微软雅黑';
    font-size: 14px;
  }

  .info-text-Box p.info > span:nth-child(2) {
    padding: 0 10px;
  }

  .info-text-Box p.info > a {
    color: #f67a00;
  }

  .info-text-Box p.infoBox {
    margin-top: 10px;
    height: 35px;
    line-height: 35px;
  }
</style>
<style>
  .cardNum {
    position: relative;
    width: 140px !important;
    height: 35px !important;
    line-height: 35px !important;
    margin-left: 8px !important;
  }

  .cardNum .el-input__inner{
    padding: 0 10px;
    height: 35px !important;
    line-height: 35px !important;
  }

  .btnTexta {
    margin-left: 10px;
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
  }

  .ruleForm2{position: relative;margin-top:30px;}
</style>
