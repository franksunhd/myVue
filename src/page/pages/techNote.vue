<template>
  <Box>
    <div>
      <p class="tech-title">进度条:</p>
      <el-progress style="line-height: 36px;" :text-inside="true" :stroke-width="18" :percentage="0" />
      <el-progress style="line-height: 36px;" :text-inside="true" :stroke-width="18" :percentage="70" />
      <el-progress style="line-height: 36px;" :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)" />
      <el-progress style="line-height: 36px;" :text-inside="true" :stroke-width="18" :percentage="100" status="success" />
      <el-progress style="line-height: 36px;" :text-inside="true" :stroke-width="18" :percentage="50" status="exception" />

      <el-progress type="circle" :percentage="0" />
      <el-progress type="circle" :percentage="25" />
      <el-progress type="circle" :percentage="80" color="#8e71c7" />
      <el-progress type="circle" :percentage="100" status="success" />
      <el-progress type="circle" :percentage="50" status="exception" />
    </div>
    <div>
      <p class="tech-title">标签页:</p>
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first" />
        <el-tab-pane label="配置管理" name="second" />
        <el-tab-pane label="角色管理" name="third" />
        <el-tab-pane label="定时任务补偿" name="fourth" />
      </el-tabs>
    </div>
    <div>
      <p class="tech-title">面包屑:</p>
      <el-breadcrumb style="height: 36px;line-height: 36px;" separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-breadcrumb style="height: 36px;line-height: 36px;" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <p class="tech-title">颜色选择器:</p>
      <el-color-picker v-model="color1" />
    </div>
    <div>
      <p class="tech-title">滑块:</p>
      <span>基础:</span>
      <el-slider v-model="slider1" />
      <span>自定义初始值:</span>
      <el-slider v-model="slider2" />
      <span>隐藏提示:</span>
      <el-slider v-model="slider2" :show-tooltip="false" />
      <span>离散值:</span>
      <el-slider v-model="slider3" :step="10" />
      <el-slider v-model="slider3" :step="10" show-stops />
      <span>范围选择:</span>
      <el-slider v-model="slider4" range :max="10" show-stops />
      <span>竖向模式:</span>
      <el-slider v-model="slider1" vertical height="200px" />
    </div>
    <div>
      <p class="tech-title">字体图标:</p>
      <i class="el-icon el-icon-loading"></i>
      <i class="el-icon el-icon-delete"></i>
      <i class="el-icon el-icon-picture"></i>
    </div>
    <div>
      <p class="tech-title">button按钮:</p>
      <el-row>
        <el-button icon="el-icon-search" circle />
        <el-button type="primary" icon="el-icon-edit" circle />
        <el-button type="success" icon="el-icon-check" circle />
        <el-button type="info" icon="el-icon-message" circle />
        <el-button type="warning" icon="el-icon-star-off" circle />
        <el-button type="danger" icon="el-icon-delete" circle />
      </el-row>
    </div>
    <div>
      <p class="tech-title">计数器:</p>
      <el-input-number v-model="num1" @change="handleChange" label="描述文字" />
    </div>
    <div>
      <p class="tech-title">container布局容器:</p>
      <el-container>
        <el-header>header</el-header>
        <el-container>
          <el-aside width="20%">aside</el-aside>
          <el-main>main</el-main>
        </el-container>
        <el-footer>footer</el-footer>
      </el-container>
      <el-container>
        <el-header>header</el-header>
        <el-container>
          <el-aside width="20%">aside</el-aside>
          <el-container>
            <el-main>main</el-main>
            <el-footer>footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
    <div>
      <p class="tech-title">layout布局:</p>
      <p class="tech-title-p">基础布局:</p>
      <el-row>
        <el-col :span="24"><div class="dark content">24</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="dark content">12</div></el-col>
        <el-col :span="12"><div class="light content">12</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="dark content">8</div></el-col>
        <el-col :span="8"><div class="light content">8</div></el-col>
        <el-col :span="8"><div class="dark content">8</div></el-col>
      </el-row>
      <p class="tech-title-p">分隔布局: row :gutter  (padding)</p>
      <el-row :gutter="20">
        <el-col :span="12"><div class="dark content">12</div></el-col>
        <el-col :span="12"><div class="light content">12</div></el-col>
      </el-row>
      <p class="tech-title-p">分栏偏移: col :offset (margin)</p>
      <el-row :gutter="20">
        <el-col :span="6" :offset="6"><div class="dark content">6</div></el-col>
        <el-col :span="6" :offset="6"><div class="light content">6</div></el-col>
      </el-row>
      <p class="tech-title-p">对齐方式: display:flex</p>
      <el-row type="flex" :gutter="20" justify="start">
        <el-col :span="6"><div class="dark content">6</div></el-col>
        <el-col :span="6"><div class="light content">6</div></el-col>
      </el-row>
      <el-row type="flex" :gutter="20" justify="center">
        <el-col :span="6"><div class="dark content">6</div></el-col>
        <el-col :span="6"><div class="light content">6</div></el-col>
        <el-col :span="6"><div class="dark content">6</div></el-col>
      </el-row>
      <el-row type="flex" :gutter="20" justify="end">
        <el-col :span="6"><div class="dark content">6</div></el-col>
        <el-col :span="6"><div class="light content">6</div></el-col>
        <el-col :span="6"><div class="dark content">6</div></el-col>
      </el-row>
      <el-row type="flex" :gutter="20" justify="space-between">
        <el-col :span="6"><div class="dark content">6</div></el-col>
        <el-col :span="6"><div class="light content">6</div></el-col>
        <el-col :span="6"><div class="dark content">6</div></el-col>
      </el-row>
    </div>
  </Box>
</template>

<script>
  import Box from '../../components/Box';
  export default {
    name: "tech-note",
    components:{Box},
    data(){
      return {
        num1:0,
        slider1:0,
        slider2:50,
        slider3:10,
        slider4:[3,6],
        color1:'#B42828',
        activeName:'second',
      }
    },
    methods:{
      handleChange(){

      },
    },
    created(){

    }
  }
</script>

<style scoped>
  .tech-title {font-size: 20px;font-weight: bolder;color: #333;margin: 10px 0;}
  .tech-title-p {font-size: 16px;font-weight: bolder;color: #333;margin-bottom: 10px;}
  .dark {background-color: #99a9bf;color: #eee;}
  .light {background-color: #e5e9f2;color: #666;}
  .content {border-radius: 4px;min-height: 36px;line-height: 36px;text-align: center;margin-bottom: 20px;}
  .el-header, .el-footer {background-color: #B3C0D1;color: #333;text-align: center;line-height: 60px;}
  .el-header {margin-top: 20px;}
  .el-aside {background-color: #D3DCE6;color: #333;text-align: center;line-height: 200px;}
  .el-main {background-color: #E9EEF3;color: #333;text-align: center;line-height: 160px;}
  .el-icon {font-size: 50px;}
</style>
