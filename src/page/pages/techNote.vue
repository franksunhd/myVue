<template>
  <Box>
    <el-form :inline="true" v-model="FormData">
      <el-form-item label="名称">
        <el-input v-model="FormData.name" />
      </el-form-item>
      <el-form-item label="类别">
        <el-select v-model="FormData.type" clearable>
          <el-option :label="item.dife" :value="item.id" :key="item.id" v-for="item in types" />
        </el-select>
      </el-form-item>
      <el-form-item label="上传时间">
        <el-date-picker v-model="FormData.beginTime" :editable="false" type="date" placeholder="选择开始日期" />
        <span>~</span>
        <el-date-picker v-model="FormData.endTime" :editable="false" type="date" placeholder="选择结束日期" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData">
      <el-table-column label="序号" type="index" width="50" />
      <el-table-column label="名称" prop="name" width="200" />
      <el-table-column label="类别" prop="type" />
      <el-table-column label="上传时间" prop="date" />
      <el-table-column label="操作" width="150">
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
    name: "tech-note",
    components:{Box},
    data(){
      return {
        options:{
          start:0,
          num:10,
        },
        currentPage: 1, // 当前页码
        total: 10, // 数据总条数
        FormData:{
          name:'',
          type:'',
          beginTime:'',
          endTime:'',
          num:0,

        },
        tableData:[
          {id:2001,name:'container布局容器',type:'基础组件',date:'2018-10-10 10:10:10'},
          {id:2002,name:'Radio单选框',type:'形式',date:'2018-10-10 10:10:10'},
          {id:2003,name:'Table表格',type:'数据',date:'2018-10-10 10:10:10'},
          {id:2004,name:'Alert警告',type:'通知',date:'2018-10-10 10:10:10'},
          {id:2005,name:'Breadcrumb面包屑',type:'导航',date:'2018-10-10 10:10:10'},
          {id:2006,name:'Collapse折叠面板',type:'其它',date:'2018-10-10 10:10:10'},
        ],
        types:[
          {id:1,dife:'基础组件'},
          {id:2,dife:'形式'},
          {id:3,dife:'数据'},
          {id:4,dife:'通知'},
          {id:5,dife:'导航'},
          {id:6,dife:'其它'}
        ]
      }
    },
    methods:{
      showDetail(item) {
        var _t = this;
        _t.$router.push({name:'techNoteDetail',params:{
            techNoteId:item.id
          }
        });
        localStorage.setItem('techNoteId',item.id);
      },
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
    },
    created(){

    }
  }
</script>

<style scoped>

</style>
