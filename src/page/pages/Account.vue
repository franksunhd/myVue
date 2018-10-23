<template>
  <Box class="AccountBox">
    <div class="Account-form">
      <el-form :model="options" class="demo-ruleForm tl" :inline="true">
        <el-form-item label="姓名">
          <el-input v-model="options.userName" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="权限">
          <el-select v-model="options.jobType" clearable style="width: 150px;">
            <el-option v-for="item in jobType" :label="item.label" :value="item.id" :key="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="options.type" clearable style="width: 150px;">
            <el-option v-for="item in types" :label="item.label" :value="item.id" :key="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item style="display: block;" class="tl">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="handleAddadmin" class="reset">添加操作员</el-button>
        </el-form-item>
      </el-form>

      <div class="Account-table">
        <el-table border :data="tableData">
          <el-table-column prop="name" label="姓名" align="left" header-align="center" />
          <el-table-column prop="jobType" label="权限" align="left" header-align="center" />
          <el-table-column prop="status" label="状态" align="left" header-align="center" />
          <el-table-column label="操作" align="left" header-align="center">
            <template slot-scope="scope">
              <el-button @click="handleManage(scope.$index, scope.row, 'edit')"  type="text" size="small" v-if="scope.row.status=='正常' && scope.row.jobType=='普通管理员'">编辑</el-button>
              <el-button @click="handleManage(scope.$index, scope.row, 'change')" type="text" size="small" v-if="scope.row.status=='正常' && scope.row.jobType=='普通管理员'" class="blueBtn">更换管理员</el-button>
              <el-button @click="handleManage(scope.$index, scope.row, 'edit')" type="text" size="small" v-if="scope.row.jobType=='游客访问' && scope.row.status=='正常'">编辑</el-button>
              <el-button @click="handleManage(scope.$index, scope.row, 'close')" type="text" size="small" v-if="scope.row.jobType=='游客访问' && scope.row.status=='正常'" class="blueBtn">关闭</el-button>
              <el-button @click="handleManage(scope.$index, scope.row, 'restore')" type="text" size="small" v-if="scope.row.jobType=='游客访问' && scope.row.status=='关闭'">恢复至正常</el-button>
              <el-button @click="handleManage(scope.$index, scope.row, 'agree')" type="text" size="small" v-if="scope.row.jobType=='游客访问' && scope.row.status=='申请加入'">同意</el-button>
              <el-button @click="handleManage(scope.$index, scope.row, 'refuse')" type="text" size="small" v-if="scope.row.jobType=='游客访问' && scope.row.status=='申请加入'" class="blueBtn">拒绝</el-button>
              <el-button @click="handleManage(scope.$index, scope.row, 'refused')" type="text" size="small" v-if="scope.row.jobType=='游客访问' && scope.row.status=='已拒绝'" class="blueBtn" />
            </template>
          </el-table-column>
        </el-table>
        <div class="paging">
          <el-pagination
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            :current-page.sync="currentPage"
            :page-size="options.num"
            :page-sizes="[10, 20, 30, 40]"
            layout="total,sizes,prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </Box>
</template>

<script>
  import Box from '../../components/Box';
  export default {
    name: "account",
    components:{Box},
    data(){
      return {
        options:{
          userName:'',
          jobType:'',
          type:'',
          start:0,
          num:10,
        },
        currentPage:1,
        total:10,
        types:[
          {id:1,label:'正常'},
          {id:2,label:'关闭'},
          {id:3,label:'申请加入'},
          {id:4,label:'已拒绝'},
        ],
        jobType:[
          {id:1,label:'普通管理员'},
          {id:2,label:'超级管理员'},
          {id:3,label:'游客访问'},
        ],
        tableData:[
          {name:'孙思研', jobType:'普通管理员', status:'正常'},
          {name:'孙思研', jobType:'游客访问', status:'正常'},
          {name:'孙思研', jobType:'游客访问', status:'关闭'},
          {name:'孙思研', jobType:'游客访问', status:'申请加入'},
          {name:'孙思研', jobType:'游客访问', status:'已拒绝'},
        ],
      }
    },
    methods:{
      // 查询
      onSubmit(){

      },
      // 添加操作员
      handleAddadmin(){

      },
      //表格操作权限
      handleManage(index,data,scope){

      },
      // 分页
      handleCurrentChange(currentPage){
        this.currentPage=currentPage;
        this.options.start= (currentPage-1) *this.options.num;
        this.getData();
      },
      handleSizeChange(size){
        this.options.num=size;
        this.options.start=0;
        this.getData();
      },
      getData(){

      }
    }
  }
</script>

<style scoped>
  .AccountBox {
    text-align: center;
  }
  .Account-form {
    display: inline-block;
  }
</style>
