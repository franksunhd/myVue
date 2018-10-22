<template>
  <Box>
    <el-form :inline="true" style="margin-bottom: 20px;">
      <el-form-item label="名称">
        <el-input v-model="options.name" />
      </el-form-item>
      <el-form-item label="类别">
        <el-select v-model="options.type" clearable>
          <el-option :label="item.dife" :value="item.id" :key="item.id" v-for="item in types" />
        </el-select>
      </el-form-item>
      <el-form-item label="上传时间">
        <el-date-picker v-model="options.beginTime" :editable="false" type="datetime" placeholder="选择日期时间" />
        <span>~</span>
        <el-date-picker v-model="options.endTime" :editable="false" type="datetime" placeholder="选择日期时间" />
      </el-form-item>
      <el-button type="primary">查询</el-button>
    </el-form>
    <el-table :data="tableData">
      <el-table-column label="序号" type="index" width="50" />
      <el-table-column label="名称" prop="name" width="200" />
      <el-table-column label="类别" prop="type" />
      <el-table-column label="类别" prop="type" />
      <el-table-column label="上传时间" prop="date" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="showDetail(scope.row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="paging">
      <el-pagination @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="currentPage"
                     :page-size="options.num"
                     :page-sizes="[10, 20, 30, 40]"
                     layout="total,sizes,prev, pager, next"
                     :total="total">
      </el-pagination>
    </div>
  </Box>
</template>

<script>
  import Box from '../../components/Box';
  export default {
    name: "ui-share",
    components:{Box},
    data(){
      return {
        tableData:[
          {name:'Adobe PhotoShop',type:'室内/外设计',date:'2018-10-10 10:10:10'},
        ],
        types:[
          {id:1,dife:'室内/外设计'},
          {id:2,dife:'电脑办公'},
          {id:3,dife:'机械设计'},
          {id:4,dife:'影视动画'},
          {id:5,dife:'建筑设计'},
          {id:6,dife:'网页设计'},
          {id:7,dife:'屏幕录像'},
          {id:8,dife:'编程软件'},
          {id:9,dife:'数据库'},
          {id:10,dife:'游戏开发'},
        ],
        currentPage: 1, // 当前页码
        total: 10, // 数据总条数
        options:{
          start:0,
          num:10,
          name:'',
          type:'',
          beginTime:'',
          endTime:''
        }
      }
    },
    methods:{
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        this.options.start = (currentPage - 1) * this.options.num;
        this.getData();
      },
      handleSizeChange(size) {
        this.options.num = size;
        this.options.start = 0;
        this.getData();
      },
      getData(){

      },
      showDetail(data){
        var _t = this;
        _t.$router.push({
          name:'toolSoftwareDetail'
        });
      }
    }
  }
</script>

<style scoped>

</style>
