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
        <!--步骤条-->
        <el-steps :active="step" align-center>
          <el-step title="验证手机号" />
          <el-step title="填写账户信息" />
          <el-step title="注册成功" />
        </el-steps>
        <div style="height: 30px;"></div>
        <!--验证手机号-->
        <div v-if="box1">
          <!--手机号-->
          <div class="phoneBox clearfix">
            <el-select v-model="phoneCode" class="fl">
              <el-option v-for="item in country" :key="item.value" :value="item.value" :label="item.label">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
              </el-option>
            </el-select>
            <el-input v-model="phoneNum" class="fl phoneNum" />
          </div>
          <!--验证码-->
          <div class="phoneBox clearfix">
            <div class="phoneBox-left clearfix fl">
              <label class="fl">手机验证码</label>
              <el-input class="fl" v-model="phoneCard" placeholder="输入验证码"/>
            </div>
            <el-button class="phoneBox-right fl" @click="sendMessage" :disabled="disabled" type="primary">{{btnText}}</el-button>
          </div>
          <p class="audio-tip">收不到短信验证码？点击<a href="javascript:;">获取语音验证码</a></p>
          <el-button type="primary" class="nextBtn" @click="nextBtn(1)">下一步</el-button>
        </div>
        <div v-if="box2">
          <div class="email-Box">
            <div class="email-Box-text clearfix">
              <label>用&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;名</label>
              <el-input v-model="formInline.userName" @blur="focus('userName')" @focus="focus('userName')" placeholder="您的账户名和登录名" />
            </div>
            <div class="input-tips">
              <span v-if="userName">支持中文、英文、数字、'-'、'_'的组合，4-20个字符</span>
            </div>
          </div>
          <div class="email-Box">
            <div class="email-Box-text clearfix">
              <label>设&nbsp;置&nbsp;密&nbsp;码</label>
              <el-input v-model="formInline.pwdOld" @blur="focus('pwdOld')" @focus="focus('pwdOld')" placeholder="建议使用两种或两种以上字符组合" />
            </div>
            <div class="input-tips">
              <span v-if="pwdOld">建议使用字母、数字、符号及两种以上组合，6-20个字符</span>
            </div>
          </div>
          <div class="email-Box">
            <div class="email-Box-text clearfix">
              <label>确&nbsp;认&nbsp;密&nbsp;码</label>
              <el-input v-model="formInline.pwdNew" @blur="focus('pwdNew')" @focus="focus('pwdNew')" placeholder="请再次输入密码" />
            </div>
            <div class="input-tips">
              <span v-if="pwdNew">请再次输入密码</span>
            </div>
          </div>
          <div class="email-Box">
            <div class="email-Box-text clearfix">
              <label>邮&nbsp;箱&nbsp;验&nbsp;证</label>
              <el-input v-model="formInline.email" @blur="focus('email')" @focus="focus('email')" placeholder="请输入邮箱" />
            </div>
            <div class="input-tips">
              <span v-if="email">邮箱验证成功后，您可以使用该邮箱登录</span>
            </div>
          </div>
          <div class="email-Box">
            <el-button type="primary" @click="nextBtn(2)">立即注册</el-button>
          </div>
        </div>
        <div v-if="box3" class="tc">
          <div class="successBox middle" v-if="register">
            <i class="el-icon-success"></i>
            <span>恭喜您，注册成功</span>
          </div>
          <div class="errorBox middle" v-if="!register">
            <i class="el-icon-error"></i>
            <span>很抱歉，注册失败</span>
          </div>
          <el-button type="primary" @click="nextBtn(3)">返回登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Private from '../../components/private';
  export default {
    name: "registered",
    components:{Private},
    props: {
      interval:{
        type:Number,
        default:60
      }
    },
    data(){
      return {
        step:1,
        box1:true,
        box2:false,
        box3:false,
        phoneCode:'0086',
        phoneCard:'',
        phoneNum:'',
        country:[
          {value:'0086',label:'中国'},
          {value:'0001',label:'美国'},
        ],
        disabled:false,
        timer:null,
        isShowAllTimeText:false,
        counter: this.interval,
        formInline:{
          userName:'',
          pwdOld:'',
          pwdNew:'',
          email:''
        },
        userName:false,
        pwdOld:false,
        pwdNew:false,
        email:false,
        register:true,
      }
    },
    methods:{
      toLogin(){
        this.$router.replace('/login');
      },
      sendMessage(){
        var _t = this;
        _t.disabled = true;
        _t.isShowAllTimeText = true;
        _t.timer = setInterval( () => {
          _t.counter--;
        },1000);
      },
      nextBtn(item){
        if (item == 1) {
          this.step = 2;
          this.box1 = false;
          this.box2 = true;
        } else if (item == 2) {
          this.step = 3;
          this.box2 = false;
          this.box3 = true;
        } else {
          this.toLogin();
        }
      },
      focus(item) {
        if (item == 'userName') {
          this.userName = !this.userName;
        } else if (item == 'pwdOld'){
          this.pwdOld = !this.pwdOld;
        } else if (item == 'pwdNew') {
          this.pwdNew = !this.pwdNew;
        } else if (item == 'email') {
          this.email = !this.email;
        }
      }
    },
    computed: {
      btnText(){
        if(!this.disabled){
          return this.isShowAllTimeText ? '重新获取':'获取验证码'
        }
        return this.counter + '秒后重新获取'
      }
    },
    watch: {
      counter(val) {
        if (val == 0) {
          clearInterval(this.timer);
          this.disabled = false;
          this.counter = this.interval;
        }
      }
    },
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
    color: #f67a00;
  }

  .app-register-content-text {
    margin: 50px auto 0;
    width: 420px;
  }

  .phoneBox {
    margin-top: 50px;
    display: flex;
  }

  .audio-tip {
    font-size: 12px;
    text-align: right;
    height: 30px;
    line-height: 30px;
  }

  .audio-tip a {
    color: #f67a00;
  }

  .nextBtn {
    width: 100%;
    height: 50px;
    border-radius: 0;
    margin-top: 50px;
  }

  .email-Box {
    margin-top: 10px;
  }

  .email-Box-text {
    display: flex;
    height: 50px;
    line-height: 50px;
    border: 1px solid #ddd;
  }

  .email-Box-text label {
    width: 107px;
    padding-left: 20px;
    font-size: 14px;
  }

  .input-tips {
    color: #c5c5c5;
    font-size: 12px;
    height: 27px;
    line-height: 27px;
    padding-top: 5px;
    padding-left: 10px;
  }

  .successBox,
  .errorBox{
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .successBox i {
    font-size: 50px;
    color: #3b4;
    vertical-align: middle;
  }

  .errorBox i {
    font-size: 50px;
    color: #c81623;
    vertical-align: middle;
  }

  .successBox span,
  .errorBox span {
    font-size: 24px;
    color: #f67a00;
    height: 50px;
    line-height: 50px;
    margin-left: 20px;
    display: inline-block;
    vertical-align: middle;
  }
</style>
<style>
  .email-Box-text .el-input,
  .phoneBox .phoneNum{
    flex: 1;
  }

  .email-Box .el-button {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-radius: 0;
    padding: 0;
  }

  .email-Box-text .el-input__inner {
    border: none;
  }

  .phoneBox .el-select .el-input .el-input__inner {
    position: relative;
    z-index: 1;
  }

  .phoneBox .el-select .el-input.is-focus .el-input__inner,
  .phoneBox .el-select .el-input:hover .el-input__inner{
    border: 1px solid rgb(102, 102, 102);
    z-index: 10;
  }
  .phoneBox .el-select .el-input__inner {
    border: 1px solid #ddd;
    border-radius:0;
    width: 108px;
    height: 50px;
  }

  .phoneBox .phoneNum .el-input__inner {
    border: 1px solid #ddd;
    border-radius: 0;
    height: 50px;
    margin-left: -1px;
    position: relative;
    z-index: 1;
  }

  .phoneBox .phoneNum:hover .el-input__inner,
  .phoneBox .phoneNum:focus .el-input__inner {
    border: 1px solid rgb(102, 102, 102);
    z-index: 10;
  }

  .phoneBox .phoneBox-left {
    display: flex !important;
    flex: 1;
    border: 1px solid #ddd;
    position: relative;
    z-index: 1;
  }

  .phoneBox .phoneBox-left:hover {
    border: 1px solid rgb(102, 102, 102);
    z-index: 10;
  }

  .phoneBox .phoneBox-left label {
    width: 107px;
    height: 50px;
    line-height: 50px;
    text-align: left;
    padding: 0 0 0 15px;
  }

  .phoneBox .phoneBox-left .el-input {
    flex: 1;
    height: 50px;
    line-height: 50px;
  }

  .phoneBox .phoneBox-left .el-input .el-input__inner {
    border: none;
    border-radius: 0;
  }

  .phoneBox .phoneBox-right {
    height: 52px;
    line-height: 52px;
    padding: 0 15px;
    border-radius: 0;
    border: 1px solid #ddd;
    background-color: #fff;
    color: #333;
    margin-left: -1px;
    position: relative;
    z-index: 1;
  }

  .phoneBox .phoneBox-right:hover {
    border-radius: 0;
    background-color: #fff;
    border: 1px solid rgb(102, 102, 102);
    color: #333;
    z-index: 10;
  }
</style>
