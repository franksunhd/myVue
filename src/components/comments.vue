<template>
  <div class="commentsBox" v-if="isShowNow && isShow">
    <h3 class="comments-title">
      <span>发表评论</span>
      <a href="javascript:;" v-if="showBtn" class="comments-title-a" @click="show">取消回复</a>
    </h3>
    <el-form class="clearfix">
      <el-form-item label="昵称" class="star fl" label-width="50">
        <el-input class="comments-input" v-model="formInline.username" />
      </el-form-item>
      <el-form-item label="邮箱" class="star fl" label-width="50">
        <el-input class="comments-input" v-model="formInline.email" />
      </el-form-item>
      <el-form-item label="网址" class="fl" label-width="50">
        <el-input class="comments-input comments-input-not" v-model="formInline.url" />
      </el-form-item>
    </el-form>
    <el-form>
      <el-form-item>
        <el-input type="textarea" :autosize="{ minRows: 4}" placeholder="说点什么吧..." v-model="formInline.textarea" />
      </el-form-item>
    </el-form>
    <div class="clearfix" style="margin-bottom: 22px;">
      <canvas id="comments-canvas" class="fl" width="120" height="40"></canvas>
      <span id="refresh" class="el-icon-refresh fl" @click="draw"></span>
    </div>
    <el-form>
      <el-form-item label="验证码">
        <el-input placeholder="请输入验证码" style="width: 150px;" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="setData">发表评论</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "comments",
    props:{
      isShow:{type:Boolean},
      showBtn:{type:Boolean},
    },
    data(){
      return {
        formInline:{
          username:'',
          email:'',
          url:'',
          textarea:''
        },
        isShowNow:true,
      }
    },
    methods:{
      draw(){
        var _t = this;
        var i = 0;
        var timer = setInterval(function() {
          i += 10;
          if(i >= 180) {
            i = 0;
            _t.$canvas.canvas_draw(120,40,$("#comments-canvas")[0]);
            clearInterval(timer);
          }
          $("#refresh")[0].style.transform = "rotate(" + i + "deg)";
        }, 20);
      },
      show(){
        this.isShowNow = !this.isShowNow;
      },
      setData(){
        this.$emit('shou',this.formInline);
      }
    },
    mounted(){
      this.$canvas.canvas_draw(120,40,$("#comments-canvas")[0]);
    }
  }
</script>

<style scoped>
  .commentsBox {
    width: 800px;
    border-radius: 4px;
    border: 1px solid #ebedf1;
    padding: 30px 25px;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }
  .comments-input {
    width: 236px;
    display: block;
    margin-right: 20px;
  }

  .comments-input-not {
    margin-right: 0;
  }

  .comments-title {
    font-size: 25px;
    color: #282828;
    font-weight: 400;
    margin: 0 0 26px;
    text-transform: uppercase;
  }
  #refresh {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: 40px;
    text-align: center;
    font-size: 20px;
  }

  .comments-title-a {
    font-size: 14px;
    margin-left: 10px;
    color: #273746;
  }

  .comments-title-a:hover {
    color: #fc9b0e;
  }
</style>
