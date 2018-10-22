<!--登录页面-->
<template>
  <div>
    <div class="LoginBgBox">
      <div class="LoginBg">
        <div class="LoginBox">
          <div class="loginLogoBox">LOGO</div>
          <p class="login-title">孙思研的个人博客</p>
          <el-form :model="FormInfo" autocomplete="off" :rules="rules" ref="ruleForm">
            <el-form-item prop="userName">
              <el-input v-model="FormInfo.userName" placeholder="账户名/手机号" trigger-on-focus="false"/>
            </el-form-item>
            <el-form-item prop="passWord">
              <el-input v-model="FormInfo.passWord" placeholder="密码" type="password"/>
            </el-form-item>
          </el-form>
          <el-button class="loginBtn" @click="loginBtn('ruleForm')">登录</el-button>
          <div class="tr">
            <a class="oriBtn signOut" href="javascript:;" @click="register('yes')">注册</a>
            <a class="oriBtn signOut" href="javascript:;" @click="register('no')">忘记密码?</a>
          </div>
        </div>
      </div>
    </div>
    <div class="loginLogoBottom">
      <p>Copyright©2018 孙思研个人博客 版权所有</p>
    </div>
  </div>
</template>

<script>

  import {isNotNullForUserName,isNotNullForPassWord} from "../assets/js/validator";
  export default {
    name: "login",
    data(){
      return {
        FormInfo:{
          userName:'',
          passWord:''
        },
        rules:{
          userName:[
            {validator: isNotNullForUserName, trigger: ['change','blur'] },
          ],
          passWord:[
            {validator: isNotNullForPassWord, trigger: ['change','blur'] },
          ]
        }
      }
    },
    methods:{
      loginBtn(formName){
        var _t = this;
        this.$refs[formName].validate((valid) => {
          var date = new Date();
          localStorage.setItem('loginTime',date.getTime());
          localStorage.setItem('userName',_t.FormInfo.userName || '');
          _t.$router.replace({ path: '/index' });
        });
      },
      register(item){
        var _t = this;
        if (item == 'yes') {
          _t.$router.replace({ path: '/registered' });
        } else {
          _t.$router.replace({ path: '/forgetPassword' });
        }
      }
    }
  }
</script>

<style scoped>
  .LoginBgBox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
    z-index: 10;
  }

  .LoginBg {
    width: 100%;
    height: 100%;
    background: url('../../static/img/loginBoxBg.jpg') center center/cover;
  }
  .LoginBox {
    width: 350px;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: #fff;
    text-align: center;
    transform: translate(-50%,-50%);
    padding: 33px 25px 5px;
  }
  .loginLogoBox {
    height: 38px;
    font-size: 20px;
  }
  .login-title {
    margin: 10px 0 20px;
    font-size: 16px;
  }
  .loginBtn {
    width: 100%;
    background-color: #fc9b0e;
    border: none;
    color: #fff;
  }
  .loginLogoBottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .signOut {
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
    cursor: pointer;
  }
</style>
