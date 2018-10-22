<template>
  <Box>
    <div class="user-info">
      <div class="info-Box tc">
      <img src="../../assets/img/userName.png" alt="">
    </div>
      <div class="info-text-Box">
        <el-form :model="changeMobile" status-icon :rules="rules" ref="changeMobiles"  class="ruleForm2" >
          <el-form-item label="手机号码："  >
            <span >{{changeMobile.mobile|formatPhone}}</span>
          </el-form-item>
          <el-form-item  prop="identifyCode" label="" class="p_security_code is-required">
            <span style="padding-right:7px;" >验 <span style="padding:0 7px;">证</span>码</span>
            <el-input class="cardNum"  v-model="changeMobile.identifyCode" placeholder="请输入验证码" @focus="focus()" :maxlength="4" />
            <el-button @click="sendMessage" :disabled="disabled" type="primary" class="btnTexta">{{btnText}}</el-button>
          </el-form-item>
          <span v-show="isRightCode" class="isRightCode">验证码不正确</span>
          <span v-show="isRightInvalid" class="isRightInvalid">发送验证码失败</span>
          <el-form-item>
            <el-button type="primary" @click="submitForm('changeMobiles')" class="handleSure">下一步，绑定新手机</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </Box>
</template>

<script>
  import Box from "../../components/Box";
  import {checkCode} from "../../assets/js/validator";
  export default {
    name: "change-mobile",
    components:{Box},
    props: {
      interval:{
        type:Number,
        default:60
      }
    },
    data(){
      return {
        changeMobile: {
          mobile: localStorage.getItem('mobile') || '',
          identifyCode:'',
        },
        disabled:false,
        timer:null,
        isShowAllTimeText:false,
        counter: this.interval,
        isRightCode:false,
        isRightInvalid:false,
        rules:{
          identifyCode:[
            {validator:checkCode,trigger:['change','blur']}
          ]
        }
      }
    },
    methods:{
      sendMessage(){
        var _t = this;
        _t.disabled = true;
        _t.isShowAllTimeText = true;
        _t.timer = setInterval( () => {
          _t.counter--;
        },1000);
      },
      submitForm(formName) {
        var  _t = this;
        _t.$refs[formName].validate((valid) => {
          if (valid) {
            _t.$router.push({name:'changeMobileNew'});
          }
        });
      },
      focus(){
        this.isRightCode = false
        this.isRightInvalid = false
      },
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

  .info-text-Box p.info > span:nth-child(1),
  .info-text-Box p.infoBox > span:nth-child(1) {
    font-family: '微软雅黑';
    font-size: 14px;
  }

  .info-text-Box p.info > span:nth-child(2) {
    padding: 0 10px;
  }

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
</style>
