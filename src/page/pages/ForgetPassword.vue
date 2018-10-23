<template>
  <div class="homeMain">
    <el-form label-width="100px" :rules="rules" ref="ForgetPassword" :model="options">
      <el-form-item label="手机号码" class="star" prop="mobile">
        <el-input v-model="options.mobile" style="width: 230px;" />
      </el-form-item>
      <el-form-item label="图形验证码" class="star" prop="code">
        <div class="middle">
          <el-input v-model="options.code" :maxlength="4" style="width: 150px;vertical-align: middle;" />
          <canvas id="canvas-password" width="120" height="35" style="vertical-align: middle;margin-left: 10px;"></canvas>
          <a href="javascript:;" @click="canvas" style="vertical-align: middle;margin-left: 10px;color: #f67a00;">看不清楚？换一张</a>
        </div>
      </el-form-item>
      <el-form-item label="短信验证码" class="star" prop="MessageCode">
        <el-input v-model="options.MessageCode" :maxlength="4" style="width: 150px;" />
        <el-button @click="sendMessage" :disabled="disabled" type="primary" class="btnTexta">{{btnText}}</el-button>
      </el-form-item>
      <el-form-item label="新密码" class="star" prop="newPwd">
        <el-input v-model="options.newPwd" style="width: 230px;" />
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="setup('ForgetPassword')">确认</el-button>
        <el-button type="primary" class="reset" @click="goBack">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import md5 from 'js-md5';
  import {checkPass,checkPhoneNumber,checkCodeMessage,checkCode} from "../../assets/js/validator";
  export default {
    name: "forget-password",
    props: {
      interval:{
        type:Number,
        default:60
      }
    },
    data(){
      return {
        options:{
          mobile:'',
          code:'',
          MessageCode:'',
          newPwd:''
        },
        disabled:false,
        timer:null,
        isShowAllTimeText:false,
        counter: this.interval,
        rules:{
          mobile:[
            {validator:checkPhoneNumber,trigger:['blur']}
          ],
          code:[
            {validator:checkCodeMessage,trigger:['change','blur']}
          ],
          MessageCode:[
            {validator:checkCode,trigger:['change','blur']}
          ],
          newPwd:[
            {validator:checkPass,trigger:['change','blur']}
          ]
        }
      }
    },
    methods:{
      sendMessage(){
        var _t = this;
        // 校验为空
        if (_t.options.mobile == '') {
          return _t.$refs.ForgetPassword.validateField('mobile');
        }
        // 校验手机号格式
        if (!_t.$config.config_reg().test(_t.options.mobile)) {
          return _t.$refs.ForgetPassword.validateField('mobile');
        }
        _t.disabled = true;
        _t.isShowAllTimeText = true;
        _t.timer = setInterval( () => {
          _t.counter--;
        },1000);
      },
      canvas(){
        this.$canvas.canvas_draw(120,35,$("#canvas-password")[0]);
      },
      setup(formName){
        var _t = this;
        var password = md5(_t.options.newPwd).toUpperCase();
        _t.$refs[formName].validateField('mobile',function(res){
          if (!res) {
            _t.$refs[formName].validateField('code',function(res){
              if (!res) {
                _t.$refs[formName].validateField('MessageCode',function(res){
                  if (!res) {
                    _t.$refs[formName].validateField('newPwd',function(res){
                      _t.$router.push({name:'login'});
                    });
                  }
                });
              }
            });
          }
        });
      },
      goBack(){
        var _t = this;
        _t.$router.push({name:'login'});
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
    mounted(){
      this.$canvas.canvas_draw(120,35,$("#canvas-password")[0]);
    }
  }
</script>

<style scoped>
  .homeMain {
    width:520px;
    margin: 40px auto 0;
    background-color:#fff;
  }

  .btnTexta {
    height: 35px;
    line-height: 35px;
    padding: 0 15px;
    margin-left: 10px;
  }
</style>
