<template>
  <Box>
    <div class="user-info">
      <div class="info-Box tc">
        <img src="../../assets/img/userName.png" alt="">
      </div>
      <div class="info-text-Box" v-if="box1">
        <p class="info">
          <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</span>
          <span>{{userName}}</span>
        </p>
        <p class="info">
          <span>绑定手机:</span>
          <span>{{mobile | formatPhone}}</span>
          <a href="javascript:;" @click="upDateMobile">修改</a>
        </p>
        <p class="info">
          <span>登录密码:</span>
          <span>{{info}}</span>
          <a href="javascript:;">修改</a>
        </p>
      </div>
      <div class="info-text-Box" v-if="box2">
        <el-form :model="changeMobile" status-icon :rules="rules" ref="changeMobiles"  class="ruleForm2" >
          <el-form-item label="手机号码："  >
            <span >{{changeMobile.mobile|formatPhone}}</span>
          </el-form-item>
          <el-form-item  prop="identifyCode" label="" class="p_security_code is-required">
            <span style="padding-right:7px;" >验 <span style="padding:0 7px;">证</span>码</span>
            <el-input class="cardNum"  v-model="changeMobile.identifyCode" placeholder="请输入短信验证码" @focus="focus1()" :maxlength="4" />
            <el-button @click="sendMessage" :disabled="disabled" type="primary" class="btnTexta">{{btnText}}</el-button>
          </el-form-item>
          <span v-show="isRightCode" class="isRightCode">验证码不正确</span>
          <span v-show="isRightInvalid" class="isRightInvalid">发送验证码失败</span>
          <el-form-item>
            <el-button type="primary" @click="submitForm('changeMobiles')" class="handleSure">下一步，绑定新手机</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="info-text-Box" v-if="box3">
        <el-form :model="changeMobileNew" status-icon :rules="rules1" ref="changeMobileNew" label-width="70px" class="ruleForm2">
          <el-form-item label="新手机" prop="mobile">
            <el-input v-model="changeMobileNew.mobile" placeholder="请输入手机号" class="cardNum" :maxlength="11" @focus="focus2()" />
          </el-form-item>
          <span v-show="isChangeMobile" class="isChangeMobile">该手机号已被另一个账户绑定</span>
          <span v-show="Wrongful" class="Wrongful">手机号不合法</span>
          <el-form-item label="验证码" prop="identifyCodes" class="p_security_code">
            <el-input v-model="changeMobileNew.identifyCode" class="cardNum" placeholder="请输入短信验证码" @focus="focus2()" :maxlength="4" />
            <el-button @click="sendMessage1" :disabled="disabled1" type="primary" class="btnTexta">{{btnText1}}</el-button>
          </el-form-item>
          <span v-show="noMessage" class="noMessage">验证码发送失败</span>
          <span v-show="isRightMessage" class="isRightMessage">验证码不正确</span>
          <span v-show="noinvalid" class="noinvalid">短信验证码无效</span>
          <el-form-item>
            <el-button type="primary" @click="submitForm1('changeMobileNew')" class="handleSure">确定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </Box>
</template>

<script>
  import Box from "../../components/Box";
  import {checkidentifyCode,checkPhoneNumber} from "../../assets/js/validator";
  export default {
    name: "info",
    components:{Box},
    props: {
      interval:{
        type:Number,
        default:60
      },
      interval1:{
        type:Number,
        default:60
      }
    },
    data(){
      return {
        userName:'孙思研',
        mobile:'18435202861',
        info:'已设置',
        box1:true,
        box2:false,
        box3:false,
        rules:{
          identifyCode:[
            {validator:checkidentifyCode,trigger:['change','blur']}
          ],
        },
        rules1:{
          mobile:[
            {validator:checkPhoneNumber,trigger:['change','blur']}
          ],
          identifyCodes:[
            {validator:checkidentifyCode,trigger:['change','blur']}
          ]
        },
        changeMobile: {
          mobile: '18435202861',
          identifyCode:'',
          project:1
        },
        changeMobileNew: {
          mobile: '',
          identifyCode:''
        },
        disabled:false,
        disabled1:false,
        isRightCode:false,
        isRightInvalid:false,
        isShowAllTimeText:false,
        isShowAllTimeText1:false,
        isChangeMobile:false,
        Wrongful:false,
        timer:null,
        timer1:null,
        noMessage:false,
        isRightMessage:false,
        noinvalid:false,
        counter: this.interval,
        counter1: this.interval1,
      }
    },
    methods:{
      sendMessage(){
        var _t = this;
        _t.disabled = true;
        _t.isShowAllTimeText = true;
        _t.timer = setInterval( () => {
          _t.counter--;
        },1000)
      },
      sendMessage1(){
        var _t = this;
        _t.disabled1 = true;
        _t.isShowAllTimeText1 = true;
        _t.timer1 = setInterval( () => {
          _t.counter1--;
        },1000)
      },
      focus1(){
        this.isRightCode = false;
        this.isRightInvalid = false;
      },
      focus2(){
        this.isChangeMobile = false;
        this.Wrongful = false;
        this.noMessage = false;
        this.isRightMessage = false;
        this.noinvalid = false;
      },
      submitForm(formName) {
        var _t = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            _t.box1 = false;
            _t.box2 = false;
            _t.box3 = true;
          }
        });
      },
      submitForm1(formName) {
        var _t = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {

          }
        });
      },
      upDateMobile(){
        this.box1 = false;
        this.box2 = true;
        this.box3 = false;
      }
    },
    computed: {
      btnText(){
        if(!this.disabled){
          return this.isShowAllTimeText ? '重新获取':'获取验证码'
        }
        return this.counter + '秒后重新获取'
      },
      btnText1(){
        if(!this.disabled1){
          return this.isShowAllTimeText1 ? '重新获取':'获取验证码'
        }
        return this.counter1 + '秒后重新获取'
      }
    },
    watch: {
      counter(val) {
        if (val == 0) {
          clearInterval(this.timer);
          this.disabled = false;
          this.counter = this.interval;
        }
      },
      counter1(val) {
        if (val == 0) {
          clearInterval(this.timer1);
          this.disabled1 = false;
          this.counter1 = this.interval1;
        }
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
