<template>
  <Box>
    <div class="user-info">
      <div class="info-Box tc">
        <img src="../../assets/img/userName.png" alt="">
      </div>
      <div class="info-text-Box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  >
          <div class="changePaswodContainer">
            <el-form-item label="现密码" prop="pwd">
              <el-input v-model="ruleForm.pwd" type="password" class="updatePassword" />
            </el-form-item>
            <el-form-item label="新密码" prop="newpwd">
              <el-input v-model="ruleForm.newpwd"  type="password" auto-complete="off" class="updatePassword" />
            </el-form-item>
            <el-form-item>
              <el-button style="margin-left: 100px;" type="primary" @click="submitForm('ruleForm')" :disabled="isSubmit">确定</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </Box>
</template>

<script>
  import Box from '../../components/Box';
  import {checkPass} from "../../assets/js/validator";
  export default {
    name: "update-password",
    components:{Box},
    data(){
      return {
        isSubmit:false,
        ruleForm: {
          pwd: '',
          newpwd: '',
        },
        rules: {
          pwd: [
            {required:true,message:'请输入现密码',trigger:'change'},
            {min: 6,max:20,validator:checkPass,message:'',trigger:'blur'}
          ],
          newpwd:[
            {required:true,message:'请输入新密码',trigger:'change'},
            {min: 6,max:20,validator:checkPass,message:'',trigger:'blur'}
          ]
        }
      }
    },
    methods:{
      submitForm(formName){
        var _t = this;
        _t.$refs[formName].validateField('pwd',function(res) {
          if (!res) {
            _t.$refs[formName].validateField('newpwd',function(newRes) {
              if (!newRes) {
                _t.$router.push({name:'Info'});
                localStorage.setItem('info',true);
              }
            })
          }
        });
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

  .updatePassword {
    width: 220px;
  }
</style>
<style>
  .updatePassword + .el-form-item__error {
    left: 60px;
  }
</style>
