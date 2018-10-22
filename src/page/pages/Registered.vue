<template>
  <div>
    <!--隐私条框-->
    <!--<Private />-->
    <!--注册页面-->
    <div class="app-register-header">
      <div class="w clearfix">
        <div class="fl app-register-title">
          <a href="javascript:;">Logo</a>
          <span>欢迎注册</span>
        </div>
        <div class="fr app-register-head">
          已有账号？
          <a href="javascript:;" @click="toLogin">请登录 ></a>
        </div>
      </div>
    </div>
    <!---->
    <div class="app-register-content w">
      <div class="app-register-content-text">
        <el-steps :active="step" align-center>
          <el-step title="验证手机号" />
          <el-step title="填写账户信息" />
          <el-step title="注册成功" />
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script>
  import Private from '../../components/private';
  export default {
    name: "registered",
    components:{Private},
    data(){
      return {
        step:1
      }
    },
    methods:{
      toLogin(){
        this.$router.replace('/login');
      }
    }
  }
</script>

<style scoped>
  .app-register-header {
    height: 80px;
    box-shadow: 0 1px 3px #e3e5e6;
  }
  .w {
    width: 1210px;
    margin: 0 auto;
  }

  .app-register-title {
    height: 80px;
    line-height: 80px;
    font-size: 24px;
    color: #333;
  }

  .app-register-head {
    margin-top: 50px;
    color: #999;
    font-size: 16px;
  }

  .app-register-head a {
    color: red;
  }

  .app-register-content-text {
    margin: 80px auto 0;
    width: 500px;
  }
</style>
