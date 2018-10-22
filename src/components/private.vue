<template>
  <div class="private-main" v-if="showMask">
    <div class="private-box">
      <div class="private-box-title">博客用户注册协议和隐私政策</div>
      <i class="el-icon-close closeMask" @click="close"></i>
      <div class="private-text">
        <div class="private-text-content">
          <p class="bolder">
            在您注册成为博客用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署
            以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，
            因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：
          </p>
          <p class="bolder col-red">《用户注册协议》</p>
          <div class="clearfix">
            <div class="bolder fl" style="width: 50%;">
              <p>1、本站服务条款的确认和接纳</p>
              <p>2、本站服务</p>
              <p>3、用户信息</p>
              <p>4、用户依法言行义务</p>
              <p>5、商品信息</p>
              <p>6、订单</p>
            </div>
            <div class="bolder fl" style="width: 50%;">
              <p>7、配送</p>
              <p>8、所有权及知识产权条款</p>
              <p>9、责任限制及不承诺担保</p>
              <p>10、协议更新及用户关注义务</p>
              <p>11、法律管辖和适用政策</p>
            </div>
          </div>
          <br>
          <p class="bolder col-red">隐私政策</p>
          <p class="bolder">
            在您注册成为博客用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署
            以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，
            因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：
          </p>
          <p class="bolder">
            本隐私政策明确了我们的产品与或服务所收集、使用及共享个人信息的类型方式和用途；
            以增强告知或即时提示的方式在收集、使用及共享个人信息时给予用户授权选择权，
            并在产品设置中允许用户即时撤销授权。明确了用户查询、更正和删除其个人信息的方式。
            增加了用户账户的锁定,具体提纲如下：
          </p>
          <div class="clearfix">
            <div class="bolder fl" style="width: 50%;">
              <p>1、如何收集和使用您的个人信息</p>
              <p>2、如何使用Cookie和同类技术</p>
              <p>3、我们如何共享、转让、公开披露您的个人信息</p>
              <p>4、如何保护和保存您的用户信息</p>
            </div>
            <div class="bolder fl" style="width: 50%;">
              <p>5、您如何管理个人信息</p>
              <p>6、未成年人信息的保护</p>
              <p>7、通知和修订</p>
              <p>8、如何联系我们</p>
            </div>
          </div>
          <br>
          <p class="bolder">【审慎阅读】您在申请注册流程中点击同意前，应当认真阅读以下协议。请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</p>
          <p class="bolder">1、与您约定免除或限制责任的条款；</p>
          <p class="bolder">2、与您约定法律适用和管辖的条款；</p>
          <p class="bolder">3、其他以粗体下划线标识的重要条款。</p>
          <p class="bolder">
            【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册您停止注册
            后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、
            阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；
            并表明您也同意可以依据以上的隐私政策内容来处理您的个人信息。
            如您对以上协议内容有任何疑问，您可随时通过隐私政策下方的联系方式联系我们。
          </p>
          <p class="bolder">
            点击同意即表示您已阅读并同意 <span class="col-red">《用户注册协议》</span> 与 <span class="col-red">《隐私政策》</span>
            ，并同意我们将您的订单信息共享给为完成此订单所必须的第三方合作方（详情查看【 <span class="col-red">订单共享与安全</span>】）
          </p>
          <p class="bolder">如您对协议有任何疑问，可向我们的客服咨询。</p>
          <p class="bolder">【特别提示】当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。</p>
          <p class="bolder">阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</p>
        </div>
        <div class="private-btns">
          <a href="javascript:;" @click="close">取消</a>
          <a href="javascript:;" @click="continues">同意并继续</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "private",
    data(){
      return {
        showMask:true,
      }
    },
    methods:{
      close(){
        this.$router.replace({ path: '/login' });
        this.showMask = false;
      },
      continues(){
        this.showMask = false;
      }
    }
  }
</script>

<style scoped>
  .private-main {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0,0,0,0.15);
  }
  .private-box {
    position: fixed;
    top: 20px;
    bottom: 20px;
    width: 947px;
    overflow: hidden;
    z-index: 1000;
    left: 197px;
    right: 0;
    background-color: #fff;
    border: 4px solid rgba(0,0,0,.1);
  }

  .private-box-title {
    height: 31px;
    line-height: 31px;
    color: #333;
    background-color: #f3f3f3;
    padding: 0 10px;
    width: 100%;
    box-sizing: border-box;
  }

  .closeMask {
    position: absolute;
    top: 6px;
    right: 10px;
    font-size: 20px;
    color: #333;
  }

  .private-text {
    overflow: hidden;
    padding: 10px;
  }

  .private-btns {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0;
    padding-bottom: 20px;
    height: 80px;
    background-color: #fff;
  }

  .private-btns a {
    display: inline-block;
    height: 55px;
    line-height: 55px;
    width: 200px;
    font-size: 16px;
    text-align: center;
    background-color: #ff9000;
    color: #fff;
  }

  .private-btns a:nth-child(1) {
    margin-right: 30px;
    background-color: #e3e4e5;
    color: #666;
  }

  .private-text-content {
    height: 420px;
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 24px;
    font-size: 14px;
    padding: 10px;
  }

  .bolder {
    font-weight: bolder;
  }

  .col-red {
    color: red;
  }
</style>
