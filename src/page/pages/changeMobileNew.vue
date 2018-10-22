<template>
  <Box>
    <div class="user-info">
      <div class="info-Box tc">
        <img src="../../assets/img/userName.png" alt="">
      </div>
      <div class="info-text-Box">
      <el-form :model="changeMobileNew" status-icon :rules="rules" ref="changeMobileNew" label-width="70px" class="ruleForm2">
        <el-form-item label="新手机" prop="mobile">
          <el-input id="phoneNum" v-model="changeMobileNew.mobile" placeholder="请输入手机号" class="cardNum" :maxlength="11" />
          <div class="el-form-item__error" v-if="phoneNum">请输入手机号</div>
        </el-form-item>
        <el-form-item label="验证码" prop="identifyCode">
          <el-input v-model="changeMobileNew.identifyCode" class="cardNum" placeholder="请输入验证码" :maxlength="4" />
          <el-button @click="sendMessage('changeMobileNew')" :disabled="disabled" type="primary" class="btnTexta">{{btnText}}</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('changeMobileNew')">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
    </div>
  </Box>
</template>

<script>
  import Box from "../../components/Box";
  import {checkCode,checkPhoneNumber} from "../../assets/js/validator";
  export default {
    name: "change-mobile-new",
    components:{Box},
    props: {
      interval:{
        type:Number,
        default:60
      }
    },
    data(){
      return {
        changeMobileNew: {
          mobile: '',
          identifyCode:''
        },
        phoneNum:false,
        disabled:false,
        isShowAllTimeText:false,
        timer:null,
        counter: this.interval,
        rules:{
          mobile:[
            {validator:checkPhoneNumber,trigger:['blur']}
          ],
          identifyCode:[
            {validator:checkCode,trigger:['change','blur']}
          ]
        }
      }
    },
    methods:{
      sendMessage(formName){
        var _t = this;
        _t.disabled = true;
        _t.isShowAllTimeText = true;
        _t.timer = setInterval( () => {
          _t.counter--;
        },1000);
      },
      submitForm(formName) {
        var  _t = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // _t.$router.push({name:'Info'});
          }
        });
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
